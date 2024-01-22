export default `
<be-dialog
  v-model="showDialog"
  title="弹窗"
  width="600px"
  :toolbar="toolbar"
  :close-on-click-modal="false"
  :append-to-body="false"
  custom-class="custom-class"
  @close="dialogClosed"
>
  <div class="content">
    Body 不预设padding 等，内容自行适配,需要提示的内容在这里
  </div>
</be-dialog>
`;