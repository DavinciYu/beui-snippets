<template>
  <be-form 
    ref="form" 
    :model="formData" 
    label-width="90px" 
    label-position="right"
    :label-suffix="':' /**表单域标签的后缀*/"
    :hide-required-asterisk="false /**是否隐藏必填字段的标签旁边的红色星号 */"
    :show-message="true /**是否显示校验错误信息 */"
    :inline-message="false /**是否以行内形式展示校验信息 */"
    :validate-on-rule-change="true /**是否在 rules 属性改变后立即触发一次验证 */"
    :size="'small' /**用于控制该表单内组件的尺寸 medium / small / mini */"
    :disabled="false /**是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 */"
    @validate="itemValidate"
  >
    <be-form-item
      ref="formItem"
      label="活动名称" 
      :rules="rules.input" 
      prop="name"
      label-width="90px" 
      :required="true"
      :show-message="true /**是否显示校验错误信息 */"
      :inline-message="false /**是否以行内形式展示校验信息 */"
      :size="'small' /**用于控制该表单内组件的尺寸 medium / small / mini */"
      :error="'' /**表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 */"
    >
      <be-input v-model="formData.name"></be-input>
    </be-form-item>
    <be-form-item label="活动名额" :rules="rules.number" prop="num">
      <be-input v-model="formData.num"></be-input>
    </be-form-item>
    <be-form-item label=" ">
      <be-button type="primary" @click="onSubmit">提交</be-button>
    </be-form-item>
  </be-form>
</template>

<script>
import { BeForm, BeFormItem, BeInput, BeButton } from '@be-ui/pc'

const positiveInteger = /^[1-9][0-9]*$/
const numberValidator = function(rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入'));
  } else if(!positiveInteger.test(value)) {
    callback(new Error('请输入正整数'));
  } else {
    callback();
  }
}
export default {
  name: 'DemoInput',
  components: {
    BeForm,
    BeFormItem,
    BeInput,
    BeButton
  },
  data() {
    return {
      formData: {
        name: '',
        num: ''
      },
      rules: {
        input: [
          { required: true, message: '请输入', trigger: 'blur' }
        ],
        number: [
          { validator:numberValidator, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    itemValidate(prop) {
      console.log('prop', prop)
    },
    /**
     * form的方法
     * this.$refs.form.validate()
     * 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
     * Function(callback: Function(boolean, object))
     * 
     * this.$refs.form.validateField()
     * 对部分表单字段进行校验的方法
     * Function(props: array | string, callback: Function(errorMessage: string))
     * 
     * this.$refs.form.resetFields()
     * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
     * 
     * this.$refs.form.clearValidate()
     * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
     * Function(props: array | string)
     * 
     */
    /**
     * form-item的方法
     * this.$refs.form.resetFields()
     * 对该表单项进行重置，将其值重置为初始值并移除校验结果
     * 
     * this.$refs.form.clearValidate()
     * 移除该表单项的校验结果
     * 
     */
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
