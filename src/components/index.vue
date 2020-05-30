<template>
  <div class="main">
    <div class="score">
      <span>BEST 4*4 SCORE</span>
      <span>{{this.$route.params.time?this.$route.params.time:"00:00"}}</span>
      <span>
        <span>- {{this.$route.params.moves?this.$route.params.moves:"0"}}</span>
        <span>MOVES -</span>
      </span>
    </div>
    <div class="btn">
        <button @click="play">PLAY AGAIN</button>
        <button>STATISTICS</button>
        <button>SHARE SCORE</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      play() {
          this.$router.push('/play');
      }
  }
  
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 620px;
  background-image: url("../../static/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.score {
  margin: 50px auto;
  width: 80%;
  height: 150px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.score span:nth-child(1) {
  font-size: 30px;
}
.score>span:nth-child(2) {
  font-size: 60px;
}
.score span:nth-child(3) {
  font-size: 30px;
}
.score span:nth-child(3) span:nth-child(2) {
  font-size: 25px;
}
.btn {
    margin: 50px auto;
    width: 80%;
    display: flex;
    flex-direction: column;
}
.btn button {
    margin: 15px;
    padding: 0;
    outline: none;
    border: none;
    height: 60px;
    font-size: 22px;
    color: white;
    border-radius: 10px;
}
.btn button:nth-child(1) {
    background-color: #00B302;
}
.btn button:nth-child(2) {
    background-color: #191919;
}
.btn button:nth-child(3) {
    background-color: #191919;
}
</style>