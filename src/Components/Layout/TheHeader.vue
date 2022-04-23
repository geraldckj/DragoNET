<template>
  <header>
    <nav @click="forceRerender">
      <h1>
        <router-link to="/">DragoNET</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/UserEvents">My Events</router-link>
        </li>
        <li>
          <router-link to="/AllUsers">Personnel Overview</router-link>
        </li>
        <li>
          <router-link to="/AllEvents">Event Overview</router-link>
        </li>
        <li>
          <router-link to="/UserProfile">My Profile</router-link>
        </li>
        <li v-if="userLoginState">
          <router-link to="/CreateNewEvent">New Event</router-link>
        </li>
        <li>
          <router-link to="/Register">Register</router-link>
        </li>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        
        <li v-if="userLoginState" :key="componentKey">
          <base-button @click="logout(); forceRerender()">Logout</base-button>
        </li>
        <li v-else  :key="componentKey">
          <router-link to="/Login" >Login</router-link>
        </li>

        <li v-if="compUserStatus">
          <p>test</p>
        </li>
        
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref, computed, onUpdated } from 'vue'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'

export default{
    setup(){
        const store = useStore()
        const router = useRouter();
        const userLoginState = ref(null)

        const componentKey = ref(0)
        function logout(){
          store.dispatch('auth/logout');
          router.push('/login')
        }

        const compUserStatus = computed(()=>{
            return store.getters['auth/userLoginStatus']
        })

        function forceRerender(){
          componentKey.value += 1
        }

        const switchButton = computed(()=> {
          if (localStorage.token !== undefined){
            return true
          } else {
            return false
          }
        })

        // onMounted(()=>{
        //     console.log('onMounted')
        // })
        // onBeforeMount(()=>{
        //   console.log('onbeforeMount')
        // })

        // onActivated(()=>{
        //   console.log('onActivated')
        // })

        onUpdated(()=>{
          // console.log('onUpdated')
          // console.log(localStorage.token)
          if (localStorage.token !== undefined){
            userLoginState.value = true
            // console.log(userLoginState.value)
          } else {
            userLoginState.value = false
          }
        })

        return {
            // userLoggedInWithGetter,
            logout,
            compUserStatus,
            componentKey,
            forceRerender,
            switchButton,
            userLoginState
        }
    }
}
</script>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>