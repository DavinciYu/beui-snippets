export default `
<be-upload
  v-model="fileList/**已上传文件列表，对象一般含 name、status、uid、size、url等字段 */"
  :action="'uploadApi'/**上传的地址 */"
  :headers="{
    token:xxx
  }/**设置上传的请求头部 */"
  :accept-types="['preset-pic', 'preset-video', 'preset-zip', 'txt']"
  :http-request="uploadRequest/**覆盖默认的上传行为，可以自定义上传的实现，更多说明详见 上文 httpRequest 介绍 */"
  :on-success="onSuccess/**文件上传成功时的钩子 */"
  :on-change="onChange/**文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 */"
  :on-exceed="onExceed/**文件上传个数超出限制的钩子 */"
/>
`;