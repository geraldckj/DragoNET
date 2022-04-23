<template>
<div>
    <base-card>
        <div class="vue-template">
            <form @submit.prevent="createNewEvent">
              <h3>Create New Event</h3>              
                <div class="form-group" style="float:right">
                    <label for="eventName">Event Title</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventTitle"/>
                </div>
                
                <div style="float:left" class="form-group">
                    <label>Event Description</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventDesc" />
                </div>
                <div style="clear:both;">&nbsp;</div>

                <div style="float:left" class="form-group">
                    <label>Event Date</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventDate" />
                </div>

                <div style="float:right" class="form-group">
                    <label>Event Time</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventTime" />
                </div>
                <div style="clear:both;">&nbsp;</div>


                <div style="float:left" class="form-group">
                    <label>Event Location</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventLocation" />
                </div>

                <div style="float:right" class="form-group">
                    <label>Event Category</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventCategory" />
                </div>
                <div style="clear:both;">&nbsp;</div>

                <div style="float:left" class="form-group">
                    <label>Event Status</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.eventStatus" />
                </div>

                <div style="float:right" class="form-group">
                    <label>Event Created By</label>
                    <input type="text" class="form-control form-control-lg" v-model.trim="formData.createdBy" />
                </div>
                <div style="clear:both;">&nbsp;</div>


                <button type="submit" class="btn btn-dark btn-lg btn-block">Create Event</button>
            </form>
        </div>
    </base-card>
</div>
</template>

<script>

import {reactive} from 'vue';
import {useStore} from 'vuex';

export default{
  setup(){
    const store = useStore();

    const formData = reactive({
        eventTitle: '',
        eventDesc: '',
        eventDate:'',
        eventTime:'',
        eventLocation: '',
        eventCategory: '',
        eventStatus: '',
        createdBy: '',
    })

    async function createNewEvent(){
      console.log(formData)
      //send action that gives form info to db 
      await store.dispatch('admin/createNewEvent', formData)
      //redirect user to mainpage 
    }
 
      
      
    return {
        formData,
        createNewEvent
    }
  }
}
</script>

<style scoped>
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