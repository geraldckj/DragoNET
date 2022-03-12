export default{
    addNewUser(context, payload){
        console.log('register new user actions' + payload)
        context.commit('addNewUser', payload);
    },
    // addNewUserToFile(context){
    //     context.commit('addNewUserToFile')
    // }
    // testAction(context){
    //     context.commit('testMutation');
    //     console.log('test action success');
    // },

    async addNewUserFirebase(context,payload){
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFKkTdWqcznM6mthra4DUahWw29HiJPCA`
        const response = await fetch(
            url, 
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                })
            }
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
            //   responseData.message || 'Failed to authenticate. Check your login data.'
              responseData.message
            );
            localStorage.setItem('existingUser', true);
            console.log('error')
            context.commit('existingUser', true);
            console.log(localStorage.existingUser)
            throw error;
        }

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        // localStorage.setItem('tokenExpiration', expirationDate); //used for auto login/logout 
        
        
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
          });    
    }
};