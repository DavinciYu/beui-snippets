export default `
<be-radio-group 
  v-model="radioGroupValue"
  @change="RadioGroupChange"
>
  <be-radio :label="1">备选项1</be-radio>
</be-radio-group>
`;