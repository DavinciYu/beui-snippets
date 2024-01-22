export default `
<be-date
  ref="beDate"
  v-model="dateValue"
  :date-type="'date'/**year/month/date/dates/week/datetime/datetimerange/daterange/monthrange */"
  format="yyyy年M月d日"
  value-format="yyyy-MM-dd"
  :editable="false"
  clearable
  :start-placeholder="'开始日期'/**范围选择时开始日期的占位内容 */"
  :end-placeholder="'结束日期'/**范围选择时结束日期的占位内容 */"
  @change="dateChange"
/>
`;