<template>
  <div class="wrap">
    <myHeader />
    <main>
      <!--顶部-->
      <!--      <div class="custom_top">-->
      <!--        <p class="custom_name">客户总数</p>-->
      <!--        <p class="custom_company"><span class="custom_company_text">全公司</span><span class="custom_company_time">截止 2020-06-21 18:43:21 </span></p>-->
      <!--      </div>-->
      <msgHeader :msg="{ title, name }"></msgHeader>
      <div class="space"></div>
      <!--内容1-->
      <div class="custom_content">
        <div class="custom_content_top clearfix">
          <p class="custom_content_address fl">HHJHJJ20109009</p>
          <p class="custom_content_status fr">未付款</p>
        </div>
        <div class="line"></div>
        <h5 class="collect_money">¥ 897,00</h5>
        <ul class="custom_content_text">
          <li class="margin_bottom">
            <p>负责人：</p>
            <p>张彦君</p>
          </li>
          <li class="margin_bottom">
            <p>预计回款日期：</p>
            <p>2020-05-16</p>
          </li>
          <li class="margin_bottom">
            <p>关联合同：</p>
            <p>关联合同</p>
          </li>
          <li>
            <p>关联客户：</p>
            <p>中国航空有限责任公司</p>
          </li>
        </ul>
      </div>
      <div class="space"></div>
      <!--内容2-->
      <div class="custom_content">
        <div class="custom_content_top clearfix">
          <p class="custom_content_address fl">HHJHJJ20109009</p>
          <p class="custom_content_status fr">未付款</p>
        </div>
        <div class="line"></div>
        <h5 class="collect_money">¥ 897,00</h5>
        <ul class="custom_content_text">
          <li class="margin_bottom">
            <p>负责人：</p>
            <p>张彦君</p>
          </li>
          <li class="margin_bottom">
            <p>预计回款日期：</p>
            <p>2020-05-16</p>
          </li>
          <li class="margin_bottom">
            <p>关联合同：</p>
            <p>关联合同</p>
          </li>
          <li>
            <p>关联客户：</p>
            <p>中国航空有限责任公司</p>
          </li>
        </ul>
      </div>
      <div class="space"></div>
    </main>
  </div>
</template>
<script>
import msgHeader from "../components/msg-header";
export default {
  components: {
    msgHeader
  },
  data() {
    return {
      title: "计划收款",
      name: "全公司",
      time: null,
      list: []
    };
  },
  methods: {
    // this.time = res.data.data.time
    // this.list = res.data.data.list
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  main {
    flex: 1;
    overflow: scroll;
    margin-top: 44px;
    text-align: left;
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .clearfix::after {
      content: " ";
      display: block;
      height: 0;
      line-height: 0;
      clear: both;
      visibility: hidden;
    }
    /*顶部样式*/
    /*.custom_top{*/
    /*  padding: 0.16rem 0.12rem;*/
    /*  .custom_name{*/
    /*    font-size: 0.21rem;*/
    /*    color: #333;*/
    /*    margin-bottom: 0.09rem;*/
    /*  }*/
    /*  .custom_company{*/
    /*    .custom_company_text{*/
    /*      border:0.01rem solid #006aff;*/
    /*      border-radius: 0.02rem;*/
    /*      background: #006aff;*/
    /*      color: #fff;*/
    /*      font-size: 0.02rem;*/
    /*      padding: 0.02rem 0.09rem;*/
    /*    }*/
    /*    .custom_company_time{*/
    /*      margin-left: 0.08rem;*/
    /*      color: #666;*/
    /*      font-size: 0.16rem;*/
    /*      vertical-align: middle;*/
    /*    }*/
    /*  }*/
    /*}*/
    .space {
      height: 0.12rem;
      background: #f8f9fa;
    }
    /*内容*/
    .custom_content {
      padding: 0.12rem 0.12rem 0rem 0.12rem;
      font-family: PingFangSC-Regular, PingFang SC;
      .custom_content_top {
        .custom_content_address {
          font-size: 0.16rem;
          line-height: 0.22rem;
          color: #333;
        }
        .custom_content_status {
          font-size: 0.14rem;
          color: #ff9201;
          line-height: 0.2rem;
          margin-top: 0.01rem;
        }
      }
      .line {
        border: 0.01rem solid #dbe4ef;
        margin-top: 0.1rem;
      }
      .collect_money {
        font-size: 0.18rem;
        color: #333;
        font-weight: 600;
        line-height: 0.25rem;
        padding-top: 0.13rem;
      }
      .custom_content_text {
        padding: 0.15rem 0rem 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        li {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          line-height: 0.17rem;
          p {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            /*justify-content: center;*/
            color: #666666;
            font-size: 0.12rem;
          }
          p:nth-child(1) {
            width: 35%;
            text-align: left;
            justify-content: left;
          }
          p:nth-child(2) {
            width: 65%;
            color: #999999;
          }
        }
        .margin_bottom {
          margin-bottom: 0.06rem;
        }
      }
    }
  }
}
</style>
