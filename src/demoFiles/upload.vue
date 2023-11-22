<template>
  <div>
    <be-upload
      v-model="fileList/**已上传文件列表，对象一般含 name、status、uid、size、url等字段 */"
      :action="'uploadApi'/**上传的地址 */"
      :headers="{
        token:xxx
      }/**设置上传的请求头部 */"
      :multiple="true/**是否支持多选文件 */"
      :limit="1/**最大允许上传个数 */"
      :accept-types="['preset-pic', 'preset-video', 'preset-zip', 'txt']/**
      preset-doc：文档预设，包含支持的文件类型有doc, docx, xls, xlsx, ppt, pptx, pdf
      preset-pic：图片预设，包含支持的文件类型有jpg, jpeg, png
      preset-video：视频预设，包含支持的文件类型有mp4, mov
      preset-zip：压缩文件预设，包含支持的文件类型有zip, rar
      */"
      :disabled="false/**是否禁用上传 */"
      :button-text="'上传'/**上传按钮内容 */"
      :tips="'提示'/**不设置时, 默认根据 acceptTypes 中支持的文件类型自动生成tips */"
      :big-file-max-size="100/**大文件最大可上传文件大小 默认为120M 暂定视频，压缩文件属于大文件 */"
      :file-max-size="10/**小文件最大可上传文件大小 默认为10M (后改120)， 除了视频、压缩文件外的文件大小 */"
      :hidden-upload="false/**是否处于预览状态，无相关上传相关逻辑，比如删除、重传 */"
      :http-request="uploadRequest/**覆盖默认的上传行为，可以自定义上传的实现，更多说明详见 上文 httpRequest 介绍 */"
      class="upload-box"
      :on-success="onSuccess/**文件上传成功时的钩子 */"
      :on-error="onError/**文件上传失败时的钩子 */"
      :on-change="onChange/**文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 */"
      :on-exceed="onExceed/**文件上传个数超出限制的钩子 */"
      :component-index="1/**当前组件索引，用于循环列表中多个上传附件组件的使用 */"
      :url-name="'url'/**上传成功后，文件地址字段名称 */"
      :can-download="true/**hiddenUpload 为true时，是否允许下载，默认true，会冒泡download 事件 */"
      :always-download="false/**任何情况都能下载，不取决于 hiddenUpload */"
      :always-preview="true/**任何情况都能预览，不取决于 hiddenUpload */"
      :picture-mode="false/**是否纯图模式 1.0.44支持 */"
      :picture-style="{width: '122px'}/**纯图模式,对应图片自定义Style 1.0.44支持 */"
      @removeFile="removeFile/**删除事件 */"
      @successCallback="successCallback/**成功回调函数 */"
      @download="download/**具体实现下载的事件， 由于下载接口与参数不一， 由调用者自己实现 */"
    />
    <be-upload
      :value="imageList"
      picture-mode
      :limit="2"
      :accept-types="['preset-pic']"
      tips="只能上传.gif,.jpg,.png类型，最多上传两个，尺寸为220*160"
    />
  </div>
</template>

<script>
import { BeUpload } from '@be-ui/pc'
export default {
  name: 'DemoUpload',
  components: {
    BeUpload
  },
  data() {
    return {
      fileList: [ // 上传结果列表
        {
          name: '任务管理V2.4_产品需求说明书(BGYFW-RWGL-REQ-SRS)V1.0.doc',
          status: 'success',
          size: 6424576,
          url: 'https://a-byd-oss.oss-cn-shenzhen.aliyuncs.com/dev/2022/03/10/060090746b344fde86612cf59b0cc5f011.doc'
        },
        {
          name: '任务管理.ppt',
          status: 'error',
          url: 'https://a-byd-oss.oss-cn-shenzhen.aliyuncs.com/dev/2022/03/10/060090746b344fde86612ssscf59b0cc5f011.ppt'
        }
      ],
      imageList: [
        {
          name: '现场图片.png',
          status: 'success',
          size: 4246576,
          url: 'https://a-byd-oss.oss-cn-shenzhen.aliyuncs.com/dev/2022/03/10/060090746b344fde812ssscf59b0cc5f011.png'
        },
      ]
    }
  },
  methods: {
    removeFile({file, componentIndex}) {
      console.log(file, componentIndex)
    },
    successCallback({ response, file, fileList, componentIndex }) {
      console.log(response, file, fileList, componentIndex)
    },
    download(file) {
      console.log(file)
    },
    uploadRequest() {
      // 实现自定义上传方法
    },
    onSuccess() { },
    onError() { },
    onChange() { },
    onExceed() { }
  }
}
</script>
