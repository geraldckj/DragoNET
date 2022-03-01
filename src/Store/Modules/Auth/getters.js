export default{
    test(state){
        console.log('inside getters.js: ' + state.test)
        return state.test;
    },
    checkStateUserData(state){
        console.log(state.userData);
        return state.userData
    },
    getAllUsers(state){
        return state.dummyData
    }
};