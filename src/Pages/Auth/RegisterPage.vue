<template>
<div>
  <base-dialog :show="!!error" title=" User already exists, Login instead!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
  <base-alert v-if="existingUser" show variant="danger">User already exists, Login instead!</base-alert>
    <base-card>
      <div class="vue-template">
          <button @click="checkData">Check State</button>
          <!-- <button @click="testVuex">Test Vuex</button> -->
            <form @submit.prevent="testAction">
              
                <h3>Register</h3>
                 <div class="form-group">
                    <label for="rank">Email </label>
                    <input type="email" class="form-control form-control-lg" id="rank"  v-model.trim="formData.email"/>
                </div>
                <div class="form-group">
                    <label for="rank">Rank </label>
                    <input type="text" class="form-control form-control-lg" id="rank"  v-model.trim="formData.rank"/>
                </div>
                <div class="form-group">
                    <label for="NRIC">NRIC </label>
                    <input type="text" class="form-control form-control-lg" id="NRIC"  v-model.trim="formData.NRIC"/>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control form-control-lg" id="name" v-model.trim="formData.name" />
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" class="form-control form-control-lg" id="phoneNum" v-model.trim="formData.phoneNum"/>
                </div>
                <div class="form-group" style="text-align: center">
                    <label>Enlistment Date</label>
                    <input type="date" id="enlistDate" class="form-control form-control-lg" v-model.trim="formData.enlistDate"/>
                </div>
                <div class="form-group">
                    <label>Entity</label>
                    <select name="Entity" class="form-control form-control-lg" id="entity" v-model.trim="formData.entity">
                        <option>SCC</option>
                        <option>IRF</option>
                        <option>PLT</option>
                        <option>FLT</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>ORD Date</label>
                    <input type="date" class="form-control form-control-lg" id="ordDate" v-model.trim="formData.ordDate"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-lg" id="password" v-model.trim="formData.password"/>
                </div>
                <div class="form-group">
                    <label>Re-Enter Password</label>
                    <input type="password" class="form-control form-control-lg" id="passwordConfirm" v-model.trim="formData.passwordConfirm"/>
                </div>
                <button type="submit" class="btn btn-dark btn-lg btn-block" @click='registerNewUser'>Register</button>
                <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Forgot password ?</router-link>
                </p>
                <div class="social-icons">
                    <ul>
                        <li><a href="#"><i class="fa fa-google"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </form>
        </div>
    </base-card>
</div>
</template>
<script>

import {reactive, computed, onBeforeMount, ref } from 'vue'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'

export default{
// TODO: link up form fields with local store, and store it locally
  setup(){
    const router = useRouter()
    const store = useStore();
    const error = ref(null);
    // https://vuex.vuejs.org/guide/composition-api.html#accessing-mutations-and-actions
    const formData = reactive({ 
      email: '',
      rank: '',
      name: '',
      username: '',
      NRIC: '',
      phoneNum: '',
      enlistDate: null,
      entity:'',
      ordDate: null,
      password: '',
      passwordConfirm: '',
    })

    const existingUser = computed(()=>{
     return store.getters['auth/existinguser'];
    })
    
    async function registerNewUser(){
      formData.username = formData.name.toLowerCase();
      try {
        await store.dispatch('auth/addNewUserFirebase', formData); //register user account 
        await store.dispatch('users/registerUser',formData); //store user data in form into db
        router.replace('/AllUsers')
      } catch (err){
        error.value = err.message || 'Failed to Authenticate, try logging in'
        console.log(err.message)
      }
    }

    function handleError(){
      error.value = null
    }

    onBeforeMount(() => {
      localStorage.setItem('existingUser', false);
    })

    return {
      formData: formData,
      registerNewUser,     
      existingUser ,
      error,
      handleError
    }
  }

}
</script>

<style scoped>
input{
    text-align: center;
}
select{
    text-align: center;
}
input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
* {
  box-sizing: border-box;
}
body {
  background: #2554FF !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}
body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;    
}
.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}
.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}
.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
label {
  font-weight: 500;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}
.forgot-password a {
  color: #2554FF;
}
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}
.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}
.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>>