<template>
  <div class="manage">
    <Left class="left"/>
    <Right class="right"/>
  </div>
</template>
<script>
import Left from './Left'
import Right from './Right'
export default {
  components:{
    Left,
    Right
  },
  watch:{
    /**监听路由的变化，当点击top组件的跳转时，导航栏的index也随着改变 */
    // $route(to,from){
    //    this.$store.commit('active',to.path)
    // }
  },
  created(){
    //刷新选中的导航栏index不改变
      this.$store.commit('active',this.$route.path)
  }

}
</script>
<style lang="scss" scoped>
    .manage{
      display: flex;
      height: 100%;
    }
    .left{
      height: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      overflow: auto;
    }
    .right{
      flex: 1;
      margin-left: 200px;
    }
</style>