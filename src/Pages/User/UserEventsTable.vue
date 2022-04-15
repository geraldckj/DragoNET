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
import {reactive, onMounted, ref} from 'vue';
import {useStore} from 'vuex';

export default{
  components: {
    TableLite,
  },
  setup() {
    const store = useStore();
    const allUsers = store.getters['auth/getAllUsers']
    var loading = ref(false);

    async function getUserEventFromFirebase (){//change function to get logged in user from firebase
      loading.value = true;
      console.log('retreiving firebase userdata')
      // try {
      //   //store use email into localStorage when logging in
      //   // dispatch getter to query firebase db 
      //   await store.dispatch('users/getUserEvents')
      //     //use email as primary key to search db 
      //     //get all events with user emails as a child 
          


      //   await store.dispatch('users/getUserEventfromFirebase')
      //   console.log('DONE retreiving firebase userdata')    

      //   table.rows = store.getters['users/getUsers'].rows
      //   table.totalRecordCount = store.getters['users/getUsers'].rows.length      
      // } catch (error) {
      //   console.log(error)
      //   console.log('unable to fetch')
      // }
      // loading.value = false;
    }

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
      rows: allUsers.rows,
      totalRecordCount: allUsers.rows.length , 
      sortable: {
        order: "id",
        sort: "asc",
      },
    });  


    onMounted(() => {
     getUserEventFromFirebase()
      // setTimeout(getStoreUsers, 100)
    })



    return {
      table,
      allUsers,
      getUserEventFromFirebase,
    };
  },
}





</script>

<style scoped>

</style>