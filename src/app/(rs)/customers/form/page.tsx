import { BackButton } from "@/components/Backbutton";
import { getCustomers } from "@/lib/queries/getCustomers";
import * as Sentry from "@sentry/nextjs"

export default async function CustomerFormPage({
  searchParams
}:{
  searchParams: Promise<{[key: string]: string | undefined}>
}) {
  try {
    const {customerId} = await searchParams

    if(customerId){
      const customer = await getCustomers(parseInt(customerId))
      if(!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }
      console.log(customer)
    } else {

    }
  } catch (error) {
    if(error instanceof Error) {
      Sentry.captureException(error)
      throw error
    }
  }
}