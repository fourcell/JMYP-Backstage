<template>
  <div class="table">
    <el-switch v-model="value1"></el-switch>
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="id" label="编号" width="80" align="center">
        <template slot-scope="scope">
          <div>{{ scope.row.id }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="原因类型" align="center" width="360">
        <template slot-scope="scope" class="conten">
          <p>{{scope.row.typeseason}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="排序" width="100" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.test}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="是否可用" width="320" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.onandoff"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="添加时间" width="180" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.payway}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="audit" label="操作" width="178" align="center">
        <template class="flex-button" >
           <label class="operation" style="margin-right: 20px;">
            <el-button size="small">查看</el-button>
          </label>
          <label class="operation">
            <el-button size="small">编辑</el-button>
          </label>
        </template>
      </el-table-column>
    </el-table>
    <Base :options="options" />
  </div>
</template>

<script>
import Base from "../Content/base";
export default {
  data() {
    return {
      value1: true,
      options: [
        {
          value: "批量发货",
          label: "批量发货"
        },
        {
          value: "关闭订单",
          label: "关闭订单"
        },
        {
          value: "删除订单",
          label: "删除订单"
        }
      ],
      tableData: [
        {
          id: "1",
          orderId: "201809150101000001",
          typeseason: "质量问题",
          test: "1",
          payway: "2018-10-17 10:00:45",
          orderorigin: "APP订单",
          status: "已关闭",
          onandoff:true//开关
        },
        {
          id: "2",
          orderId: "201809150101000002",
          typeseason: "尺码太大",
          test: "1",
          payway: "2018-10-17 10:00:45",
          orderorigin: "APP订单",
          status: "已关闭",
          onandoff:true//开关
        },
        {
          id: "3",
          orderId: "201809150101000003",
          typeseason: "颜色不喜欢",
          test: "1",
          payway: "2018-10-17 10:00:45",
          orderorigin: "APP订单",
          status: "已关闭",
          onandoff:true//开关
        },
        {
          id: "4",
          orderId: "201809150101000004",
          typeseason: "7天无理由退货",
          test: "1",
          payway: "2018-10-17 10:00:45",
          orderorigin: "APP订单",
          status: "已关闭",
          onandoff:true//开关
        },
        {
          id: "5",
          orderId: "201809150101000005",
          typeseason: "价格问题",
          test: "1",
          payway: "2018-10-17 10:00:45",
          orderorigin: "APP订单",
          status: "已关闭",
          onandoff:true//开关
        },
        {
          id: "6",
          orderId: "201809150101000006",
          typeseason: "7天无理由退货",
          test: "1",
          payway: "2018-10-17 10:00:45",
          orderorigin: "APP订单",
          status: "已关闭",
          onandoff:true//开关
        }
      ],
      multipleSelection: []
    };
  },
  components: {
    Base
  },
  methods: {
    Tiao(val) {
      // window.console.log(`${item.moveId}`);
      window.console.log(val);
      this.$router.push({
        path: `/manage/indent/indent-list/movieDetail/${val}`
      });
    },
    Del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    handleSelectionChange(val) {
      //table 选中的的返回到multipleSelection
      this.multipleSelection = val;
    },
    toPagination(val) {
      //子组件返回的页数
      console.log(val);
    },
    toNumber(val) {
      //返回当前一页多少条数据
      console.log(val);
    },
    changeTime(time) {
      var year = time.getFullYear();
      var month = this.toDb(time.getMonth() + 1);
      var date = this.toDb(time.getDate());
      var hours = this.toDb(time.getHours());
      var minute = this.toDb(time.getMinutes());
      var second = this.toDb(time.getSeconds());
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minute +
        ":" +
        second
      );
    },

    /* 补零函数*/
    toDb(num) {
      if (num >= 10) {
        return num;
      } else {
        return "0" + num;
      }
    }
  },
  computed: {
    getId() {
      let str = this.tableData
        .map(item => {
          if (item.id) {
            window.console.log(item.id);
          }
        })
        .join("");
      return str;
    }
  }
};
</script>

<style lang="scss" >
.table {
  width: 97%;
  margin: auto;
  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
      padding: 5px;
    }
  }
  .conten {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      color: #606266;
      line-height: 14px;
    }
  }
  .sort {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #409eff;
    line-height: 40px;
    color: #fff;
  }
  .flex-button {
    display: flex;
    flex-direction: row;
  }
  .dangerbutton {
    padding-left: 10px;
  }
  .operation {
    display: inline-block;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>