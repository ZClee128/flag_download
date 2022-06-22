 
<template>
  <div class="guide-wrap" v-show="guideShow">
    <div class="wxtip">在微信中无法下载APP
      1. 请点击右上角按钮 
      2. 选择【在浏览器中打开】</div>
    <img class="logo-img" src="@/assets/default_logo_ldy@2x.png" alt="" />
    <img class="down-img" src="@/assets/default_ldy@2x.png" alt="" />
    <div class="downloadbtn">立即下载</div>
  </div>
</template>
<script >
import { useRouter } from "vue-router";

const router = useRouter();

export default {
  name: "AppDownload",
  data() {
    return {
      guideShow: false,
      userAgent: navigator.userAgent.toLowerCase(),
    };
  },
  created() {
    if (this.isWeChatOrQQ(this.userAgent)) {
      // 是微信或者QQ，使页面变为引导页，引导用户在浏览器中打开该链接
      this.guideShow = true;
    } else if (
      this.isAndroid(this.userAgent) ||
      this.isHuaWei(this.userAgent)
    ) {
      //直接跳转app下载页面
      this.$router.push("/download");
    } else if (this.isIOS(this.userAgent)) {
      //直接跳转app下载页面
      this.$router.push("/download");
      // alert('ios')
    } else {
      alert("无法判断终端操作系统类型", this.userAgent);
      document.write("userAgent: \t", this.userAgent);
    }
  },
  methods: {
    isIOS() {
      return !!this.userAgent.match(/os [\d._]*/gi);
    },
    isAndroid() {
      return (
        this.userAgent.indexOf("android") > -1 ||
        this.userAgent.indexOf("linux") > -1
      );
    },
    isHuaWei() {
      return !!(this.userAgent.indexOf("windows nt") > -1);
    },
    isWeChatOrQQ() {
      const ua = this.userAgent.toLowerCase();
      if (ua.indexOf("micromessenger") > -1) {
        // 如果是微信
        return true;
      } else if (/mqqbrowser[\S|\s]*qq/.test(ua) || / qq/.test(ua)) {
        // 如果是QQ
        return true;
      }
      return false;
    },
    async downloadFile(url, fileName) {
      await fetch(url, {
        method: "Get",
        mode: "cors",
        headers: {},
        responseType: "blob",
      }).then((response) => {
        response.blob().then((blob) => {
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, fileName);
          } else {
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            window.URL.revokeObjectURL(link.href);
          }
        });
      });
    },
  },
};
</script>
<style type="text/css">
body,
div,
span,
i {
  font-size: 100%;
  box-sizing: border-box;
}
.guide-wrap {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
}
.guide-item {
  display: block;
  background: #fff;
}
.guide-text {
  width: 15rem;
  position: absolute;
  top: 10%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 0.4rem 1rem;
  border-radius: 5rem;
  border-top-right-radius: 1rem;
  overflow: hidden;
}
.gudde-btn {
  width: 10rem;
  text-align: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  padding: 0.4rem 1rem;
  border-radius: 5rem;
  overflow: hidden;
}
@keyframes fade {
  from {
    top: 0;
  }
  to {
    top: 100vh;
  }
}
@-webkit-keyframes fade {
  from {
    top: 0;
  }
  to {
    top: 100vh;
  }
}
.wrap-fade {
  animation: fade 3s ease-in;
}

.logo-img {
  width: 100%;
  margin-top: 38px;
}

.down-img {
  margin-top: 10px;
  width: 100%;
}

.downloadbtn {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  background-color: #3097ff;
  width: 220px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  line-height: 50px;
  letter-spacing: 0.22px;
  text-align: center;
  margin-top: 20px;
}

.wxtip {
  background: #3097ff;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 1.8;
}

</style>
 