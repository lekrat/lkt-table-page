import { App, Plugin } from 'vue';

import { default as page } from './lib-components/LktTablePage.vue';
import "./../lkt-table-page.css";

import LktTable from "lkt-table";
import LktPaginator from "lkt-paginator";

const LktTablePage: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-table-page') === undefined) app.component('lkt-table-page', page);

    // Register additional components
    if (app.component('lkt-table') === undefined)  app.use(LktTable);
    if (app.component('lkt-paginator') === undefined)  app.use(LktPaginator);
  },
};

export default LktTablePage;
