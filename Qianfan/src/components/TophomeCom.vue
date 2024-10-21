<template>
    <div class="top">
        <p>千帆大语言模型</p>
        <div class="avater">
            <img src="../assets/images/peacock_flat.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
@import '../public/publiccss.less';
    .top{
        width: 100%;
        height: 50px;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: @googleBlue;
        p{
            font-size: 20px;
            // font-weight: bold;
            color: white;
        }
        .avater{
            width: 30px;
            height: 30px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>