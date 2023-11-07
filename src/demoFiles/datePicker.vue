<template>
  <be-date
    ref="date"
    v-model="date1"
    :date-type="'date'/**year/month/date/dates/week/datetime/datetimerange/daterange/monthrange */"
    :format="'yyyy年M月d日'/**显示在输入框中的格式 */"
    :value-format="'yyyy-MM-dd'/**绑定值的格式。不指定则绑定值为 Date 对象 */"
    :readonly="false"
    :disabled="false"
    :editable="false/**文本框是否可输入 */"
    clearable
    :size="'small'/**输入框尺寸large, small, mini */"
    placeholder="选择日期"
    :start-placeholder="'开始日期'/**范围选择时开始日期的占位内容 */"
    :end-placeholder="'结束日期'/**范围选择时结束日期的占位内容 */"
    :align="'left'/**对齐方式left, center, right */"
    :popper-class="'class-name'/**DatePicker 下拉框的类名 */"
    :picker-options="pickerOptions"
    :range-separator="'-'/**选择范围时的分隔符 */"
    :default-value="''/**可选，选择器打开时默认显示的时间,可被new Date()解析 */"
    :default-time="''/**范围选择时选中日期所使用的当日内具体时刻,数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00 */"
    :unlink-panels="true/**在范围选择器里取消两个日期面板之间的联动 */"
    :prefix-icon="'el-icon-date'/**自定义头部图标的类名 */"
    :clear-icon="'el-icon-circle-close'/**自定义清空图标的类名 */"
    :validate-event="true/**输入时是否触发表单的校验 */"
    :is-range="false/**是否为时间范围选择，仅对date-type=timepicker有效 */"
    :arrow-control="false/**是否使用箭头进行时间选择，仅对date-type=timepicker有效 */"
    @change="dateChange"
    @blur="dateBlur"
    @focus="dateFocus"
  >
  </be-date>
</template>

<script>
import { BeDate } from '@be-ui/pc'
export default {
  components: {
    BeDate
  },
  data() {
    return {
      date1: '',
      pickerOptions: {
        // 当date-type不为timepicker时
        disabledDate(currentDate) {
          return new Date() < currentDate
        },
        cellClassName(Date) {
          // 设置日期的 className
          return Date
        },
        firstDayOfWeek: 1,
        onPick({ maxDate, minDate }) {
          //选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效
          console.log(maxDate, minDate)
        },
        shortcuts: [
          //设置快捷选项，需要传入 { text, onClick } 对象
        {
            text: "近3周",
            onClick(picker) {
              const oDate = new Date();
              oDate.setTime(oDate.getTime() - 3600 * 1000 * 24 * 21);
 
              var day = oDate.getDay();
 
              var start = new Date(),
                end = new Date();
              if (day == 0) {
                start.setDate(oDate.getDate());
                end.setDate(oDate.getDate() + 21);
              } else {
                start.setTime(oDate.getTime() - 3600 * 1000 * 24 * (day - 1));
                end.setTime(oDate.getTime() + 3600 * 1000 * 24 * (21 - day));
              }
 
              picker.$emit("pick", [start, end]);
            },
          },
        ],
        // 当date-type为timepicker时
        selectableRange: ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'], //可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']
        format: 'HH:mm:ss', // 时间格式化(TimePicker)
      }
    }
  },
  methods: {
    dateChange(e) { // 用户确认选定的值时触发。组件绑定值。格式与绑定值一致，可受 value-format 控制
      console.log(e)
    },
    dateBlur(e) { // 当 input 失去焦点时触发
      console.log(e)
    },
    dateFocus(e) { // 当 input 获得焦点时触发
      console.log(e)
    }
    /* input对应的三个方法
    this.$refs.date.focus()
    */
  }
}
/**
 * 日期格式
 * 格式    -    含义    -    备注    
 * yyyy         年          2023
 * 
 * M            月          1-12
 *  
 * MM           月          01-12
 * 
 * W            周          仅周选择器的 format 可用；不补0
 * 
 * WW           周          仅周选择器的 format 可用；补0
 * 
 * d            日          不补0
 * 
 * dd           日          补0
 * 
 * H            小时        24小时制；不补0
 * 
 * HH           小时        24小时制；补0
 * 
 * h            小时        12小时制，须和 A 或 a 使用；不补0
 * 
 * hh           小时        12小时制，须和 A 或 a 使用；补0
 * 
 * m            分钟        不补0
 * 
 * mm           分钟        补0
 * 
 * s            秒          不补0
 * 
 * ss           秒          补0
 * 
 * A            AM/PM       仅 format 可用，大写
 * 
 * a            am/pm       仅 format 可用，小写
 * 
 * timestamp    JS时间戳     仅 value-format 可用；组件绑定值为number类型
 * 
 * [MM]         不需要格式化字符    使用方括号标识不需要格式化的字符 (如 [A] [MM])
 */
</script>
