export default{
    // checkStateUserData(state){
    //     console.log(state.userData);
    //     return state.allUsers
    // },
    getAllUsers(state){
        return state.allUsers;
    },
    authLogin(state){
        return state.userData;
    },
    existingUser(state){
        return state.existingUser;
    },
    isAuthenticated(){
        let tmp = localStorage.token
        // console.log('authenticating if user is logged in from getters')
        console.log(localStorage)
        if (tmp === undefined){
            console.log('tmp is undefined')
        }

        if(tmp !== undefined){
            // console.log('person logged in')
            return true
        }
        else{
            // console.log('person not logged in')
            return false;
        }
    },
    userLoginStatus(rootState){
        console.log(rootState.loggedIn)
        return rootState.loggedIn
    }
};