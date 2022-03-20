export default {
    addUsersToStore(state, responseData){
        state.users = responseData;
        console.log(state.users)
    }
}