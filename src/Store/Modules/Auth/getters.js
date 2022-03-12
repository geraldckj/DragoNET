export default{
    test(state){
        console.log('inside getters.js: ' + state.test)
        return state.test;
    },
    checkStateUserData(state){
        console.log(state.userData);
        return state.allUsers
    },
    getAllUsers(state){
        console.log('allUsers from state')
        console.log(state.allUsers)
        return state.allUsers;
    },
    authLogin(state){
        return state.userData;
    },
    existingUser(state){
        return state.existingUser;
    }
};