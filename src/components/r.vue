<template>
  <div class="container">
    <h1>Simon The Game</h1>
    <Notification
      :show="showNotification"
      @closeNotification="showNotification = $event"
      :round="endRound"
    />
    <div class="content">
      <div class="simon">
        <div class="half">
          <div
            class="quarter top-left-quarter"
            :class="[checkActive(0), checkDisabled]"
            @click="!isQuarterDisabled ? clickQuarter(0) : ''"
          />
          <div
            class="quarter top-rigth-quarter"
            :class="checkActive(1)"
            @click="clickQuarter(1)"
          />
        </div>
        <div class="half">
          <div
            class="quarter bottom-left-quarter"
            :class="checkActive(2)"
            @click="clickQuarter(2)"
          />
          <div
            class="quarter bottom-rigth-quarter"
            :class="checkActive(3)"
            @click="clickQuarter(3)"
          />
        </div>
        <div class="center">
          <p class="game-name">Simon</p>
          <p class="game-round">Раунд {{ round }}</p>
        </div>
      </div>
      <div class="box-difficulty-level">
        <h2>Уровень сложности:</h2>
        <div>
          <input
            type="radio"
            name="difficulty-level"
            value="1500"
            v-model="activityTime"
          />
          <label>Легкий</label>
        </div>
        <div>
          <input
            type="radio"
            name="difficulty-level"
            value="1000"
            v-model="activityTime"
          />
          <label>Средний</label>
        </div>
        <div>
          <input
            type="radio"
            name="difficulty-level"
            value="400"
            v-model="activityTime"
          />
          <label>Сложный</label>
        </div>
        <button class="start-button" @click="startGame">Старт</button>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from "./Notification.vue";
export default {
  components: {
    Notification,
  },
  data() {
    return {
      round: 0,
      endRound: 1,
      activityTime: 1500,
      timeInterval: 250,
      isQuarterDisabled: true,
      sequence: [],
      remainingClics: 0,
      activeQuarter: -1,
      showNotification: false,
    };
  },
  computed: {
    checkActive() {
      return (number) => {
        console.log("activ");
        this.activeQuarter == number ? "quarter_active" : "";
      };
    },
    checkDisabled() {
      console.log("dis");
      return this.isQuarterDisabled ? "quarter_disabled" : "";
    },
    // checkActive() {
    //   return (number) => {
    //     return (
    //       (this.activeQuarter == number ? "quarter_active" : "") +
    //       " " +
    //       (this.isQuarterDisabled ? "quarter_disabled" : "")
    //     );
    //   };
    // },
  },
  methods: {
    startGame() {
      this.showNotification = false;
      this.round = 1;
      this.sequence = [];
      this.showSequence();
    },

    async showSequence() {
      let number = this.randomQuarter(4);
      this.sequence.push(number);
      this.remainingClics = this.sequence.length;
      for (const item of this.sequence) {
        await this.getActive(item);
        if (this.sequence.indexOf(item) + 1 < this.sequence.length) {
          await this.addTimeInterval();
        }
      }
      this.isQuarterDisabled = false;
    },

    randomQuarter(max) {
      let rand = Math.random() * max;
      return Math.floor(rand);
    },

    getActive(number) {
      return new Promise((resolve) => {
        console.log(number);
        this.activeQuarter = number;
        setTimeout(async () => {
          this.activeQuarter = -1;
          resolve();
        }, this.activityTime - this.timeInterval);
      });
    },

    addTimeInterval() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, this.timeInterval);
      });
    },

    async clickQuarter(pressedQuarter) {
      if (this.isQuarterDisabled) return;
      if (
        this.sequence[this.sequence.length - this.remainingClics] ===
        pressedQuarter
      ) {
        this.remainingClics--;
        if (!this.remainingClics) {
          this.isQuarterDisabled = true;
          this.round++;
          await this.addTimeInterval();
          this.showSequence();
        }
      } else {
        this.isQuarterDisabled = true;
        this.endRound = this.round;
        this.round = 0;
        this.sequence = [];
        this.showNotification = true;
      }
    },
  },
};
</script>

<style>
.container {
  position: relative;
  max-width: 800px;
  margin: auto;
  color: black;
}

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.simon {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background-color: black;
  border: 5px black solid;
  z-index: 99;
  /* border-left: 15px black solid;
  border-bottom: 15px black solid; */
}

.quarter {
  width: 150px;
  height: 150px;
  border: 3px black solid;
}

.top-left-quarter {
  background-color: #fa448c;
  border-top-left-radius: 100%;
}

.top-rigth-quarter {
  background-color: #fec859;
  border-top-right-radius: 100%;
}

.bottom-left-quarter {
  background-color: #43b5a0;
  border-bottom-left-radius: 100%;
}

.bottom-rigth-quarter {
  background-color: #491d88;
  border-bottom-right-radius: 100%;
}

.quarter:hover {
  cursor: pointer;
  border-color: white;
}

.quarter:active {
  opacity: 0.7;
  border-color: black;
}

.quarter_active {
  filter: brightness(250%);
}

.quarter_disabled:hover {
  border-color: black;
  cursor: auto;
}

.quarter_disabled:active {
  opacity: 1;
}

.center {
  border-radius: 100%;
  background-color: black;
  width: 50%;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #ddd;
  z-index: 100;
}

.game-name {
  text-transform: uppercase;
  font-weight: 700;
  margin: 15px auto;
}

.game-round {
  font-size: 140%;
  margin: 25px auto;
  overflow-x: hidden;
}

.half {
  display: flex;
}

.box-difficulty-level {
  text-align: left;
  padding: 0 30px;
}

.start-button {
  background-color: black;
  color: #ddd;
  border: none;
  margin: 50px auto;
  color: white;
  border-radius: 50px;
  font-size: 2em;
  padding: 10px 40px;
  cursor: pointer;
}

.start-button:hover {
  opacity: 0.7;
}
</style>