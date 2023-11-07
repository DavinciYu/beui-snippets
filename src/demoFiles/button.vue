<template>
  <be-button 
    :type="'primary'/**primary / success / warning / danger / info / text 或为空 */"
    :round="false/**是否圆角按钮 */"
    :circle="false/**是否圆形按钮 */"
    :loading="false/**是否加载中状态 */"
    :disabled="false/**是否禁用状态 */"
    :icon="'el-icon-edit'/**图标类名 */"
    :autofocus="true/**是否默认聚焦 */"
    :native-type="'button'/**原生 type 属性, button / submit / reset */"
    :size="'small'/**medium / small / mini */"
  >
    按钮
  </be-button>
</template>

<script>
import { BeButton } from '@be-ui/pc'
export default {
  components: {
    BeButton
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
