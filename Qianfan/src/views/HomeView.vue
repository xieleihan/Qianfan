<template>
  <div class="home">
    <TophomeCom></TophomeCom>
    <div class="pcontainer">
      <div class="contoptime">
        <p class="ptimeinfo">{{ time }}</p>
      </div>
      <div class="line">
        <div class="left">
          <div class="avater">
            <img src="../assets/images/peacock_flat.png" alt="">
            <p class="avaterinfo">你的小助手</p>
          </div>
          <div class="container">
            你好,请问有什么可以帮助您的吗？
          </div>
        </div>
        <div v-for="(item, index) in LineStore.sum" :key="index" :class="item.role === 'right' ? 'right' : 'left'">
          <div class="avater">
            <img :src="item.role === 'right' ? rightAvatarUrl : leftAvatarUrl" alt="">
            <p class="avaterinfo" v-if="item.role === 'left'">你的小助手</p>
            <p class="avaterinfo" v-if="item.role === 'right'">Administer</p>
          </div>
          <div class="container">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="inputBox">
      <input v-model="inputsms" type="text" placeholder="请输入文本信息">
      <div class="btn" @click="sendAi">
        <van-icon name="guide-o" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TophomeCom from '../components/TophomeCom.vue'
import { ref,onMounted } from 'vue'
const time = ref('')
onMounted(() => {
  time.value = new Date().toLocaleTimeString()
})

import axios from 'axios';

// 引入pinia
import { useLineStore } from '../stores/line'
const LineStore = useLineStore();

const rightAvatarUrl = new URL('../assets/images/peacock_flat.png', import.meta.url).href;
const leftAvatarUrl = new URL('../assets/images/peacock_flat.png', import.meta.url).href;

const inputsms = ref('');
const sendAi = () => {
  LineStore.addRight(inputsms.value);
  const usertoken = sessionStorage.getItem('usertoken');
  const username = sessionStorage.getItem('username');
  axios.get(`https://frp-leg.top:26112/public/baiduai?message=${inputsms.value}&usertoken=${usertoken}&username=${username}`).then((res) => {
    LineStore.addLeft(res.data.result);
    console.log(res.data.result)
  }).catch((err) => {
    console.log(err)
  })
  inputsms.value = '';
}
</script>

<style scoped lang="less">
@import '../public/publiccss.less';
  .home{
    width: 100%;
    height: 100%;
    .pcontainer{
      width: 100%;
      height: calc(100% - 120px);
      overflow-y: scroll;
      .contoptime{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        .ptimeinfo{
          background-color: #ccc;
          padding:3px;
          color: rgba(255, 255, 255, .55);
        }
      }
      .line {
        width: 100%;
        height: calc(100% - 30px);
        padding: 0 20px;
    
        .datebox {
          width: 50px;
          height: 20px;
          color: #b3b3b3;
          text-align: center;
          margin: 10px auto;
          line-height: 20px;
          background-color: #ccc;
        }
    
        .left,
        .right {
          width: 80%;
          height: auto;
          position: relative;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
    
        .left {
          justify-content: flex-start;
          margin-left: 5px;
    
          .avater {
            margin-right: 10px;
            display: flex;
            align-items: center;
            text-wrap: nowrap;
            color: #ccc;
    
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
          }
    
          .container {
            background-color: @googleBlue;
            color: white;
            padding: 10px;
            border-radius: 0 @radius @radius @radius;
            max-width: calc(100% - 40px);
            font-size: 14px;
            margin-left: 35px;
          }
        }
    
                .right {
                  width: 100%;
                  align-self: flex-end; // 让右侧消息靠右对齐
                  margin-right: 5px;
                  display: flex;
                  flex-direction: column; // 让头像在右边
                  align-items: flex-end;
                  position: relative;
                  justify-content: flex-end;
        
                  .avater {
                    margin-left: 10px;
                    display: flex;
                    flex-direction: row-reverse;
                    text-wrap: nowrap;
                    color: #ccc;
        
                    img {
                      width: 30px;
                      height: 30px;
                      border-radius: 50%;
                    }
                  }
        
                  .container {
                    background-color: @googleBlue;
                    color: white;
                    padding: 10px;
                    border-radius: @radius 0 @radius @radius;
                    max-width: calc(100% - 40px);
                    font-size: 14px;
                    margin-right: 35px; // 确保右侧消息有适当的偏移
                  }
                }
      }
    }
    .inputBox{
      width: 100%;
      height: 70px;
      padding: 0 20px;
      
      position: relative;
      display: flex;
      align-items: center;
      input{
        width: 100%;
        height: 50px;
        border-radius: @radius;
        border: 1px solid #ccc;
        padding-left: 15px;
      }
      div{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
        background-color: @googleBlue;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>