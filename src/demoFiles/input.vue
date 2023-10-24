<template>
  <be-input
    ref="input"
    v-model="input"
    :type="inputType"
    :disabled="inputDisabled"
    clearable
    :show-password="showPassword"
    :props="props"
    :rows="textAreaRows"
    :autosize="{ 
      minRows: 2, 
      maxRows: 4 
      /*当类型为 textarea 时自适应行数，可设置最大行和最小行*/
    }"
    :show-word-length="false/* 是否显示输入字符数 */"
    placeholder="请输入内容"
    @blur="inputBlur"
    @focus="inputFocus"
    @change="inputChange"
    @input="inputInput"
    @clear="inputClear"
  >
  </be-input>
</template>

<script>
import { BeInput } from '@be-ui/pc'
export default {
  components: {
    BeInput
  },
  data() {
    return {
      input: "",
      inputDisabled: false, // 是否禁用输入框
      showPassword: false, // 是否显示成密码输入框
      inputType: "text", // text，textarea 和其他 原生 input 的 type 值
      props: {
        search: true, // 是否显示搜索图标
        prepend: 'https://', // 前缀
        append: '.com', // 后缀
        maxlength: 10, // 限制长度
      },
      textAreaRows: 3, // 当类型为 textarea 时默认显示的行数
    }
  },
  methods: {
    inputBlur(e) { // 在 Input 失去焦点时触发
      console.log(e)
    },
    inputFocus(e) { // 在 Input 获得焦点时触发
      console.log(e)
    },
    inputChange(e) { // 仅在输入框失去焦点或用户按下回车时触发
      console.log(e)
    },
    inputInput(e) { // 在 Input 值改变时触发
      console.log(e)
    },
    inputClear(e) { // 在点击由 clearable 属性生成的清空按钮时触发
      console.log(e)
    }
    /* input对应的三个方法
    this.$refs.input.focus()
    this.$refs.input.blur()
    this.$refs.input.select()
    */
  }
}
</script>
