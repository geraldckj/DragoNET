export default{
    test(state){
        console.log('inside getters.js: ' + state.test)
        return state.test;
    }
};