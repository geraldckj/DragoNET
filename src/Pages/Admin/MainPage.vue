<template>
    <h2>Welcome to the WMWD Homepage</h2>
    <h4>Testing base-button</h4>
    <base-button title="test Button"></base-button>

    <div>
        <h4>Testing base-card</h4>
        <base-card></base-card>
    </div>

    <div>
        <base-card>
            <h4>Testing base-dialog</h4>
            <base-dialog 
                @close="toggleDialog"
                :show="DialogTF"
                :fixed="false"
            >   
                Main Content
            </base-dialog>
            <p @click="toggleDialog"> click to toggle dialog</p>
        </base-card>
    </div>
        
    <div>
        <router-link to="/TestPage">Test link</router-link>
    </div>
</template>

<script>    
export default{
    data() {
        return{
            DialogTF : false
        }
    },
    methods:{
        toggleDialog(){
            this.DialogTF = !this.DialogTF
            return true;
        }   
    },
    computed:{
        
    }
}
</script>