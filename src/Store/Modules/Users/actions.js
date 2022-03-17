export default {
    async getAllusers(context){
      const response = await fetch(`https://dragonet-8888-default-rtdb.asia-southeast1.firebasedatabase.app/allUsers.json`
      );
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
      const allUsers = {
        rows: []
      };
      for (const key in responseData){
        const user = {
          id: key,
          name: responseData[key].name,
          username: responseData[key].username,
          NRIC: responseData[key].NRIC,
          phoneNum: responseData[key].phoneNum,
          enlistDate: responseData[key].enlistDate,
          entity: responseData[key].entity,
          ordDate: responseData[key].ordDate
        }
        allUsers.push(user.rows)
      }
      context.commit('setUsers', allUsers)
    },

    async registerUser(context, payload) {
      const userId = context.rootGetters.userId;
      const response = await fetch(`https://dragonet-8888-default-rtdb.asia-southeast1.firebasedatabase.app/allUsers/${userId}.json`,
          {
              method: 'POST',
              body: JSON.stringify({
                rank: payload.rank,
                name: payload.name,
                username: payload.username,
                NRIC: payload.NRIC,
                phoneNum: payload.phoneNum,
                enlistDate: payload.enlistDate,
                entity: payload.entity,
                ordDate: payload.ordDate,})
          }
      )
  
  
      if (!response.ok) {
        // error ...
      }
  
      // context.commit('auth/addNewUser', 
      //   ...userData,
      //   {root: true}
      // );
    },
//     async loadCoaches(context, payload) { //function for loading data, use this to generate allusers table
//       if (!payload.forceRefresh && !context.getters.shouldUpdate) {
//         return;
//       }
  
//       const response = await fetch(
//         `https://vue-http-demo2-bd21b-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
//       );
//       const responseData = await response.json();
  
//       if (!response.ok) {
//         const error = new Error(responseData.message || 'Failed to fetch!');
//         throw error;
//       }
  
//       const coaches = [];
  
//       for (const key in responseData) {
//         const coach = {
//           id: key,
//           firstName: responseData[key].firstName,
//           lastName: responseData[key].lastName,
//           description: responseData[key].description,
//           hourlyRate: responseData[key].hourlyRate,
//           areas: responseData[key].areas
//         };
//         coaches.push(coach);
//       }
  
//       context.commit('setCoaches', coaches);
//       context.commit('setFetchTimestamp');
//     }
  };
  