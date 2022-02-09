<template>
  <div>
       <table-lite
      :is-static-mode="true"
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @is-finished="table.isLoading = false"
    ></table-lite>
  </div>
  <section>Credits for <a href="https://linmasahiro.github.io/vue3-table-lite/dist/usage.html#default" > Table </a></section>

</template>

<script>
import TableLite from 'vue3-table-lite';
import {reactive} from 'vue';
import dummyData from './DummyData.js'
// src\Pages\Admin\DummyData.js

export default{
  components: {
    TableLite,
  },
  setup() {
      // Init Your table settings
      const table = reactive({
        isLoading: false,
        columns: [
          {
            label: "Rank",
            field: "rank",
            width: "5%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Name",
            field: "name",
            width: "10%",
            sortable: true,
          },
          {
            label: "Entity",
            field: "entity",
            width: "10%",
            sortable: true,
          },
          {
            label: "Batch Num",
            field: "batchNum",
            width: "10%",
            sortable: true,
          },
          {
            label: "SQN Cycle",
            field: "sqnCycle",
            width: "10%",
            sortable: true,
          },
          {
            label: "ORD Date",
            field: "ordDate",
            width: "10%",
            sortable: true,
          },
          {
            label: "Add To Event",
            field: "addToEvent",
            width: "10%",
            sortable: false,
          },
        ],
        rows: dummyData.rows,
        totalRecordCount: dummyData.rows.length, //variable according to the amount of dummy data
        sortable: {
          order: "id",
          sort: "asc",
        },
      });
  
      return {
        table,
      };
  },
}





</script>

<style scoped>

</style>