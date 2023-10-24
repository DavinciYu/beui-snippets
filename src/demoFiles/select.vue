<template>
  <be-select
    ref="select"
    v-model="select"
    :options="options"
    :props="props"
    :popper-append-to-body="false"
    optionsValue="value"
    optionsLabel="label"
    placeholder="请选择内容"
    @change="selectChange"
    @visible-change="visibleChange"
    @remove-tag="removeTag"
    @clear="selectClear"
    @blur="selectBlur"
    @focus="selectFocus"
  >
  </be-select>
</template>

<script>
// 需要安装vue-dompurify-html依赖
// 并且在main.js中加入以下设置：
// import VueDOMPurifyHTML from 'vue-dompurify-html'
// Vue.use(VueDOMPurifyHTML)
import { BeSelect } from '@be-ui/pc'
export default {
  components: {
    BeSelect
  },
  data() {
    return {
      select: "",
      options: [ // select的选项数组
        {
          value: 1,  // 属性名对应optionsValue设置的值，表示选项值字段
          label: '选项1' // 属性名对应optionsLabel设置的值，表示选项名字段
        }, {
          value: 2,
          label: '选项2'
        }, {
          value: 3,
          label: '选项3',
          disabled: true // 是否禁用当前选项
        }
      ],
      props: {
        disabled: false, // 是否禁用
        clearable: true, // 是否可清除
        multiple: true, // 是否多选
        'collapse-tags': true, // 多选时选值是否折叠
        filterable: true // 是否可搜索
      }
    }
  },
  methods: {
    selectChange(e) { // 选中值发生变化时触发
      console.log(e)
    },
    visibleChange(e) { // 下拉框出现/隐藏时触发
      console.log(e)
    },
    removeTag(e) { // 多选模式下移除tag时触发
      console.log(e)
    },
    selectClear() {}, // 可清空的单选模式下用户点击清空按钮时触发
    selectBlur(e) { // 当 input 失去焦点时触发
      console.log(e)
    },
    selectFocus(e) { // 当 input 获得焦点时触发
      console.log(e)
    }
    /** select对应的方法
     * this.$refs.select.focus()
     * this.$refs.select.blur()
     */
  }
}
</script>
