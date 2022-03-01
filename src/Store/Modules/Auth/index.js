import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

//auth modules index.js

export default {
  namespaced: true,
  state() {
    return {
      test: {
        text: "test auth info ",
        text2: "test 2 auth info"   
      },
      userData: null,
      dummyData: {
        rows : [{
          rank: '3SG',
          name: 'Gerald',
          entity: 'SCC',
          batchNum: '04/20',
          sqnCycle: '2',
          ordDate: '28 JUL 2022',
        },
        {
          rank: '2LT',
          name: 'Ron',
          entity: 'Flight HQ',
          batchNum: '03/20',
          sqnCycle: '3',
          ordDate: '28 MAY 2022',
        },
        {
          rank: 'CPL',
          name: 'Joshua',
          entity: 'SCC',
          batchNum: '01/21',
          sqnCycle: '1',
          ordDate: '28 NOV 2022',
        },
      ],
      }
     };
  },
  mutations,
  actions,
  getters,
};
