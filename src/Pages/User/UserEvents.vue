<template>
<div>
    <base-card v-if="userLoggedInWithGetter">
        <p>You are logged in. Congrats!</p>
    </base-card>
    <base-card v-else>
        <p>You are not Logged in. Login <router-link to="/login">here</router-link>
        </p>
    </base-card>
    
</div>
</template>

<script>
import { computed,} from 'vue'
import {useStore} from 'vuex'
// import { useRouter } from 'vue-router'

export default{
    setup(){
        const store = useStore()
    // const userLoggedIn = ref(null);

        const userLoggedIn = computed(() => {
            console.log('computed runs')
            console.log(localStorage.getItem('token'))
            if (localStorage.getItem('token') === true){
                return true
            }
            else{
                return false
            }
        })

        let userLoggedInWithGetter = computed(()=>{
            console.log('getter runs')
            return store.getters['auth/isAuthenticated']
        })

    
        return {
            userLoggedIn,
            userLoggedInWithGetter,
        }
    }
}
</script>

<style scoped>

</style>>