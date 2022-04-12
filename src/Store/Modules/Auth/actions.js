
export default{
    async loginUser(context, payload){
        console.log(payload.email)
        console.log(payload.password)
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFKkTdWqcznM6mthra4DUahWw29HiJPCA`
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
              responseData.message || 'error logging in, try again later'
            );
            throw error;
        }
        const expiresIn = responseData.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        console.log(responseData)

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        // timer = setTimeout(function(){
        //     context.dispatch('autoLogout');
        //   }, expiresIn);
    },

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
              responseData.message || 'User already exists, login instead'
            );
            localStorage.setItem('existingUser', true);
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
    },

    logout(){
        localStorage.removeItem('token');
        console.log('logout token:')
        console.log(localStorage.getItem('token'))
        console.log('logout')
    }
};