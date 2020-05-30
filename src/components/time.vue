<template>
  <div class="wrapper">
    <h1 id="mytime">{{str}}</h1>
    <!-- <input id="mytime" type="text" name="" value="显示时间"> -->
    <button id="stop" name="button" @click="stop">stop</button>
    <button id="start" name="button" @click="start">start</button>
    <button id="reset" name="button" @click="reset">reset</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //定义分，秒，毫秒并初始化为0；
      m: 0,
      ms: 0,
      s: 0,
      time: 0,
      str: "",
    };
  },
  methods: {
    timer() {
      //定义计时函数
      this.ms = this.ms + 20; //毫秒
      if (this.ms >= 1000) {
        this.ms = 0;
        this.s = this.s + 1; //秒
      }
      if (this.s >= 60) {
        this.s = 0;
        this.m = this.m + 1; //分钟
      }
      this.str =
        this.toDub(this.m) +
        ":" +
        this.toDub(this.s) +
        ":" +
        this.toDubms(this.ms);
    },

    reset() {
      //重置
      clearInterval(this.time);
      this.h = 0;
      this.m = 0;
      this.ms = 0;
      this.s = 0;
      this.str = "00:00:00";
    },

    start() {
      //开始
      clearInterval(this.time);
      this.time = setInterval(this.timer, 20);
    },

    stop() {
      //暂停
      clearInterval(this.time);
    },

    toDub(n) {
      //补0操作
      if (n < 10) {
        return "0" + n;
      } else {
        return "" + n;
      }
    },

    toDubms(n) {
        
      //给毫秒补0操作
      if (n == 0) {
        return "00";
      }else if (n > 10 && n< 100) {
        return "0" + n/10;
      } else {
        return n/10;
      }
    }
  },
  //实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，$el 还不可用。需要初始化处理一些数据时会比较有用
  created: function() {}
};
</script>
<style scoped>
#mytime {
  background: #bbb;
  color: #fff;
  display: block;
}
.wrapper {
  text-align: center;
  width: 60%;
  margin: 250px auto;
}
</style>