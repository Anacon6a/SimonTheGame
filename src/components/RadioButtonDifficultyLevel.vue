<template>
  <div>
    <div>
      <input
        type="radio"
        name="difficulty-level"
        value=1500
        v-model="timeInterval"
        @change="change"
      />
      <label>Легкий</label>
    </div>
    <div>
      <input
        type="radio"
        name="difficulty-level"
        value=1000
        v-model="timeInterval"
        @change="change"
      />
      <label>Средний</label>
    </div>
    <div>
      <input
        type="radio"
        name="difficulty-level"
        value=400
        v-model="timeInterval"
        @change="change"
      />
      <label>Сложный</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeInterval: 1500,
    };
  },
  methods: {
    change() {
      this.$emit("changeLevel", this.timeInterval);
    },
  },
};
</script>

<style>
</style>