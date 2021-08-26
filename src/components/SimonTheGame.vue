<template>
  <div class="container">
    <h1>Simon The Game</h1>
    <Notification
      :show="showNotification"
      @closeNotification="showNotification = $event"
      :round="endRound"
    />
    <div class="content">
      <GamePanel
        ref="GamePanel"
        :timeInterval="timeInterval"
        @finishGame="finishGame"
      />
      <GameOptions 
      @start="startGame"
      @changeLevel="timeInterval = $event" />
    </div>
  </div>
</template>

<script>
import Notification from "./Notification.vue";
import GamePanel from "./GamePanel.vue";
import GameOptions from "./GameOptions.vue";
export default {
  components: {
    Notification,
    GamePanel,
    GameOptions,
  },
  data() {
    return {
      timeInterval: 1500,
      endRound: 1,
      showNotification: false,
    };
  },
  methods: {
    startGame() {
      this.showNotification = false;
      this.$refs.GamePanel.startGame();
    },
    finishGame(round) {
      this.endRound = round;
      this.showNotification = true;
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
</style>