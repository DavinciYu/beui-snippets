<template>
  <be-cascader
    ref="cascader"
    v-model="value"
    :options="options"
    :props="props"
    clearable
    :show-all-levels="false/**输入框中是否显示选中值的完整路径 */"
    :collapse-tags="false/**当为多选时，是否折叠选中的值 */"
    placeholder="请选择级联选项"
    :size="'mini'/**medium / small / mini */"
    :separator="'/'/**选项分隔符 */"
    :popper-class="''/**自定义浮层类名 */"
    @change="handleChange"
    @expand-change="expandChange"
    @blur="cascaderBlur"
    @focus="cascaderFocus"
    @visible-change="visibleChange"
    @remove-tag="removeTag"
  >
    <!-- 自定义节点内容 -->
    <template slot-scope="{ node, data }">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
    </template>
  </be-cascader>
</template>

<script>
import { BeCascader } from '@be-ui/pc'
export default {
  name: 'DemoInput',
  components: {
    BeCascader
  },
  data() {
    return {
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          disabled: true,  // 禁用选项
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      props: { 
        expandTrigger: 'click', // click和hover
        multiple: true, // 是否为多选
        checkStrictly: true, // 是否严格的遵守父子节点不互相关联
        lazy: false, // 是否动态加载数据
        lazyLoad (node, resolve) { // 动态加载数据的方法
          // const { level } = node;
          const nodes = [] //nodes组装成级联options格式相同的数据
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          resolve(nodes);
        },
        emitPath: true, // 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
        value: "value", // 指定选项的值为选项对象的某个属性值
        label: "label", // 指定选项标签为选项对象的某个属性值
        children: "children", // 指定选项的子选项为选项对象的某个属性值
        disabled: "disabled", // 指定选项的禁用为选项对象的某个属性值
        leaf: "leaf" // 指定选项的叶子节点的标志位为选项对象的某个属性值
      }, 
    }
  },
  methods: {
    handleChange(value) { // 当选中节点变化时触发
      console.log(value)
    },
    expandChange(pArr) { // 当展开节点发生变化时触发  // 各父级选项值组成的数组
      console.log(pArr)
    },
    cascaderBlur(e) { console.log(e) }, // 当失去焦点时触发
    cascaderFocus(e) { console.log(e) }, // 当获得焦点时触发
    visibleChange(boo) { // 下拉框出现/隐藏时触发
      console.log(boo)
    },
    removeTag(value) { // 在多选模式下，移除Tag时触发  // 移除的Tag对应的节点的值
      console.log(value)
    }
    /**
     * cascader的方法
     * this.$refs.cascader.getCheckedNodes() // 获取选中的节点	(leafOnly) 是否只是叶子节点，默认值为 false
     */
  }
}
</script>
