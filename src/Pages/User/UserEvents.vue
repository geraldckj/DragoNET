<template>
<div>
    <base-card v-if="userLoginStatus">
        <p>You are logged in. Congrats!</p>
    </base-card>
    <base-card v-else>
        <p>You are not Logged in. Login <router-link to="/login">here</router-link>
        </p>
    </base-card>
    <base-container>
        <user-event-table></user-event-table>    
    </base-container>
</div>
</template>

<script>
import { onMounted, ref, computed} from 'vue'
import {useStore} from 'vuex'
// import { useRouter } from 'vue-router'
import UserEventTable from '../User/UserEventsTable.vue'

export default{
    components: { UserEventTable },

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