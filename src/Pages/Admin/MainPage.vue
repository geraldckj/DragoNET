<template>
<div>
    <h2>Welcome to the WMWD Homepage</h2>
    <base-card>
        <h4>Testing base-button</h4>
        <base-button mode="">Test Link</base-button>
    </base-card>
    
    <div>
        <base-card>
            <h4>Testing base-dialog</h4>
            <base-dialog @close="toggleDialog" :show="DialogTF" :fixed="false">   
                Main Content
            </base-dialog>
            <base-button mode="outline" @click="toggleDialog" > Toggle dialog</base-button>
        </base-card>
    </div>
        
    <div>
        <router-link to="/TestPage">Test 404 link</router-link>
    </div>
</div>
</template>

<script>    
import BaseButton from '../../Components/UI/BaseButton.vue';
import BaseCard from '../../Components/UI/BaseCard.vue';
export default{
  components: { BaseButton, BaseCard },
    data() {
        return{
            DialogTF : false,
        }
    },
    methods:{
        toggleDialog(){
            this.DialogTF = !this.DialogTF;
            console.log(this.DialogTF);
        }   
    },
    computed:{
        
    }
}
</script>