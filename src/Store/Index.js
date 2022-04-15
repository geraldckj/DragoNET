import { createStore } from 'vuex';

import adminModule from './Modules/Admin/index.js';
import authModule from './Modules/Auth/index.js';
import userModule from './Modules/Users/index.js';

const store = createStore({
  modules: {
    admin: adminModule,
    auth: authModule,
    users: userModule,
  },
  state:{
    loggedIn: false,
    currUserEmail: null,
  }
});


export default store;