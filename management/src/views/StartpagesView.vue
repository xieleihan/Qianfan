<template>
    <div class="startPages">
        <CodeWatch></CodeWatch>
        <div class="startBox" v-if="!isOpen">
            <div class="top">
                <img src="../assets/images/peacock_flat.png" alt="">
            </div>
            <div class="bottom">
                <p>千帆大模型管理后台</p>
                <button @click="setDisplay">点击登录</button>
            </div>
            <div class="copyright">
                <p>Copyright© 2024 千帆, SouthAki开发所有.</p>
            </div>
        </div>
        <div class="container" v-if="isOpen">
            <div class="inputBox">
                <div class="cores" @click="noDisplay">
                    <van-icon name="cross" />
                </div>
                <p>登录</p>
                <input type="text" placeholder="请输入管理员账号">
                <div class="emailBox">
                    <transition name="fade">
                        <input class="inputemail" :style="leftWidth" type="email" placeholder="请输入管理员邮箱"
                        v-show="!smallBtnOpen" />
                    </transition>
                        <div class="sendemail" @click="leftscroll">发送验证码</div>
                        <transition name="fade">
                            <div class="veremailcode" v-show="smallBtnOpen" :style="{ width: rightWidth }">
                                <input class="inputvercode" type="text" maxlength="6" placeholder="邮箱验证码" />
                                <div class="updata" @click="rightscroll">修改邮箱</div>
                            </div>
                        </transition>
                </div>
                <input type="password" placeholder="请输入密码">
                <div class="verificationBox">
                    <input type="text" maxlength="4" placeholder="验证码">
                    <div></div>
                </div>
                <button>验证</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 导入模块区域
import { ref } from 'vue';
import { onMounted } from 'vue';
import CodeWatch from '@/components/CodeWatch.vue';

onMounted(() => {
    document.title = '千帆大模型管理后台';
})

//函数区域
const setDisplay = () => {
    isOpen.value = true;
}

const noDisplay = () => {
    isOpen.value = false;
}

const leftscroll = () => {
    leftWidth.value = '0%';
    rightWidth.value = '100%';
    smallBtnOpen.value = true;
}

const rightscroll = () => {
    leftWidth.value = '60%';
    rightWidth.value = '0%';
    smallBtnOpen.value = false;
}

// 变量
const isOpen = ref<boolean>(false);
const smallBtnOpen = ref<boolean>(false);
const leftWidth = ref('60%');
const rightWidth = ref('0%');

</script>

<style scoped lang="less">
@import '../public/publiccss.less';

.startPages {
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    

    .startBox {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: @radius;
        width: 320px;
        height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .top {
            width: 100px;
            height: 100px;
            margin-bottom: 30px;

            img {
                width: 100%;
                height: 100%;
                aspect-ratio: 1/1;
            }
        }

        .bottom {
            display: flex;
            flex-direction: column;

            p {
                font-size: 30px;
                letter-spacing: 3px;
                margin-bottom: 10px;
            }

            button {
                width: 100%;
                height: 40px;
                border-radius: @radius;
                background-color: transparent;
                border: 1px solid @themeColor;
                color: @themeColor;
            }
        }

        .copyright {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #ccc;
        }
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        backdrop-filter: blur(5px);

        .inputBox {
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: @radius;
            width: 400px;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            position: relative;

            .emailBox{
                width: 80%;
                display: flex;
                flex-direction: row;
                
                .inputemail{
                    width: 60%;
                    // transition: all 0.11s;
                }
                .sendemail{
                    width: 40%;
                    height: 50px;
                    background-color: @themeColor;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-wrap: nowrap;

                }
                .veremailcode{
                    width: 0%;
                    display: flex;
                    flex-direction: row;
                    transition: all 0.5s;
                    .inputvercode{
                        width: 70%;
                        padding: 0;
                        text-align: center;
                    }
                    .updata{
                        width: 30%;
                        height: 50px;
                        background-color: @googleRed;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

            .cores {
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 30px;
            }

            p {
                font-size: 30px;
            }

            input {
                height: 50px;
                border: none;
                width: 80%;
                border: 1px solid #ccc;
                padding-left: 15px;

            }

            button {
                width: 80%;
                height: 50px;
                border: none;
                background-color: @themeColor;
                color: white;
                border-radius: @radius;
            }

            .verificationBox {
                width: 80%;
                display: flex;
                flex-direction: row;

                input {
                    border-radius: 0;
                }
            }
        }
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>