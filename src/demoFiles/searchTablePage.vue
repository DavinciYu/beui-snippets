<template>
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
        <be-col v-if="expandItem" :span="16">
          <be-form-item label="时间框2：" :label-width="labelWidth">
            <be-date
              v-model="searchForm.date2"
              date-type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
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
        <!-- 操作按钮区域 -->
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
        <!-- 操作按钮区域 -->
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
</template>

<script>
import { BeTable, BeTableColumn, BeRow, BeCol, BeFormItem, BeSearch, BeSearchButton, BeSelect, BeInput, BeDate, BeButton } from '@be-ui/pc'

const searchFormInit = {
  select: '',
  input: '',
  date1: '',
  date2: ''
}

export default {
  name: 'DemoSearchListPage',
  components: {
    BeTable,
    BeTableColumn,
    BeRow,
    BeCol,
    BeFormItem,
    BeSearch,
    BeSearchButton,
    BeSelect,
    BeInput,
    BeDate,
    BeButton
  },
  data() {
    return {
      labelWidth: '80px',
      searchForm: JSON.parse(JSON.stringify(searchFormInit)),
      expandItem: false,
      selectOptions: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 }
      ],
      tableData: {
        toolbar: [
          {
            type: 'primary',
            text: '新增',
            func: () => {}
          }
        ],
        columns: [],
        data: [],
        pageInfo: {"pageNo":1,"pageSize":10,"totalCount":0}
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.tableData.data = [
        { data1: '数据1', data2: '数据2', status: 1 }
      ]
      this.tableData.pageInfo.totalCount = 100
    },
    changeExpand(val) {
      this.expandItem = val
    },
    reset() {
      this.searchForm = JSON.parse(JSON.stringify(searchFormInit))
      this.tableData.pageInfo.pageNo = 1
      this.init()
    },
    search() {
      this.tableData.pageInfo.pageNo = 1
      this.init()
    },
    /**
     * 更改每页数
     * @param sizes
     */
    tableSizeChange(sizes) {
      this.tableData.pageInfo.pageNo = 1
      this.tableData.pageInfo.pageSize = sizes
      this.init()
    },
    /**
     * 改变当前页数
     * @param pageNo
     */
    tableCurrentChange(pageNo) {
      this.tableData.pageInfo.pageNo = pageNo
      this.init()
    }
  }
}
</script>
<style>
#app .be-search {
  box-sizing: border-box;
}
#app .be-pagination-container {
  box-sizing: border-box;
}
</style>
