<template>
  <div>
    <be-radio v-model="radio" label="1" disabled @change="RadioChange">备选项1</be-radio>
    <be-radio v-model="radio" label="2" @change="RadioChange">备选项2</be-radio>

    <be-radio-group 
      v-model="groupValue"
      :disabled="false/**是否禁用 */"
      @change="RadioGroupChange"
    >
      <be-radio :label="3">备选项</be-radio>
      <be-radio :label="6">备选项</be-radio>
      <be-radio :label="9">备选项</be-radio>
    </be-radio-group>
  </div>
</template>

<script>
import { BeRadio, BeRadioGroup } from '@be-ui/pc'
export default {
  name: 'DemoRadio',
  components: {
    BeRadio,
    BeRadioGroup
  },
  data() {
    return {
      radio:'',
      groupValue: 3
    }
  },
  methods: {
    RadioChange(val) {
      console.log(val)
    },
    RadioGroupChange(val) {
      console.log(val)
    }
  }
}
</script>
