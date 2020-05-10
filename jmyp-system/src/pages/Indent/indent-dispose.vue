<template>
 <div class="indentDispose avert">
   <search></search>
   <List></List>
   <indentTable></indentTable>   
 </div>
  <!-- <div>订退款申请处理</div> -->
</template>
<script>
import search from "../../components/indentDispose/indentDisposeSearch";
import List from "../../components/indentDispose/indentDisposeList";
import indentTable from '../../components/indentDispose/indentDisposeTable'

export default {
  components: {
    search,
    List,
    indentTable
  }
};
</script>