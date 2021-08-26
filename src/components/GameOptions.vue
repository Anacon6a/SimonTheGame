<template>
  <div class="game-option">
    <h2>Уровень сложности:</h2>
    <RadioButtonDifficultyLevel @changeLevel="changeLevel" />
    <button class="start-button" @click="start">Старт</button>
  </div>
</template>

<script>
import RadioButtonDifficultyLevel from "./RadioButtonDifficultyLevel.vue";
export default {
  components: {
    RadioButtonDifficultyLevel,
  },
  methods: {
    start() {
      this.$emit("start");
    },
    changeLevel(timeInterval) {
       this.$emit("changeLevel", timeInterval);
    },
  },
};
</script>

<style>
.game-option {
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