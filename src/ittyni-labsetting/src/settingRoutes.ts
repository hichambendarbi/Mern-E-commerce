import { Setting } from './admin/setting';
export const settingRoutes = {
    admin : {
        laboSetting : {
            path : "/admin/:user/settings/",
            component : Setting
        }
        
    },
    web : {}
}