<template>
    <div class="startpages" v-if="!startStore.isOpen">
        <CodeWatch></CodeWatch>
        <div class="desc">
            <img src="../assets/images/peacock_flat.png" alt="">
            <p class="title">千帆大模型</p>
            <p class="info">沉舟侧畔千帆过,病树前头万木春</p>
        </div>
        <div class="btnBox">
            <button class="btn" @click="goToLogin">登录</button>
            <button class="btn" @click="goToRegister">注册</button>
        </div>
    </div>
    <router-view name="loginstart"></router-view>
    <router-view name="registerstart"></router-view>
</template>

<script setup lang="ts">
import CodeWatch from '../components/CodeWatch.vue';
import router from '../router/index';
import { useStartStore } from '../stores/start';

const startStore = useStartStore();

const goToLogin = () => {
    startStore.open();
    router.push({name: 'login'});
}

const goToRegister = () => {
    startStore.open();
    router.push({ path: '/startpages/register' });
}
</script>

<style scoped lang="less">
@import '../public/publiccss.less';
    .startpages{
        width: 100%;
        height: 100%;
        position: relative;
        .desc{
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 150px;
                height: 150px;
                aspect-ratio: 1/1;
                margin-bottom: 10px;
            }
            .title{
                font-size: 24px;
                color: black;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .info{
                color: #ccc;
                text-align: center;
                text-wrap: nowrap;
                letter-spacing: 3px;
            }
        }
        .btnBox{
            width: 80%;
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
            .btn{
                width: 100%;
                height: 50px;
                border: 1px solid #ccc;
                display: block;
                margin-bottom: 15px;
                border-radius: @radius;
                &:last-child{
                    margin-bottom: 0;
                }
                &:nth-child(1){
                    background-color: @googleBlue;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &:nth-child(2){
                    border: 1px solid @googleBlue;
                    color: @googleBlue;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                }
            }
        }
    }
</style>