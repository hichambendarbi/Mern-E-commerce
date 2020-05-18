import App from "./web/App";
import  {AdminLayout}  from "./admin/layout";
import {AuthComponent} from './authentification-redux-lib/src/web'
export const routes = {
  webpages: {
    path: "/website/*",
    component: App
  },
  adminpages: {
    path: "/admin/*",
    component: AdminLayout
  },
  auth : {
    path : "/auth/*",
    component : AuthComponent
  }
};
