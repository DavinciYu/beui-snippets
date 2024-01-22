export default `
<be-cascader
  ref="cascader"
  v-model="cascaderValue"
  :options="options"
  :props="props"
  clearable
  :collapse-tags="true"
  placeholder="请选择级联选项"
  popper-class="popper-class"
  @change="handleChange"
>
</be-cascader>
`;