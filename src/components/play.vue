<template>
  <div class="main">
    <div class="time">{{str?str:"00:00:00"}}</div>
    <div class="square">
      <div class="sso" v-for="item in 16" :key="item+'1'">
        <div class="item1" @click="play(item)" v-show="item != x">
          <div class="frame">{{arr[item-1]}}</div>
        </div>
      </div>
    </div>
    <div class="PP" @click="PP">
      <img :src="imgPP" alt="暂停" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPP: "./static/pause.png",
      m: 0,
      ms: 0,
      s: 0,
      time: 0,
      str: "",
      moves: 0,
      x: 16,
      stopn: false,
      random: Math.floor(Math.random() * 16) + 1,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };
  },
  created() {
    this.start();
    this.sum();
  },
  methods: {
    //解决逆序数问题并初始化随机数
    sum() {
      let inum;
      while (inum == NaN || inum % 2 != 0) {
        inum = 0;
        this.arr.sort(() => Math.random() - 0.5);
        for (let i = 0; i < this.arr.length - 1; i++) {
          for (let j = i + 1; j < this.arr.length; j++) {
            if (this.arr[i] > this.arr[j]) {
              inum++;
            }
          }
        }
      }
    },
    //暂停图片切换
    PP() {
      if (this.imgPP == "./static/pause.png") {
        this.imgPP = "./static/play.png";
        this.stop();
      } else {
        this.imgPP = "./static/pause.png";
        this.start();
      }
    },
    //方块移动算法
    play(i) {
      if(this.stopn) {
        return;
      }
      let y;
      let z = 0;
      if (
        i == this.x + 1 ||
        i == this.x - 1 ||
        i == this.x + 4 ||
        i == this.x - 4
      ) {
        y = this.x;
        this.x = i;
        this.arr[y - 1] = this.arr[i - 1];
        this.arr[i - 1] = 16;
        for (let i = 0; i <= 15; i++) {
          if (this.arr[i] == i + 1) {
            z++;
          }
        }
      } else {
        return;
      }
      this.moves++;
      //完成提示
      if (z == 16) {
        this.stop();
        this.$toast({
          text: "你完成了！",
          type: "success",
          duration: 1500
        });
        //延迟返回时间
        clearTimeout(timer);
        let timer = setTimeout(() => {
          this.$router.push({
            name: "index",
            params: { time: this.str, moves: this.moves }
          });
        }, 1200);
      }
    },
    //定义计时函数
    timer() {
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
    //开始
    start() {
      clearInterval(this.time);
      this.time = setInterval(this.timer, 20);
      this.stopn = false;
    },

    //暂停
    stop() {
      clearInterval(this.time);
      this.stopn = true;
    },
    //补0操作
    toDub(n) {
      if (n < 10) {
        return "0" + n;
      } else {
        return n;
      }
    },

    //给毫秒补0操作
    toDubms(n) {
      if (n == 0) {
        return "00";
      } else if (n > 10 && n < 100) {
        return "0" + n / 10;
      } else {
        return n / 10;
      }
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
.time {
  margin: 30px auto;
  line-height: 50px;
  width: 170px;
  font-size: 35px;
  height: 50px;
  border-radius: 20px;
  color: white;
  border: 2px solid;
}
.square {
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  width: 320px;
  height: 320px;
  padding: 5px;
  background-color: #000;
}
.sso {
  width: 80px;
  height: 80px;
}
.item1 {
  padding: 5px;
  margin: 1px;
  background-color: #b07517;
  border-radius: 10px;
}
.frame {
  width: 65px;
  height: 65px;
  color: white;
  font-size: 55px;
  line-height: 70px;
  border: 2px solid #fff;
}
.PP {
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #2ebca6;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>