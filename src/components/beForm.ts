export default `
<be-form 
  ref="form" 
  :model="formData" 
  label-width="90px" 
  label-position="right"
>
  <be-form-item
    label="活动名称" 
    :rules="rules.input" 
    prop="name"
  >
    <be-input v-model="formData.name"></be-input>
  </be-form-item>
  <be-form-item label=" ">
    <be-button type="primary" @click="onSubmit">提交</be-button>
  </be-form-item>
</be-form>
`;