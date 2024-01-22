export default `
<div class="search-list-page">
  <be-search
    :show-title="false"
    :expanded-mode="true"
    @changeExpand="changeExpand"
  >
    <be-row class="search-form">
      <be-col :span="8">
        <be-form-item label="选择框：" :label-width="labelWidth">
          <be-select
            v-model="searchForm.select"
            placeholder="全部"
            :options="selectOptions"
            :props="{
              clearable: true,
            }"
          />
        </be-form-item>
      </be-col>
      <be-col :span="8">
        <be-form-item label="输入框：" :label-width="labelWidth">
          <be-input
            v-model="searchForm.input"
            placeholder="全部"
          />
        </be-form-item>
      </be-col>
      <be-col v-if="expandItem" :span="8">
        <be-form-item label="时间框1：" :label-width="labelWidth">
          <be-date
            v-model="searchForm.date1"
            date-type="date"
            placeholder="请选择时间"
            format="yyyy年M月d日"
            value-format="yyyy-MM-dd"
          />
        </be-form-item>
      </be-col>
      <be-col :span="8">
        <be-form-item label="" label-width="24px">
          <be-search-button
            class="flex-search-form-button"
            @reset="reset"
            @search="search"
          />
        </be-form-item>
      </be-col>
    </be-row>
  </be-search>

  <be-table
    ref="table"
    :table="tableData"
    title="标准作业列表"
    height="560"
    @handleSizeChange="tableSizeChange"
    @handleCurrentChange="tableCurrentChange"
  >
    <be-table-column
      label="序号"
      min-width="60"
    >
      <div slot-scope="scope">
        {{ scope.$index+1 }}
      </div>
    </be-table-column>
    <be-table-column
      label="数据1"
      min-width="180"
      prop="data1"
    />
    <be-table-column
      label="数据2"
      min-width="180"
    >
      <div slot-scope="scope">
        {{ scope.row.data2 || '-' }}
      </div>
    </be-table-column>
    <be-table-column
      label="操作"
      align="center"
      min-width="200"
      fixed="right"
    >
      <!-- 操作按钮区域 -->
      <div slot-scope="scope">
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
</div>
`;