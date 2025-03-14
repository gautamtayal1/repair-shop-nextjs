import { BackButton } from "@/components/Backbutton";
import { getCustomers } from "@/lib/queries/getCustomers";
import { getTickets } from "@/lib/queries/getTickets";
import * as Sentry from "@sentry/nextjs"

export default async function TicketFormPage({
  searchParams
}: {
  searchParams: Promise<{[key: string]: string | undefined}>
}) {
  
  try {
    const {ticketId, customerId} = await searchParams
    if(!ticketId && !customerId) {
      return(
        <>
          <h2>Ticket id or Customer Id required to load ticket form</h2>
          <BackButton variant="default" title="Go Back" />
        </>
      )
    }
    if(customerId) {
      const customer = await getCustomers(parseInt(customerId))
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not active</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }
      console.log(customer)
    }
    if(ticketId) {
      const ticket = await getTickets(parseInt(ticketId))
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }

      const customer = await getCustomers(ticket.customerId)
      console.log("ticket: ", ticket)
      console.log("Customer: ", customer)
    }
  } catch (error) {
    if (error instanceof Error){
      Sentry.captureException(error)
      throw error
    }
  }
}