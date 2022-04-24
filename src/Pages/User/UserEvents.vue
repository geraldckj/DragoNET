<template>
<div>
    <div v-if="userLoginStatus">
    <base-card >
        <p>You are logged in. Congrats!</p>
    </base-card>
    <base-container>
        <event-table></event-table>    
    </base-container>
    </div>
    
    <base-card v-else>
        <p>You are not Logged in. Login <router-link to="/login">here</router-link></p>
    </base-card>
    
</div>
</template>

<script>
import { onMounted, ref, computed} from 'vue'
import {useStore} from 'vuex'
// import { useRouter } from 'vue-router'
import EventTable from '../../Components/UI/EventTable.vue'

// src\Components\UI\EventTable.vue
// src\Pages\User\UserEvents.vue

export default{
    components: { EventTable },

    setup(){
        const userLoginStatus = ref()
        const store = useStore()

        async function userLoggedInWithGetter(){
            userLoginStatus.value = null
            console.log('onMounted')
            console.log(userLoginStatus.value)
            userLoginStatus.value = store.getters['auth/isAuthenticated']
            console.log(userLoginStatus.value)
        }

        const compUserStatus = computed(()=>{
            return store.getters['auth/isAuthenticated']
        })

        onMounted(()=>{
            userLoggedInWithGetter()
        })

        //need to get events from firebase with a getter, similar to personnel overview
        

    
        return {
            userLoggedInWithGetter,
            userLoginStatus,
            compUserStatus
        }
    }
}
</script>

<style scoped>

</style>>