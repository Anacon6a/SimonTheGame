<template>
  <div class="game-panel">
    <div class="half">
      <Quarter
        class="top-left-quarter"
        :numberQuarter="0"
        :numberActive="activeQuarter"
        :isQuarterDisabled="isQuartersDisabled"
        @click="clickQuarter"
      />
      <Quarter
        class="top-rigth-quarter"
        :numberQuarter="1"
        :numberActive="activeQuarter"
        :isQuarterDisabled="isQuartersDisabled"
        @click="clickQuarter"
      />
    </div>
    <div class="half">
      <Quarter
        class="bottom-left-quarter"
        :numberQuarter="2"
        :numberActive="activeQuarter"
        :isQuarterDisabled="isQuartersDisabled"
        @click="clickQuarter"
      />
      <Quarter
        class="bottom-rigth-quarter"
        :numberQuarter="3"
        :numberActive="activeQuarter"
        :isQuarterDisabled="isQuartersDisabled"
        @click="clickQuarter"
      />
    </div>
    <div class="center">
      <p class="game-name">Simon</p>
      <p class="game-round">Раунд {{ round }}</p>
    </div>
  </div>
</template>

<script>
import Quarter from "./Quarter.vue";
export default {
  components: {
    Quarter,
  },
  props: {
    timeInterval: {
      default: 1500,
    },
  },
  data() {
    return {
      activeQuarter: -1,
      isQuartersDisabled: true,
      round: 0,
      sequence: [],
      remainingClics: 0,
      timeout: 250,
    };
  },
  methods: {
    startGame() {
      this.isQuartersDisabled = true;
      this.round = 1;
      this.sequence = [];
      this.showSequence();
    },

    async showSequence() {
      let number = this.randomQuarter(4);
      this.sequence.push(number);
      this.remainingClics = this.sequence.length;
      for (const item of this.sequence) {
        await this.makeActive(item);
        if (this.sequence.indexOf(item) + 1 < this.sequence.length) {
          await this.addTimeout();
        }
      }
      this.isQuartersDisabled = false;
    },

    randomQuarter(max) {
      let rand = Math.random() * max;
      return Math.floor(rand);
    },

    makeActive(number) {
      return new Promise((resolve) => {
        console.log(number);
        this.activeQuarter = number;
        setTimeout(async () => {
          this.activeQuarter = -1;
          resolve();
        }, this.timeInterval - this.timeout);
      });
    },

    addTimeout() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, this.timeout);
      });
    },

    clickQuarter(pressedQuarter) {
      if (this.isQuartersDisabled) return;
      if (
        this.sequence[this.sequence.length - this.remainingClics] ===
        pressedQuarter
      ) {
        this.remainingClics--;
        if (!this.remainingClics) {
          this.startNextRound();
        }
      } else {
        this.finishGame();
      }
    },

    async startNextRound() {
      this.isQuartersDisabled = true;
      this.round++;
      await this.addTimeout();
      this.showSequence();
    },

    finishGame() {
      this.isQuartersDisabled = true;
      this.$emit("finishGame", this.round);
      this.round = 0;
      this.sequence = [];
      this.showNotification = true;
    },
  },
};
</script>

<style>
.game-panel {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background-color: black;
  border: 5px black solid;
  z-index: 99;
  /* border-left: 15px black solid;
  border-bottom: 15px black solid; */
}

.half {
  display: flex;
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
</style>