import { TicketsViewAll } from './admin/ticketsViewAll';

export const ticketsRoutes ={
    admin : {
        TicketsViewAll : {
            path : "/admin/:user/tickets/list-all",
            component : TicketsViewAll
        }
    },
    web : {}
}