<template>
  <div
    class="quarter"
    :class="[checkActive, checkDisabled]"
    @click="clickQuarter"
  />
</template>

<script>

export default {
  props: {
    isQuarterActive: {
      type: Boolean,
      default: false,
    },
    isQuarterDisabled: {
      type: Boolean,
      default: true,
    },
    numberQuarter: {
      type: Number,
    },
  },
  computed: {
    checkActive() {
      return this.isQuarterActive == true ? "quarter_active" : "";
    },
    checkDisabled() {
      return this.isQuarterDisabled ? "quarter_disabled" : "";
    },
  },
  methods: {
    clickQuarter() {
      this.$emit("clickQuarter");
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