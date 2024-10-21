<template>
    <div class="login">
        <div class="container">
            <p class="title">登录</p>
            <p class="info">欢迎回来</p>
            <input v-model="inputusername" class="input" type="text" placeholder="请输入用户名">
            <div class="passwordBox">
                <input v-model="inputuserpassword" id="passwordinput" class="input" :type="passwordType" placeholder="请输入密码">
                <img @click="toggleType" :src="imgSrc" alt="切换密码显示">
            </div>
            <div class="format">
                <span>忘记密码?</span>
            </div>
            <div class="protype">
                <input type="checkbox" v-model="checkbox">
                <span>我已阅读并同意千帆大模型的<span class="textDisplay" @click="showPopup">《用户协议》</span>和<span
                        class="textDisplay" @click="showPopup1">《隐私政策》</span></span>
            </div>
            <button @click="sendLogin">登录</button>
            <button @click="returnTop" class="returnTop">返回</button>
            <div class="goToRegister"><span @click="goToRegister">还没账户?点击加入我们</span></div>
        </div>
        <div class="desc">{{ bgList[bgIndex].desc }}</div>
    </div>
    <van-popup v-model:show="show" closeable round :style="{ width: '70%', height: '70%', padding: '20px 20px' }">
        <p class="protypetitle">用户协议</p>
        <div class="protypeContainer">
            <p>欢迎使用本应用程序（以下简称“本应用”）。在使用本应用前，请您仔细阅读以下用户协议（以下简称“协议”）。本协议是用户（以下简称“您”或“用户”）与本应用之间就使用本应用所订立的协议。您在使用本应用时必须遵守本协议的各项条款和条件。一旦您使用本应用，即表示您接受本协议的全部内容。
            </p>

            <p>
                一、使用条款的接受
                您在使用本应用前，应仔细阅读并同意本协议的全部条款。如果您不同意本协议的任何内容，您应立即停止使用本应用。
                本应用有权根据需要修改本协议，修改后的协议一经发布即自动生效。您在本协议修改后继续使用本应用，即视为您接受修改后的协议。
            </p>
            <p>二、用户注册
                使用本应用的部分功能需要注册用户账号。注册时，您应提供准确、真实、完整的个人信息。
                您必须保证注册账号的真实性和合法性，不得冒用他人身份进行注册或以不实信息注册账号。
                您有责任妥善保管自己的账号和密码，不得将其泄露或与他人共用。因账号密码泄露或被盗所产生的后果由您自行承担。</p>
            <p>
                三、用户行为规范 用户在使用本应用时，应遵守法律法规和社会道德，不得从事以下行为： 发布或传播非法、淫秽、暴力、反动等内容；
                侵犯他人隐私、知识产权或其他合法权益；进行任何形式的网络攻击、非法侵入或篡改本应用系统的行为； 发布任何包含广告、垃圾信息、恶意链接的内容；
                其他违反法律法规、公共秩序或社会道德的行为。用户在使用本应用时，不得通过非法方式获取本应用的数据或干扰本应用的正常运行。
            </p>
            <p>四、知识产权声明
                本应用的所有内容（包括但不限于文字、图片、音频、视频等）及其相关的知识产权归本应用或相关权利人所有，受法律保护。除非事先获得本应用或相关权利人的书面同意，您不得擅自复制、修改、发布、传播或以其他方式使用本应用的内容。
            </p>
            <p>
                五、隐私保护
                本应用重视用户隐私的保护，在您同意的情况下会收集、存储和使用您的个人信息。您同意本应用按照隐私政策的规定对您的个人信息进行处理。 本应用不会将您的个人信息泄露给第三方，除非法律法规要求或经过您的同意。
            </p>
            <p>
                六、责任限制 本应用对用户在使用过程中可能出现的服务中断或信息丢失不承担任何责任。
                本应用不保证其所提供的服务完全无误或无故障。因不可抗力或其他非本应用原因导致的服务中断或信息丢失，本应用不承担任何责任。用户在使用本应用过程中因违反本协议或法律法规所产生的任何后果，由用户自行承担责任。
            </p>
            <p>
                七、协议终止 本应用有权在不通知用户的情况下，随时终止或限制用户的使用权利。
                如果用户违反本协议的任何条款，本应用有权随时停止用户的服务资格。
            </p>
            <p>
                八、适用法律及争议解决 本协议的解释、效力及纠纷的解决均适用本应用运营所在地的法律。
                因本协议或本应用产生的任何纠纷，双方应首先友好协商解决；协商不成的，任何一方均可向本应用运营所在地有管辖权的法院提起诉讼。
            </p>
            <p>
                九、其他 本协议的标题仅为方便阅读所设，不影响协议条款的含义和解释。
                如果本协议中的任何条款因任何原因被认定为无效或不可执行，不影响其余条款的效力。
            </p>
            <p>
                感谢您使用本应用！如果您有任何疑问或建议，请联系我们的客服团队。
            </p>
        </div>
    </van-popup>
    <van-popup v-model:show="show1" closeable round :style="{ width: '70%', height: '70%', padding: '20px 20px' }">
        <p class="protypetitle">隐私政策</p>
        <div class="protypeContainer">
            <p>千帆大模型（以下简称“我们”）重视用户（以下简称“您”）的隐私权，并致力于保护您的个人信息安全。请您在使用我们的服务前，仔细阅读并了解本隐私政策的内容，以便了解我们如何收集、使用、存储和保护您的个人信息。
            </p>

            <p>
                一、信息的收集
                账户信息：在您注册和登录我们的服务时，我们可能会收集您的用户名、电子邮箱、密码等信息。
                设备信息：为优化用户体验，我们可能会收集您的设备信息，如设备型号、操作系统、唯一设备标识符、网络类型等。
                日志信息：当您使用我们的服务时，系统可能会自动收集一些日志信息，包括您使用的功能、访问的页面、点击的链接等操作记录。
                位置数据：在获得您授权的前提下，我们可能会收集和使用您的位置数据，以便提供基于位置的相关服务。
            </p>
            <p>二、信息的使用
                提供服务：我们将使用您的信息来创建和维护您的账户，以便您能够正常使用我们的服务。
                改进服务：我们可能会使用收集的信息来分析用户的使用情况，以便更好地优化和改进我们的服务。
                安全保障：您的信息可能会被用来检测异常登录行为、防范安全风险，确保账户的安全性。
                营销推广：在征得您的同意后，我们可能会向您发送关于产品和服务的营销信息。如果您不希望接收此类信息，可以随时选择取消订阅。</p>
            <p>
                三、信息的共享
                服务提供商：为向您提供更好的服务，我们可能会将您的信息共享给一些第三方服务提供商。这些服务提供商会代表我们处理信息，并严格按照我们的要求履行保密义务。
                法律要求：在法律法规或政府要求下，我们可能会披露您的信息。
            </p>
            <p>四、信息的存储与保护
                存储期限：您的个人信息将仅在为实现本政策所述目的所需的期间内保存，法律法规另有规定的除外。
                安全措施：我们采取合理的安全措施来保护您的信息免遭未经授权的访问、使用或泄露。
            </p>
            <p>
                五、用户权利
                访问权：您有权访问我们持有的关于您的个人信息，并有权要求更正任何不准确的信息。
                删除权：在某些情况下，您可以要求我们删除您的个人信息。
                撤回同意：对于基于您的同意而收集的信息，您可以随时撤回同意。
            </p>
            <p>
                六、政策的变更
                我们可能会不时更新本隐私政策，以反映我们服务的变化或法律法规的要求。我们会在更新时通过适当的方式通知您，建议您定期查看本政策以了解最新的隐私保护措施。
            </p>
            <p>
                七、协议终止 本应用有权在不通知用户的情况下，随时终止或限制用户的使用权利。
                如果用户违反本协议的任何条款，本应用有权随时停止用户的服务资格。
            </p>
            <p>
                七、联系我们
                如果您对本隐私政策有任何疑问或意见，请通过以下方式与我们联系：
            </p>
            <p>
                电子邮箱：support@example.com
            </p>
            <p>
                感谢您使用本应用！如果您有任何疑问或建议，请联系我们的客服团队。
            </p>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStartStore } from '../stores/start';
import router from '../router/index';
import { showConfirmDialog } from 'vant';
import axios from 'axios';
import { showToast } from 'vant';


const inputusername = ref('');
const inputuserpassword = ref('');
const checkbox = ref(false);

function sendLogin() {
    if (checkbox.value === false) {
        showConfirmDialog({
            title: '提示',
            message:
                '请阅读并同意用户协议和隐私政策',
        })
            .then(() => {
                // on confirm
                checkbox.value = true;
            })
            .catch(() => {
                // on cancel
                return;
            });
    } else {
        axios.post('https://frp-leg.top:26112/public/login', {
            username: inputusername.value,
            userpassword: inputuserpassword.value
        }).then((res) => {
            console.log(res);
            if (res.data.code === 200) {
                document.cookie = `token=${res.data.token}`;
                sessionStorage.setItem('usertoken', res.data.token);
                sessionStorage.setItem('username', res.data.username);
                showToast('登录成功');
                setTimeout(() => {
                    router.push({ name: 'home' });
                }, 1000);
            } else {
                showToast('登录失败');
            }
        }).catch(() => {
            showToast('网络故障');
        });
    }
}

const show = ref(false);
const showPopup = () => {
    show.value = true;
};

const show1 = ref(false);
const showPopup1 = () => {
    show1.value = true;
};

// 图标的路径
const showPasswordIcon = new URL('../assets/icon/display.png', import.meta.url).href;
const hidePasswordIcon = new URL('../assets/icon/nodisplay.png', import.meta.url).href;

// 密码框的类型
const passwordType = ref('password');

// 当前图标路径
const imgSrc = ref(hidePasswordIcon);

function returnTop() {
    const startStore = useStartStore();
    startStore.close();
    router.push({ name: 'startpages' });
}

function goToRegister() {
    router.push({ name: 'register' });
}

// 切换密码显示/隐藏
function toggleType() {
    if (passwordType.value === 'password') {
        passwordType.value = 'text';
        setTimeout(() => {
            passwordType.value = 'password';
            imgSrc.value = hidePasswordIcon;
        }, 1000);
        imgSrc.value = showPasswordIcon;
    } else {
        passwordType.value = 'password';
        imgSrc.value = hidePasswordIcon;
    }
}

// 背景图列表
const bgList = [
    {
        url: new URL('../assets/images/bg/star.jpg', import.meta.url).href,
        desc: "背景为星月夜,致敬伟大的画家--梵高."
    },
    {
        url: new URL('../assets/images/bg/Monet_-_Impression,_Sunrise.jpg', import.meta.url).href,
        desc: "背景为印象日出,致敬伟大的画家--莫奈."
    },
    {
        url: new URL('../assets/images/bg/1045-3840x2160.jpg', import.meta.url).href,
        desc: "没有比脚更长的路,没有比人更高的山"
    },
    {
        url: new URL('../assets/images/bg/404-3840x2160.jpg', import.meta.url).href,
        desc: "旅行就是为了见到不一样的风景,也是为了成长"
    },
    {
        url: new URL('../assets/images/bg/sea.jpg', import.meta.url).href,
        desc: "暖阳下的海风还是一样"
    }
];

const bgIndex = ref(Math.floor(Math.random() * bgList.length));

// 设置背景图片
onMounted(() => {
    const loginElement = document.querySelector('.login') as HTMLElement;
    if (loginElement) {
        loginElement.style.backgroundImage = `url(${bgList[bgIndex.value].url})`;
    }
});
</script>

<style scoped lang="less">
@import '../public/publiccss.less';
.protypeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90%;
    overflow-y: scroll;

    p {
        margin-bottom: 10px;
        font-size: 14px;
    }
}

.protypetitle {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}
.login {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .format{
            width: 100%;
            text-align: right;
            span{
                font-size: 14px;
            }
            color: rgba(255, 255, 255, 0.55);
        }
        .goToRegister{
            width: 100%;
            text-align: center;
            color: rgba(255, 255, 255, 0.55);
            margin-top: 5px;
            span{
                font-size: 14px;
            }
        }
        .title{
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 15px;
        }
        .info{
            font-size: 14px;
            letter-spacing: 5px;
            margin-bottom: 10px;
        }
        .input{
            width: 100%;
            height: 50px;
            border: none;
            outline: none;
            border: 1px solid #ccc;
            margin-bottom: 10px;
            background-color: rgba(255, 255, 255, 0.55);
            padding: 0 15px;
            border-radius: @radius;
            &:last-child{
                margin-bottom: 40px;
            }
        }
        .passwordBox{
            position: relative;
            img{
                position: absolute;
                right: 15px;
                top: 45%;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
            }
        }
        .protype{
            display: flex;
            flex-direction: row;
            text-wrap: nowrap;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.55);
            input{
                margin-right: 5px;
            }
            span{
                font-size: 12px;
                &.textDisplay{
                    &:hover{
                        color: @googleBlue;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
        button{
            width: 100%;
            height: 50px;
            border: none;
            outline: none;
            background-color: @googleBlue;
            color: white;
            border-radius: @radius;
            &.returnTop{
                background-color: white;
                color: @googleBlue;
                margin-top: 10px;
            }
        }
    }
    .desc{
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        color: #ccc;
        display: flex;
        justify-content: center;
        font-size: 14px;
    }
}
</style>
