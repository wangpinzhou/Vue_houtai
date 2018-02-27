//导入vue 库
import Vue from 'Vue'

// 导入跟组件
import App from '../component/App.vue'

// 渲染根组件到占位标签上;
new Vue({
  el:'#app',
  render(createrElement){
    return createrElement(App);
  }
  
})