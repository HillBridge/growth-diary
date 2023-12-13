<template>
    <div>
        <h2>不可变数据结构 ---- immer</h2>
        <div @click="changeName">{{ state.name }}</div>
        <div v-for="(item, index) in state.lover" :key="index" @click="changeLabelName(index)">{{ item.label }}</div>
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
const state = shallowRef({
    name: 'bridge',
    lover: [
        { label: '篮球' },
        { label: '足球' }
    ]
})

function changeName() {
    state.value = {
        name: 'qiao',
        lover: [
            { label: '篮球' },
            { label: '足球' }
        ]
    }
}

function changeLabelName(idx) {
    state.value.lover[idx].label = '游泳'
}


</script>

<style lang="scss" scoped>
.done {
    text-decoration: line-through;
}
</style>