<template>
  <div>
    <div
      class="quarter"
      :class="[checkActive, checkDisabled]"
      @click="clickQuarter"
    />
    <QuarterSound :numberQuarter="numberQuarter"  />
  </div>
</template>

<script>
import QuarterSound from "./QuarterSound.vue";
export default {
  components: {
    QuarterSound,
  },
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
  computed: {
    checkActive() {
      console.log(this.numberQuarter == this.numberActive)
      return this.numberQuarter == this.numberActive ? "quarter_active" : "";
    },
    checkDisabled() {
      return this.isQuarterDisabled ? "quarter_disabled" : "";
    },
  },
  methods: {
    clickQuarter() {
      this.$emit("clickQuarter", this.numberQuarter);
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