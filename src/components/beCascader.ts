export default `
<!--
补充说明：
input对应的三个方法
this.$refs.input.focus()
this.$refs.input.blur()
this.$refs.input.select()
-->
<be-input 
  ref="input"
  v-model="input"
  :type="inputType"
  :disabled="inputDisabled"
  clearable
  :show-password="showPassword"
  :props="{
    search: true, // 是否显示搜索图标
    prepend: 'https://', // 前缀
    append: '.com', // 后缀
    maxlength: 10, // 限制长度
  }"
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
/>

`;