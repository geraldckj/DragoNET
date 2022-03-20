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
    const allUsers = store.getters['auth/getAllUsers'] // dummy state data
    // var allUsers3 = reactive(store.getters['users/getUsers'])
    // const allUsers2 = computed (() => store.getters['users/getUsers'])

    var loading = ref(false);

    async function getUsersFromFirebase (){
      loading.value = true;
      console.log('retreiving firebase userdata')
      try {
        await store.dispatch('users/getUsersFromFirebase')
        console.log('DONE retreiving firebase userdata')    

        table.rows = store.getters['users/getUsers'].rows
        table.totalRecordCount = store.getters['users/getUsers'].rows.length      
      } catch (error) {
        console.log(error)
        console.log('unable to fetch')
      }
      loading.value = false;

      

      // console.log('retreiving store userdata')
      // allUsers2.value.push(store.getters['users/getUsers'])
      // console.log(allUsers2.value)
      // console.log('DONE retreiving store userdata')
    }

    // async function getStoreUsers(){
    //   // table.rows = store.getters['auth/getUsers'].rows
    //   // table.totalRecordCount = store.getters['auth/getUsers'].rows.length
    //   console.log('getStoreUser runs')
    //   console.log(allUsers3)
    // }
    
    // const computedAllUsers = computed(()=> {
    //   console.log('computed allUsers2Value: ')
    //   console.log(allUsers2.value)
    //   return allUsers2.value
    // })


    

    // console.log('allUsers3 data')
    // console.log(allUsers3.rows)

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
     getUsersFromFirebase()
      // setTimeout(getStoreUsers, 100)
    })

    // onActivated(()=> {
    //   allUsers3 = store.getters['auth/getAllUsers']
    //   console.log('lifecycle hook runs')
    //   console.log(allUsers3)
    // })  

    return {
      table,
      // allUsers2,
      allUsers,
      // allUsers3,
      getUsersFromFirebase,
      
      // getStoreUsers
      // computedAllUsers,
      // getUsersFromStore
    };
  },
}





</script>

<style scoped>

</style>