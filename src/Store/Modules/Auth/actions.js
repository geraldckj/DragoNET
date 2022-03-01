export default{
    registerNewUser(context, payload){
        const formData = payload;
        console.log('register new user actions' + formData)
        context.commit('registerNewUser', formData);
    },
    addNewUserToFile(context){
        context.commit('addNewUserToFile')
    }
    // testAction(context){
    //     context.commit('testMutation');
    //     console.log('test action success');
    // },
};