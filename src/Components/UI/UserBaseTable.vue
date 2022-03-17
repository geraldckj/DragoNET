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
import {reactive, onMounted, computed} from 'vue';
import {useStore} from 'vuex';

export default{
  components: {
    TableLite,
  },
  setup() {
    const store = useStore();
    // const dummyData = store.getters['auth/getAllUsers'];
    function getDataFromFireBase(){
      console.log('onBeforemount')
      store.dispatch('users/getAllUsers'); //store user data from firebase into store
    }

    onMounted(() => {
      console.log('onBeforemount')
      store.dispatch('users/getAllUsers'); //store user data from firebase into store
    })

    const allUsers = computed(()=>{
      const test = store.getters['users/getUsers']
      console.log(test)
      return store.getters['users/getUsers']
    })

    
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
      rows: allUsers.value.rows,
      totalRecordCount: allUsers.value.rows.length, //variable according to the amount of dummy data
      sortable: {
        order: "id",
        sort: "asc",
      },
    });

    return {
      table,
      // dummyData,
      allUsers,
      getDataFromFireBase
    };
  },
}





</script>

<style scoped>

</style>