<template>
  <be-table
    ref="table"
    :table="tableData"
    title="标准作业列表"
    :cell-class-name="
      cellClassName
      // 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
      // Function({row, column, rowIndex, columnIndex})/String
    "
    :row-key="
      rowKey
      // 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。
      // Function(row)/String
    "
    :reserve-selection="
      true
      // 仅对 select-type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
    "
    :select-type="
      selectType
      // selection 多选列
      // radio 单选列
    "
    :selectable="
      selectableFun
      // 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
      // Function(row, index)
    "
    :default-expand-all="
      false
      // 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
    "
    serial-num="serialNum"
    serial-numcolumn-label="序号"
    :limit-serial-width="
      true
      // 是否限制序号列宽度
    "
    serial-width="75"
    pagination-visible="true"
    :height="
      560
      // 表格高度，锁表头时使用
    "
    stripe
    :use-max-table="
      true
      // // 是否让be-table撑满剩余页面高度
    "
    :show-delete-all="
      true
      // 是否显示批量删除逻辑块
    "
    :disabled-all="
      true
      // 是否禁用全选
    "
    empty-text="暂无数据"
    @selectionRadioChange="selectionRadioChange"
    @selectionChange="selectionChange"
    @rowClick="tableRowClick"
    @sort-change="sortChange"
    @deleteAll="deleteAll"
    @handleSizeChange="tableSizeChange"
    @handleCurrentChange="tableCurrentChange"
  >
    <be-table-column
      :type="'selection'/**selection/index/expand */"
      label="列名称"
      align="left"
      width="200px"
      min-width="200"
      column-key=""
      prop="propName"
      :resizable="true/**需要在 el-table 上设置 border 属性为真 */" 
      show-overflow-tooltip
      header-align="left"
      class-name=""
      label-class-name=""
    >
      <template slot="header">
        自定义表头
      </template>
      <template slot-scope="scope">
        {{ {{ scope.row.propName }} }}
      </template>
    </be-table-column>
    <be-table-column
      label="操作"
      align="left"
      width="200px"
      min-width="200"
      fixed="right"
    >
      <!-- 操作按钮区域 -->
      <div slot-scope="scope" class="left_text_align">
        <be-button
          type="text"
          size="mini"
        >
          {{ scope.row.status === 1 ? '启用' : '禁用' }}
        </be-button>
        <be-button
          class="warning-delete"
          type="text"
          size="mini"
        >
          删除
        </be-button>
      </div>
    </be-table-column>
  </be-table>
</template>

<script>
import { BeTable, BeTableColumn } from '@be-ui/pc'
export default {
  name: 'DemoTable',
  components: {
    BeTable,
    BeTableColumn
  },
  data() {
    return {
      /** 列表内容 **/
      tableData: {
        /** 顶部按钮 **/
        toolbar: [
          {
            type: 'primary',
            text: '新增',
            func: () => {}
          }
        ],
        /** el-table 的内容 **/
        columns: [
          {
            label: '编号', // 列名
            prop: 'number',  // 列数据对应的字段
            align: 'left', // 对齐方式
            sortable: true
          }, {
            label: '名称',
            prop: 'name',
            align: 'left'
          }, {
            label: '状态',
            prop: 'status'
          }
        ],
        /** 表格数据 **/
        data: [],
        /** 页码数据 **/
        pageInfo: {"pageNo":1,"pageSize":10,"totalCount":100}
      }
    }
  },
  methods: {
    selectionRadioChange(currentRow) { // currentRow 选中的行数据
      console.log(currentRow)
    },
    selectionChange(selection) { // selection 选中的行数据
      console.log(selection)
    },
    sortChange({ column, prop, order }) { // 排序改变
      console.log(column, prop, order)
    },
    deleteAll() {}, // 批量删除事件
    /**
     * 监听 table的监听事件
     * @param row 列表元素
     * @param column 所点击的列 （格）
     * @param event
     */
     tableRowClick(row, column, event) {
      console.log(row, column, event)
    },
    /**
     * 更改每页数
     * @param sizes
     */
    tableSizeChange(sizes) {
      this.tableData.pageInfo.pageNo = 1
      this.tableData.pageInfo.pageSize = sizes
      // this.getSopData()
    },
    /**
     * 改变当前页数
     * @param pageNo
     */
    tableCurrentChange(pageNo) {
      this.tableData.pageInfo.pageNo = pageNo
      // this.getSopData()
    }
  }
}
</script>
