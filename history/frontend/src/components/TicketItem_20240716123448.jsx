import { Link } from "react-router-dom"



function TicketItem({ticket}) {
  return (
    <div className="ticket"> 
      <div>{new Date(ticket.createdAt).toLocaleString("pt-BR")}</div>
      <div>{ticket.product}</div>
      <div className={`sta`}></div>
    </div>
  )
}

export default TicketItem
