// import { data } from 'jquery';
// import dummyData from '../../../assets/DummyData.js'

export default{
    registerNewUser (state, payload){
        console.log('mutations form data')
        console.log([payload])
        state.userData = payload;
    },
    // testMutation(state){
    //     state.test = 'changed state.test'
    //     console.log(state.test)
    // }
    addNewUserToFile(state){
        const newUser = {
            rank: state.userData.rank,
            name: state.userData.name,
            entity: state.userData.entity,
            batchNum: 3,
            sqnCycle: 2,
            ordDate: state.userData.ordDate,
        }
        const existingUsers = state.dummyData
        // console.log('existing Users: ')
        // console.log(existingUsers.rows[0]);
        // console.log(typeof(existingUsers.rows))
        existingUsers.rows.push(newUser);
        console.log(existingUsers);
    }
};