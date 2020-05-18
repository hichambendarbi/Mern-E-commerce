type TicktesOpen = string
type TicketsNew = string
type TicketsSolved = string
type TicketsClosed = string
type TicketsRaisedBy = string
type TicketsRaisedAt = string

interface Tickets {
    open    : TicktesOpen
    new     : TicketsNew
    solved : TicketsSolved
    closed : TicketsClosed
}

declare enum TicketsPriority {
    low = "Low",
    medium = "Medium",
    normal = "Normal",
    high = "High",
    critical = "Critical",
}

interface TicketsRaising {
    raisedBy : TicketsRaisedBy
    raisedAt : TicketsRaisedAt
}