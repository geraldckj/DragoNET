export default {
    async registerUser(context, payload) {
      const userId = context.rootGetters.userId;
      // const userData = {
      //   rank: payload.rank,
      //   name: payload.name,
      //   username: payload.username,
      //   NRIC: payload.NRIC,
      //   phoneNum: payload.phoneNum,
      //   enlistDate: payload.enlistDate,
      //   entity: payload.entity,
      //   ordDate: payload.ordDate,
      // };
  
    //   const token = context.rootGetters.token;
    //   const response = await fetch(
    //    `https://dragonet-8888-default-rtdb.asia-southeast1.firebasedatabase.app/${userId}.json?auth=` +
    //    token,
    //     {
    //       method: 'PUT',
    //       body: JSON.stringify(userData)
    //     }
    //   );

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
  
      // const responseData = await response.json();
  
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
  