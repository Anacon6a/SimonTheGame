<template>
  <div>
    <div
      class="quarter"
      :class="[quarters[numberQuarter], active, disabled]"
      @click="clickQuarter"
    />
  </div>
</template>

<script>
export default {
  props: {
    isQuarterDisabled: {
      type: Boolean,
      default: true,
    },
    numberActive: {
      type: Number,
    },
    numberQuarter: {
      type: Number,
    },
  },
  data() {
    return {
      quarters: [
        "top-left-quarter",
        "top-rigth-quarter",
        "bottom-left-quarter",
        "bottom-rigth-quarter",
      ],
    };
  },
  computed: {
    active() {
      return this.numberQuarter == this.numberActive ? "quarter_active" : "";
    },
    disabled() {
      return this.isQuarterDisabled ? "quarter_disabled" : "";
    },
  },
  watch: {
    numberActive(val) {
      if (this.numberQuarter == val) {
        this.playSound();
      }
    },
  },
  methods: {
    clickQuarter() {
      if (!this.isQuarterDisabled) {
        this.playSound();
        this.$emit("clickQuarter", this.numberQuarter);
      }
    },
    playSound() {
      const sound = require(`../assets/audio/${this.numberQuarter}.ogg`);
      const audio = new Audio(sound);
      audio.play().catch((error) => {
        console.error(error);
      });
    },
  },
};
</script>

<style>
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
</style>