 
<template>
  <div class="downloadwrap">
    <div style="text-align: center; padding-top: 35%"></div>
    <div class="downloadbtn" @click="download">下载App</div>
  </div>
</template>
<script>
export default {
  name: "download",
  methods: {
    download() {
      var browser = {
        versions: (function () {
          var u = navigator.userAgent,
            app = navigator.appVersion;
          return {
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile:
              !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
            iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
          };
        })(),
        language: (
          navigator.browserLanguage || navigator.language
        ).toLowerCase(),
      };

      if (
        browser.versions.ios ||
        browser.versions.iPhone ||
        browser.versions.iPad
      ) {
        //判断是IOS后跳转到相应的链接
        var loadDateTime = new Date();
        window.setTimeout(function () {
          var timeOutDateTime = new Date();
          if (
            Number(timeOutDateTime) - Number(loadDateTime) <
            openAppStoreTime
          ) {
            window.location.href =
              "https://apps.apple.com/cn/app/%E5%92%B8%E9%B1%BCflag/id1578074012";
          } else {
            window.close();
          }
        }, 25);
        window.location.href = "https://hengfengstudio.com";
      } else if (browser.versions.android) {
        //判断是android后跳转到相应的链接
        this.goAndriAddr();
      }
    },

    goAndriAddr() {
      //跳转到安卓商城地址
      var ua = navigator.userAgent.toLowerCase();
      let isOppo = ua.indexOf("oppo") != -1;
      let isHuawei = ua.indexOf("huawei") != -1;
      let isMi = ua.indexOf("redmi") != -1 || ua.indexOf("xiaomi") != -1;
      let hreff = "";
      // alert(ua)
      if (isOppo) {
        hreff = "vivoMarket://details?id=XXX";
      } else if (isHuawei) {
        hreff = "https://appgallery.huawei.com/app/C106411875";
      } else if (isMi) {
        hreff = "https://app.mi.com/details?id=com.saltedfish.tool&ref=search";
      } else {
        hreff = "https://webcdn.m.qq.com/webapp/homepage/index.html#/appDetail?apkName=com.saltedfish.tool&info=4FA840F252770FA3EF2949D92311CE49"; // 官网下载地址  也可以跳到应用宝
      }
      window.location.href = hreff;
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

.downloadbtn {
  width: 260px;
  height: 40px;
  line-height: 40px !important;
  color: white;
  background: linear-gradient(270deg, #37a0ff, #2b6eef);
  text-align: center;
  font-size: 0.6rem;
  line-height: 1rem;
  margin: 15% auto;
  border-radius: 0.2rem;
}
</style>
 