// 导入定义存储模块的函数
import { defineStore } from 'pinia'

// 定义接口
// interface homeState{
//     isOpen : boolean
// }

export const useStartStore = defineStore({
    // 模块的id
    id: "startStore",
    // 定义存储对象
    state: () => ({
        isOpen: false, // 起始页和管理的开关
    }),

    // 设置状态
    actions: {
        // 设置isOpen为true
        open() {
            this.isOpen = true;
        },
        // 设置isOpen为false
        close() {
            this.isOpen = false;
        }
    }
})