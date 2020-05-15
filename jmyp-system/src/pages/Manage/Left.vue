<template>
  <div class="menuItem">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF"
      menu-trigger="hover"
      :router="true"
    >
      <el-menu-item index="/manage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span slot="title">商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/goods">
            <i class="el-icon-s-unfold"></i>
            商品列表
          </el-menu-item>
          <el-menu-item index="/manage/add">
            <i class="el-icon-circle-plus"></i>
            添加商品
          </el-menu-item>
          <el-menu-item index="/manage/classify">
            <i class="el-icon-s-grid"></i>
            商品分类
          </el-menu-item>
          <el-menu-item index="/manage/type">
            <i class="el-icon-tickets"></i>
            商品类型
          </el-menu-item>
          <el-menu-item index="/manage/comodity">
            <i class="el-icon-price-tag"></i>
            品牌管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/indent/indent-list"><i class="el-icon-notebook-2"></i>订单列表</el-menu-item>
          <el-menu-item index="/manage/indent/indent-config"><i class="el-icon-setting"></i>订单设置</el-menu-item>
          <el-menu-item index="/manage/indent/indent-dispose"><i class="el-icon-sell"></i>退货申请处理</el-menu-item>
          <el-menu-item index="/manage/indent/indent-cause"><i class="el-icon-set-up"></i>退货原因设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/manage">
        <template slot="title">
          <i class="el-icon-coin"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/user/user-list"><i class="el-icon-user"></i>用户列表</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-s-custom"></i>角色列表</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-s-order"></i>菜单列表</el-menu-item>
          <el-menu-item index="4-4"><i class="el-icon-folder"></i>资源列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      index: 1, //导航栏选中的index
      isok: true //是否展开
    };
  },
  methods: {
    btn() {
      this.isok = !this.isok;
      window.console.log(666);
    }
  },
  computed:{
    /** 导航栏的路由 */
    active(){
      return this.$store.state.active
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menuItem {
  height: 100%;
  .el-menu {
    height: 100%;
  }
  .el-menu {
    border-right: none;
  }
}
.el-menu-item{
  width: 180px;
}
</style>