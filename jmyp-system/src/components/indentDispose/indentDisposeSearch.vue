<template>
  <div class="Search avert berter">
    <div class="top">
      <i class="el-icon-search"></i>
      <span>筛选搜索</span>

      <el-button class="button" @click="search" type="primary">查询结果</el-button>
      <el-button class="button" @click="reset">重置</el-button>
    </div>
    <div class="bottom avert2">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="输入搜索 :">
          <el-input v-model="form.name" placeholder="服务单号"></el-input>
        </el-form-item>
        <el-form-item label="处理状态:">
          <!-- <el-input v-model="form.id" placeholder="收货人姓名,手机号码"></el-input> -->
          <el-select v-model="form.brand" clearable placeholder="全部">
            <el-option
              v-for="item in form.options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间：">
          <!-- <el-cascader v-model="form.type" :options="form.options" @change="handleChange" aria-placeholder="请选择时间"></el-cascader> -->
          <el-date-picker v-model="applicationTime" type="date" placeholder="申请时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="操作人员：">
            <el-input v-model="form.name" placeholder="全部"></el-input>
        </el-form-item>
        <el-form-item label="处理时间:">
          <el-date-picker v-model=" processingTime" type="date" placeholder="处理时间"></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      applicationTime: "", //申请时间
      processingTime:"",//处理时间
       form: {
        name: "", //商品名称
        id: "", //商品货号
        type: "", //商品分类
        brand: "", //商品品牌
        putaway: "", //商品上架
        audit: "", //商品审核
        options: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致"
                  },
                  {
                    value: "fankui",
                    label: "反馈"
                  },
                  {
                    value: "xiaolv",
                    label: "效率"
                  },
                  {
                    value: "kekong",
                    label: "可控"
                  }
                ]
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航"
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航"
                  }
                ]
              }
            ]
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "layout",
                    label: "Layout 布局"
                  },
                  {
                    value: "color",
                    label: "Color 色彩"
                  },
                  {
                    value: "typography",
                    label: "Typography 字体"
                  },
                  {
                    value: "icon",
                    label: "Icon 图标"
                  },
                  {
                    value: "button",
                    label: "Button 按钮"
                  }
                ]
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框"
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框"
                  },
                  {
                    value: "input",
                    label: "Input 输入框"
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器"
                  },
                  {
                    value: "select",
                    label: "Select 选择器"
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器"
                  },
                  {
                    value: "switch",
                    label: "Switch 开关"
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块"
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器"
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器"
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器"
                  },
                  {
                    value: "upload",
                    label: "Upload 上传"
                  },
                  {
                    value: "rate",
                    label: "Rate 评分"
                  },
                  {
                    value: "form",
                    label: "Form 表单"
                  }
                ]
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格"
                  },
                  {
                    value: "tag",
                    label: "Tag 标签"
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条"
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件"
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页"
                  },
                  {
                    value: "badge",
                    label: "Badge 标记"
                  }
                ]
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告"
                  },
                  {
                    value: "loading",
                    label: "Loading 加载"
                  },
                  {
                    value: "message",
                    label: "Message 消息提示"
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框"
                  },
                  {
                    value: "notification",
                    label: "Notification 通知"
                  }
                ]
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单"
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页"
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑"
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单"
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条"
                  }
                ]
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框"
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示"
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框"
                  },
                  {
                    value: "card",
                    label: "Card 卡片"
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯"
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板"
                  }
                ]
              }
            ]
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components"
              },
              {
                value: "sketch",
                label: "Sketch Templates"
              },
              {
                value: "jiaohu",
                label: "组件交互文档"
              }
            ]
          }
        ],
        options1: [
          {
            value: "待处理",
            label: "待处理"
          },
          {
            value: "退货中",
            label: "退货中"
          },
            {
            value: "已完成",
            label: "已完成"
          },
          {
            value: "已拒绝",
            label: "已拒绝"
          },
        ]
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    reset() {
      //重置查询数据
      this.form.name = "";
      this.form.id = "";
      this.form.type = "";
      this.form.brand = "";
      this.form.putaway = "";
      this.form.audit = "";
    },
    search() {
      //查询结果
      window.console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.avert {
  width: 97%;
  height: auto;
  margin: auto;
}
.avert2 {
  width: 86%;
  height: auto;
  margin: auto;
}

.berter::after {
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}

.Search {
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 0px;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  box-sizing: border-box;
  .top {
    width: 96%;
    margin: auto;
    i {
      font-size: 14px;
    }
    .button {
      float: right;
      width: auto;
      height: 32px;
      line-height: 9px;
      margin-left: 10px;
    }
  }
  .bottom {
    margin-top: 10px;
    .el-form-item {
      width: 280px;
      float: left;
      margin-right: 30px;
      margin-bottom: 10px;
      .el-input__inner {
        width: 203px;
        height: 32px;
      }
    }
  }
}
</style>