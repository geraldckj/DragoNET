import { createApp } from 'vue';

import router from './router.js';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import store from './Store/Index.js';
import App from './App.vue';
import BaseAlert from './Components/UI/BaseAlert.vue';
import BaseButton from './Components/UI/BaseButton.vue';
import BaseCard from './Components/UI/BaseCard.vue';
import BasePopout from './Components/UI/BasePopout.vue';
import BaseDialog from './Components/UI/BaseDialog.vue';
import BaseContainer from './Components/UI/BaseContainer.vue'
// import AllUsersTable from './Components/UI/UserBaseTable.vue';


// import store from './store/index.js';

const app = createApp(App);

app.use(router);
app.use(store);



app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-popout', BasePopout);
app.component('base-alert', BaseAlert);
app.component('base-container', BaseContainer);
app.component('base-dialog', BaseDialog);

app.mount('#app');
