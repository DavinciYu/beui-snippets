export default `
<be-input 
  v-model="inputValue"
  :disabled="false"
  clearable
  :props="{
    maxlength: 10
  }"
  placeholder="请输入内容"
  @change="inputChange"
/>
`;