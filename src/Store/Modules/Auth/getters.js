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
        return state.allUsers;
    },
    authLogin(state){
        return state.userData;
    },
    existingUser(state){
        return state.existingUser;
    }
};