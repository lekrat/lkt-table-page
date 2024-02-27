import { App, Plugin } from 'vue';

import { default as page } from './lib-components/LktTablePage.vue';
import "./../lkt-table-page.css";


const LktTablePage: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-table-page') === undefined) app.component('lkt-table-page', page);
  },
};

export default LktTablePage;
