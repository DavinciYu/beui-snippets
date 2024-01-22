export default `
<be-table
    ref="beTable"
    :table="tableData"
    title="标准作业列表"
    pagination-visible="true"
    :height="560// 表格高度，锁表头时使用"
    stripe
    @handleSizeChange="tableSizeChange"
    @handleCurrentChange="tableCurrentChange"
  >
    <be-table-column
      label="操作"
      align="left"
      width="200px"
      min-width="200"
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
`;