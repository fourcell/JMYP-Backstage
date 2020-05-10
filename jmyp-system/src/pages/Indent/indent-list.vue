<template>
  <div class="indentList avert">
    <search />
    <List/>
    <indentTable/>
  </div>
</template>
<script>
import search from "../../components/indentList/indentSearch";
import List from "../../components/indentList/indentList";
import indentTable from '../../components/indentList/indentTable'

export default {
  components: {
    search,
    List,
    indentTable
  }
};
</script>

