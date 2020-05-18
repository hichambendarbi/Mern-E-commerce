import { GardeViewAll } from './admin/GardeViewAll';
import { CreateNew } from './admin/GardeCreateNew';
export const gardeRoutes = {
    admin : {
        GardeViewAll : {
            path : '/admin/:user/gardes/list-all',
            component : GardeViewAll
        },
        GardeCreateNew : {
            path : '/admin/:user/gardes/create-new',
            component : CreateNew
        },
    },
    web   : {}
}