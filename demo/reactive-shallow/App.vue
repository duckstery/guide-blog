<template>
  <div>
    <div>{{ shallow }}</div><br/>
    <button @click="mutateName">Click to mutate <u>name</u></button><br/>
    <button @click="mutateDetail">Click to mutate <u>detail</u></button><br/>
    <button @click="mutateColor">Click to mutate <u>color</u></button> - <span style="color: red">No reactivity</span><br/>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import {shallowReactive} from "vue";

const shallow = shallowReactive({
  name: 'Car',
  detail: {
    color: 'red'
  }
})

const mutateName = () => shallow.name = 'Plane'
const mutateDetail = () => shallow.detail = {color: 'blue'}
const mutateColor = () => shallow.detail.color = 'blue'
const reset = () => {
  shallow.name = 'Car'
  shallow.detail = {
    color: 'red'
  }
}
</script>
