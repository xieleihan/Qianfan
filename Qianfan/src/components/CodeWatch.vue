<template>
    <div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    // 获取canvas元素
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    // 获取上下文
    const ctx = canvas.getContext('2d');
    // 获取设备的具体宽高
    const width = window.innerWidth;
    const height = window.innerHeight;
    // 设置canvas的宽高
    canvas.width = width;
    canvas.height = height;

    // 设置字体的大小
    const fontSize = 16;

    // 随机颜色生成
    function getRandomColor() {
        const fontColor = [
            '#33b5e5',
            '#0099cc',
            '#aa66cc',
            '#9933cc',
            '#99cc00',
            '#669900',
            '#ffbb33',
            '#ff8800',
            '#ff4444',
            '#cc0000',
        ];
        return fontColor[Math.floor(Math.random() * fontColor.length)]
    }

    // 随机文字
    function getRandomChar() {
        // 随机字符,但是采用一个有名的句子,确保26个字母都可以被随机到
        const str = 'the quick brown fox jumps over the lazy dog';
        return str[Math.floor(Math.random() * str.length)];
    }

    // 列宽
    const columnWidth = fontSize;
    // 列数
    const columnCount = Math.floor(width / columnWidth);
    // 每一列下一个文字是第几个
    const nextChar = new Array(columnCount).fill(0);

    // 画一行文字
    function draw() {
        if (!ctx) return;
        // 画布背景
        ctx.fillStyle = 'rgba(240,240,240,0.1)';
        ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < columnCount; i++) {
            // 画一个字符
            // 颜色 字符 字体 位置
            ctx.fillStyle = getRandomColor();
            const char = getRandomChar();
            ctx.font = `${fontSize}px "JetBrainsMono"`;
            const x = i * columnWidth;
            const s = nextChar[i];
            const y = (s + 1) * fontSize;
            ctx.fillText(char, x, y);
            if (y > height && Math.random() > 0.99) {
                nextChar[i] = 0;
            }
            nextChar[i]++;
        }
    }

    draw();
    setInterval(draw, 30);

})
</script>

<style scoped lang="less">
    canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>