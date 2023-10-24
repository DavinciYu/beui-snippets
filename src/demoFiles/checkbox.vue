<template>
  <div>
    <be-checkbox 
      v-model="checked" 
      :disabled="false/**是否禁用 */"
      :true-label="1/**选中时的值 */"
      :false-label="0/**没有选中时的值 */"
      :checked="true/**当前是否勾选 */"
      :indeterminate="false/**设置 indeterminate 状态，只负责样式控制。用以表示 checkbox 的不确定状态，一般用于实现全选的效果 */"
      @change="checkboxChange"
    >备选项</be-checkbox>

    <be-checkbox-group 
      v-model="checkedCities"
      :disabled="false/**是否禁用 */"
      :min="1/**可被勾选的 checkbox 的最小数量 */"
      :max="2/**可被勾选的 checkbox 的最大数量 */"
      @change="checkboxGroupChange"
    >
      <be-checkbox 
        :label="'北京'/**选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） */"
      >北京</be-checkbox>
      <be-checkbox 
        label="广州"
      >广州</be-checkbox>
    </be-checkbox-group>
  </div>
</template>

<script>
import { BeCheckbox, BeCheckboxGroup } from '@be-ui/pc'
export default {
  name: 'DemoCheckbox',
  components: {
    BeCheckbox,
    BeCheckboxGroup
  },
  data() {
    return {
      checked:'',
      checkedCities: []
    }
  },
  methods: {
    checkboxChange(val) {
      console.log(val)
    },
    checkboxGroupChange(val) {
      console.log(val)
    }
  }
}
</script>
