<template>
    <div class="register">
        <div class="container">
            <p class="title">注册</p>
            <p class="info">欢迎加入我们</p>
            <input v-model="username" class="input" type="text" placeholder="请输入用户名">
            <input v-model="useremail" class="input" type="email" placeholder="请输入邮箱">
            <div class="vercode">
                <input v-model="veremailcode" class="input" type="text" maxlength="6" placeholder="请输入邮箱验证码">
                <button @click="sendEmailCode">{{ emailtitle }}</button>
            </div>
            <div class="passwordBox">
                <input v-model="userpassword" class="input" id="passwordinput" :type="passwordType" placeholder="请输入密码">
                <img @click="toggleType" :src="imgSrc" alt="切换密码显示">
            </div>
            <div class="passwordBox">
                <input v-model="queryuserpassword" class="input" id="querypasswordinput" :type="queryPasswordType" placeholder="请再确认密码">
                <img @click="queryToggleType" :src="queryImgSrc" alt="切换密码显示">
            </div>
            <div class="imgvercode">
                <input v-model="inputverimgcode" class="input" type="text" maxlength="4" placeholder="请输入图片验证码">
                <div v-html="verimgcode" @click="updataVerimgCode"></div>
            </div>
            <div class="protype">
                <input v-model="checkbox" type="checkbox">
                <span>我已阅读并同意千帆大模型的<span class="textDisplay" @click="showPopup">《用户协议》</span>和<span class="textDisplay"
                        @click="showPopup1">《隐私政策》</span></span>
            </div>
            <button @click="sendRegister">注册</button>
            <button @click="returnTop" class="returnTop">返回</button>
        </div>
    </div>
    <van-popup v-model:show="show" closeable round :style="{ width: '70%',height: '70%',padding:'20px 20px' }">
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
import { ref,onMounted } from 'vue';
import { useStartStore } from '../stores/start';
import router from '../router/index';
import axios from 'axios';
import { showToast, showSuccessToast, showFailToast } from 'vant';
import { showConfirmDialog } from 'vant';

const emailtitle = ref('发送验证码')
const username = ref('');
const useremail = ref('');
const veremailcode = ref('');
const userpassword = ref('');
const queryuserpassword = ref('');
const inputverimgcode = ref('');
const checkbox = ref(false);

const intervalId = ref<number | null>(null);
const countdown = ref(180); // 倒计时初始值
function sendEmailCode() {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (useremail.value === '') {
        showToast('请输入邮箱');
        return;
    }
    if (!reg.test(useremail.value)) {
        showToast('请输入正确的邮箱');
        return;
    } else {
        // 发送验证码请求
        axios.get(`https://frp-leg.top:26112/public/sendemail?email=${useremail.value}`).then((response) => {
            const res = response.data;
            console.log(res);
            if (res.code === 200) {
                showSuccessToast('请查看邮箱验证码');
                startCountdown(); // 开始倒计时
            } else {
                showFailToast('已发送，请不要多次点击');
            }
        }).catch(() => {
            showFailToast('网络错误');
        });
    }
}

function startCountdown() {
    // 避免重复启动倒计时
    if (intervalId.value !== null) return;

    countdown.value = 180; // 重置倒计时
    emailtitle.value = `${countdown.value}s`;

    intervalId.value = setInterval(() => {
        countdown.value--;
        emailtitle.value = `${countdown.value}s`;

        if (countdown.value <= 0) {
            clearInterval(intervalId.value as number);
            intervalId.value = null;
            emailtitle.value = '发送验证码';
        }
    }, 1000);
}

function sendRegister() {
    if(userpassword.value !== queryuserpassword.value){
        showToast('两次密码不一致');
        return;
    }
    if(username.value === '' || useremail.value === '' || veremailcode.value === '' || userpassword.value === '' || queryuserpassword.value === '' || inputverimgcode.value === ''){
        showToast('请填写完整信息');
        return;
    }
    if (checkbox.value === false) {
        showConfirmDialog({
            title: '提示',
            message:
                '阅读并同意千帆大模型的用户协议和隐私政策',
        })
            .then(() => {
                checkbox.value = true;
            })
            .catch(() => {
                // on cancel
            });
        return;
    }
    axios.get(`https://frp-leg.top:26112/getVerInfo?code=${inputverimgcode.value}`).then((res) => {
        // console.log(res);
        if (res.data.code === 200) {

            axios.post('https://frp-leg.top:26112/public/register', {
                username: username.value,
                useremail: useremail.value,
                email_code: veremailcode.value,
                userpassword: userpassword.value
            }).then((res) => {
                // console.log(res);
                if (res.data.code === 200) {
                    showSuccessToast('注册成功');
                    setTimeout(() => {
                        router.push({ name: 'login' });
                    }, 1000);
                } else {
                    showFailToast('注册失败');
                }
            }).catch(() => {
                showFailToast('网络错误');
            })
        } else {
            showFailToast('验证码错误');
        }
    }).catch(() => {
        showFailToast('网络错误');
    })
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
const queryPasswordType = ref('password');

// 当前图标路径
const imgSrc = ref(hidePasswordIcon);
const queryImgSrc = ref(hidePasswordIcon);

function returnTop() {
    const startStore = useStartStore();
    startStore.close();
    router.push({ name: 'startpages' });
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

function queryToggleType() {
    if (queryPasswordType.value === 'password') {
        queryPasswordType.value = 'text';
        queryImgSrc.value = showPasswordIcon;
        setTimeout(() => {
            queryPasswordType.value = 'password';
            queryImgSrc.value = hidePasswordIcon;
        }, 1000);
    } else {
        queryPasswordType.value = 'password';
        queryImgSrc.value = hidePasswordIcon;
    }
}

const verimgcode = ref('')

onMounted(() => {
    axios.get('https://frp-leg.top:26112/getinfo')
        .then((res) => {
            // console.log(res.data);
            verimgcode.value = res.data;
    })
})

function updataVerimgCode() {
    axios.get('https://frp-leg.top:26112/getinfo')
        .then((res) => {
            // console.log(res.data);
            verimgcode.value = res.data;
    })
}
</script>

<style scoped lang="less">
@import '../public/publiccss.less';
    .register{
        width: 100%;
        height: 100%;
        background:url('../assets/images/banner-background.jpeg') no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .container{
            padding: 0 20px;
            .title{
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .info{
                color: #ccc;
                margin-bottom: 20px;
            }
            .input{
                width: 100%;
                height: 50px;
                border-radius: @radius;
                border: 1px solid #ccc;
                margin-bottom: 10px;
                padding: 0 15px;
            }
            .vercode{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .input{
                    width: 65%;
                    border-radius: @radius 0 0 @radius;
                }
                button{
                    width: 35%;
                    height: 50px;
                    border: none;
                    border-radius: 0 @radius @radius 0;
                    background-color: @googleBlue;
                    color: white;
                    margin-top: 0;
                    margin-bottom: 10px;
                }
            }
            .imgvercode{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    width: 60%;
                    // border-radius: @radius 0 0 @radius;
                    border-radius: 0;
                }
                div{
                    width: 40%;
                    height: 50px;
                    min-height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
                    background-color: #666666;
                    // border-radius: 0 @radius @radius 0;
                }
            }
            .passwordBox{
                width: 100%;
                position: relative;
                img{
                    position: absolute;
                    top: 45%;
                    right: 10px;
                    transform: translateY(-50%);
                }
            }
            .protype{
                width: 100%;
                display: flex;
                align-items: center;
                input{
                    margin-right: 5px;
                }
                span{
                    text-wrap: nowrap;
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
                border-radius: @radius;
                background-color: @googleBlue;
                color: white;
                margin-top: 20px;
                &.returnTop{
                    background-color: white;
                    color: @googleBlue;
                    border: 1px solid @googleBlue;
                }
            }
        }
    }
    .protypeContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 90%;
        overflow-y: scroll;
        p{
            margin-bottom: 10px;
            font-size: 14px;
        }
    }
    .protypetitle{
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }
</style>