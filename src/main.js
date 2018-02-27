//导入vue 库
import Vue from 'Vue'

// 导入跟组件
import App from './component/App.vue'

//导入路由
import vueRouter from "./router"  // 自动导入目录下的index.js

//导入 element-ui 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 渲染根组件到占位标签上;

Vue.use(ElementUI)  // 使用 ui

new Vue({
  el:'#app',
  // render(createrElement){
  //   return createrElement(App);
  // },
  render:createElement => createElement(App),
  router: vueRouter  // 使用路由
})