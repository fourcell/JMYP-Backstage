<template>
  <div>
    <List />
    <indentTable />
  </div>
</template>
<script>
import List from "../../components/indentCause/indentCauseList";
import indentTable from "../../components/indentCause/indentCauseTable";
export default {
  components: {
    List,
    indentTable
  }
};
</script>