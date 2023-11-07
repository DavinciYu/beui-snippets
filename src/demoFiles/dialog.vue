<template>
  <be-dialog
    v-model="showDialog"
    title="弹窗"
    width="600px"
    :toolbar="toolbar"
    :close-on-click-modal="false/**是否可以通过点击遮罩关闭dialog */"
    :dialog-move="true/**dialog是否支持可拖拽 */"
    :append-to-body="false/**是否使dialog append到body */"
    :custom-class="'custom-class'/**弹窗的自定义样式 */"
    :z-index="1999/**弹出层的z-index，按需加载时，每个弹出层都独立计算堆叠关系，可设置固定范围值，如 1999 */"
    :on-close="dialogClose"
    @open="dialogOpen"
    @close="dialogClosed"
  >
    <div class="content">
      Body 不预设padding 等，内容自行适配,需要提示的内容在这里
    </div>
    <!-- 如果通过toolbar配置底部操作按钮不出来，加上footer-left这个slot试试 -->
    <!-- slot="footer-left"自定义底部左侧按钮 -->
    <div slot="footer-left"></div>
  </be-dialog>
</template>

<script>
import { BeDialog } from '@be-ui/pc'
export default {
  components: {
    BeDialog
  },
  data() {
    return {
      showDialog: true,
      toolbar: [
        {
          text: '关闭',
          loading: false,
          disabled: false,
          func: () => {
            // 点关闭时执行的逻辑
            this.showDialog = false;
          }
        },
        {
          text: '确定',
          type: 'primary',
          func: () => {
            // 点确定时执行的逻辑
            this.showDialog = false;
          }
        }
      ]
    }
  },
  methods: {
    dialogClose() {
      this.showDialog = false;
    },
    dialogOpen() {},
    dialogClosed() {},
  }
}
</script>
