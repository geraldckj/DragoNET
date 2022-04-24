export default {
    async getUsersFromFirebase(context){ //get all user data from firebase, put into local state
      const response = await fetch(
        `https://dragonet-8888-default-rtdb.asia-southeast1.firebasedatabase.app/allUsers.json`
      );
      const responseData = await response.json();

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
        allUsers.rows.push(user)
      }
      context.commit('addUsersToStore', allUsers)
    },

    async registerUser(context, payload) {
      // const userId = context.rootGetters.userId;
      const response = await fetch(`https://dragonet-8888-default-rtdb.asia-southeast1.firebasedatabase.app/allUsers.json`,
          {
              method: 'POST',
              body: JSON.stringify({
                email: payload.email,   
                rank: payload.rank,
                name: payload.name,
                username: payload.username,
                NRIC: payload.NRIC,
                phoneNum: payload.phoneNum,
                enlistDate: payload.enlistDate,
                entity: payload.entity,
                ordDate: payload.ordDate,
              })
          }
      )
  
  
      if (!response.ok) {
        // error ...
      }
    },
  };
  