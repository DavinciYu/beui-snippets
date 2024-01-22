export default `
<be-select
  v-model="selectValue"
  :options="options"
  optionsValue="value"
  optionsLabel="label"
  placeholder="请选择内容"
  @change="selectChange"
/>
`;