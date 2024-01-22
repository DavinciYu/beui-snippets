export default `
<be-checkbox-group 
  v-model="checkValues"
  @change="checkboxGroupChange"
>
  <be-checkbox :label="1">备选项1</be-checkbox>
  <be-checkbox :label="2">备选项2</be-checkbox>
</be-checkbox-group>
`;