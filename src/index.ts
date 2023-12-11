import { App } from 'vue';

import { default as page } from './lib-components/LktTablePage.vue';

const LktTablePage = {
  install: (app: App) => {
    app.component('lkt-table-page', page);
  },
};

export default LktTablePage;
