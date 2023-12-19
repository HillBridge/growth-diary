<template>
    <div>
        <h2>不可变数据结构 ---- immer</h2>
        <div @click="changeName">{{ shallowObject.name }}</div>
        <div v-for="(item, index) in shallowObject.lover" :key="index" @click="changeLabelName(index)">{{ item.label }}
        </div>
        <div>==========================</div>
        <ul>
            <li v-for="({ title, done }, index) in items" :class="{ done }" @click="toggleItem(index)">
                {{ title }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { produce } from "immer"
import { shallowRef, ref } from 'vue'
import { useImmer } from './immer.js'


const [items, updateItems] = useImmer([
    {
        title: "Learn Vue",
        done: true
    },
    {
        title: "Use Vue with Immer",
        done: false
    }
])

function toggleItem(index) {
    updateItems(items => {
        items[index].done = !items[index].done
    })
}

// shallowRef 大型不可变数据结构的性能优化
// 仅仅对最外层数据是响应式的, 深层的数据不是响应式的, 如果更改只能通过替换的方式进行更改
const shallowObject = shallowRef({
    name: 'bridge',
    lover: [
        { label: '篮球' },
        { label: '足球' }
    ]
})


const shallowArray = shallowRef([
    { name: 'aaa' },
    { name: 'bbb' }
])
// console.log('shallowArray---改变前', shallowArray.value)
shallowArray.value[1].name = '1111'
// console.log('shallowArray---改变后', shallowArray.value)

function changeName() {
    // shadowRef 包装的数据只有.value下是响应式的数据, 只能整体替换
    shallowObject.value.name = 'cc'
    console.log('shallowObject', shallowObject.value)
    // shallowObject.value = {
    //     name: 'qiao',
    //     lover: [
    //         { label: '篮球---change' },
    //         { label: '足球' }
    //     ]
    // }
}

function changeLabelName(idx) {
    shallowObject.value.lover[idx].label = '游泳'
}


</script>

<style lang="scss" scoped>
.done {
    text-decoration: line-through;
}
</style>