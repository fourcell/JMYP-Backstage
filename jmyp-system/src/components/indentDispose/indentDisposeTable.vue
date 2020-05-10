<template>
  <div class="table">
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="id" label="服务编号" width="180" align="center">
        <template slot-scope="scope">
          <div>{{ scope.row.id }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="申请时间" align="center" width="180">
        <template slot-scope="scope" class="conten">
          <p>{{scope.row.time}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="用户账号" width="158" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.test}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="退款金额" width="180" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.money}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="申请状态" width="180" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.payway}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="处理时间" width="180" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.orderorigin}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="audit" label="操作" width="160" align="center">
        <template class="flex-button" slot-scope="scope">
          <label class="operation">
            <el-button size="small" @click="Tiao(scope.row.id)">查看详情</el-button>
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
          // name: { name: this.changeTime(new Date()), classify: "华为" },
          time: this.changeTime(new Date()),
          test: "test",
          money: "￥18732",
          payway: "待处理",
          orderorigin: "APP订单",
          status: "已关闭"
        },
        {
          id: "2",
          orderId: "201809150101000002",
          time: "2018-09-15 14:24:29",
          test: "test",
          money: "￥18732",
          payway: "退货中",
          orderorigin: "APP订单",
          status: "已关闭"
        },
        {
          id: "3",
          orderId: "201809150101000003",
          time: "2018-09-13 16:57:40",
          test: "test",
          money: "￥18732",
          payway: "已完成",
          orderorigin: "APP订单",
          status: "已关闭"
        },
        {
          id: "4",
          orderId: "201809150101000004",
          time: "2018-09-13 17:03:00",
          test: "test",
          money: "￥18732",
          payway: "已拒绝",
          orderorigin: "APP订单",
          status: "已关闭"
        },
        {
          id: "5",
          orderId: "201809150101000005",
          time: "2018-09-14 16:16:16",
          test: "test",
          money: "￥18732",
          payway: "已拒绝",
          orderorigin: "APP订单",
          status: "已关闭"
        },
        {
          id: "6",
          orderId: "201809150101000006",
          time: "2018-09-15 12:24:27",
          test: "test",
          money: "￥18732",
          payway: "已完成",
          orderorigin: "APP订单",
          status: "已关闭"
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
      let str = this.tableData.map(item => {
          if (item.id) {
            window.console.log(item.id);
          }
        }).join("");
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