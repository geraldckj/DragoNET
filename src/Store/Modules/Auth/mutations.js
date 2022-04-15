// import { data } from 'jquery';
// import dummyData from '../../../assets/DummyData.js'

export default{
    // registerNewUser (state, payload){
    //     console.log('mutations form data')
    //     console.log([payload])
    //     state.userData = payload;
    // },
    existingUser(state, payload){
        console.log(payload)
        state.existingUser = payload
    },
    addNewUser(state, payload){
        const newUser = {
            rank: payload.rank,
            name: payload.name,
            entity: payload.entity,
            batchNum: 3,
            sqnCycle: 2,
            ordDate: payload.ordDate,
        }
        state.allUsers.rows.push(newUser);
        // const existingUsers = state.allUsers
        // existingUsers.rows.push(newUser);
        console.log(state.allUsers);
    },
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
      },
    loginUser(rootState, payload){
        rootState.loggedIn = true,
        rootState.currUserEmail = payload
        // console.log(rootState.loggedIn)
        // console.log(rootState.currUserEmail)
        console.log('SET NEW USER STATE')
    },
    logoutUser(rootState){
        rootState.loggedIn = false;
        rootState.currUserEmail= null;
    }

};