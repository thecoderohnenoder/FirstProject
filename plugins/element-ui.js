import Vue from 'vue';

export default () => {
  Vue.component('ElButton', () => import(/* webpackChunkName: 'element-ui-button' */ 'element-ui/lib/button'))
  Vue.component('ElForm', () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/form'))
  Vue.component('ElFormItem', () => import(/* webpackChunkName: 'element-ui-form-item' */ 'element-ui/lib/form-item'))
  Vue.component('ElInput', () => import(/* webpackChunkName: 'element-ui-input' */ 'element-ui/lib/input'))
  Vue.component('ElContainer', () => import(/* webpackChunkName: 'element-ui-container' */ 'element-ui/lib/container'))
  Vue.component('ElDivider', () => import(/* webpackChunkName: 'element-ui-divider' */ 'element-ui/lib/divider'))
  Vue.component('ElDialog', () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/dialog'))
  Vue.component('ElMain', () => import(/* webpackChunkName: 'element-ui-main' */ 'element-ui/lib/main'))
  Vue.component('ElRow', () => import(/* webpackChunkName: 'element-ui-row' */ 'element-ui/lib/row'))
  Vue.component('ElCol', () => import(/* webpackChunkName: 'element-ui-col' */ 'element-ui/lib/col'))
  Vue.component('ElBadge', () => import(/* webpackChunkName: 'element-ui-col' */ 'element-ui/lib/badge'))
  Vue.component('ElButton', () => import(/* webpackChunkName: 'element-ui-col' */ 'element-ui/lib/button'))

}
