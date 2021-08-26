<template>
  <div class="notification" v-if="show">
    <span class="close-button" @click="clickClose">&times;</span>
    <p>
      Игра окончена! <br />
      Ты дошёл до {{ round }} раунда.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    round: {
      type: Number,
      default: 1,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    clickClose() {
      this.$emit("closeNotification", false);
    },
  },
};
</script>

<style>
.notification {
  position: absolute;
  background-color: red;
  right: 0px;
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  overflow: hidden;
  top: 0px;
  text-align: left;
  z-index: 999;
}

.close-button {
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
}

.close-button:hover {
  color: black;
}
</style>