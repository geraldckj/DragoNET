export default{
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
    },
    isAuthenticated(){
        let tmp = localStorage.token
        console.log('getters storage token')
        console.log(localStorage.token)
        if (tmp === null) {
            console.log('if triggers')
            return false
        }
        else if (tmp !== null) {
            console.log('else triggers')
            return true;
        }
    }
};