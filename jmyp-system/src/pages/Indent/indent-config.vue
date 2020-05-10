<template>
  <div class="indentConfig">
    <el-card class="next">
      <el-form
        :label-position="labelPosition"
        label-width="125px"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="秒杀订单超过：" prop="seckill">
          <el-input v-model="ruleForm.seckill" style="width:213.6px;"></el-input>
          <div class="el-input-group__append" style="display:inline-block;width:12px;">
            <slot name="append">分</slot>
          </div>
          <span class="tip">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item label="正常订单超过：" prop="normal">
          <el-input v-model="ruleForm.normal" style="width:213.6px"></el-input>
          <div class="el-input-group__append" style="display:inline-block;width:12px;">
            <slot name="append">分</slot>
          </div>
          <span class="tip">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item label="发货超过：" prop="deliverGoods">
          <el-input v-model="ruleForm.deliverGoods" style="width:213.6px"></el-input>
          <div class="el-input-group__append" style="display:inline-block;width:12px;">
            <slot name="append">天</slot>
          </div>
          <span class="tip">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item label="订单完成超过：" prop="completion">
          <el-input v-model="ruleForm.completion" style="width:213.6px"></el-input>
          <div class="el-input-group__append" style="display:inline-block;width:12px;">
            <slot name="append">天</slot>
          </div>
          <span class="tip">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item label="订单完成超过：" prop="tocompletion">
          <el-input v-model="ruleForm.tocompletion" style="width:213.6px"></el-input>
          <div class="el-input-group__append" style="display:inline-block;width:12px;">
            <slot name="append">天</slot>
          </div>
          <span class="tip">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    var checkNum = (rule, value, callback) => {
      if (!value) {
        callback(new Error("时间不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };

    return {
      labelPosition: "right",
      ruleForm: {
        seckill: 60,
        normal: 120,
        deliverGoods: 15,
        completion: 7,
        tocompletion: 7
      },
      rules: {
        seckill: [
          {
            validator: checkNum,
            trigger: "blur"
          }
        ],
        normal: [
          {
            validator: checkNum,
            trigger: "blur"
          }
        ],
        deliverGoods: [
          {
            validator: checkNum,
            trigger: "blur"
          }
        ],
        completion: [
          {
            validator: checkNum,
            trigger: "blur"
          }
        ],
        tocompletion: [
          {
            validator: checkNum,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    open() {
      this.$confirm("是否要提交修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "修改成功!"
        }).catch(() => {
         this.warningmessage("提交参数不合法",'error');
        });
      });
    },
    warningmessage(data,type) {
      this.$message({
        message: data,
        type: type
      });
    },
    onSubmit() {
      console.log("------valid-------");
      this.$refs["ruleForm"].validate(valid => {
        console.log("------valid-------" + valid);
        if (valid) {
          // alert("submit!");
          this.open();
        } else {
          this.warningmessage("提交参数不合法",'warning');
          alert("warning!");
          // return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.indentConfig {
  .el-card {
    -webkit-box-shadow: none;
    box-shadow: none;
    .tip {
      margin-left: 15px;
    }
  }
  .next {
    width: 720px;
    padding: 35px 35px 15px;
    margin: 20px auto;
    width: 800px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
}
</style>
