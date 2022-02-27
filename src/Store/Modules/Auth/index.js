import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

//auth modules index.js

export default {
  namespaced: true,
  state() {
    return {
      test: "got info from auth store"
    };
  },
  mutations,
  actions,
  getters,
};
