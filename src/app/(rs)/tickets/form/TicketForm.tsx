"use client"

import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { insertTicketSchema, type insertTicketSchemaType, type selectTicketSchemaType } from '@/zod-schemas/ticket'
import { selectCustomerSchemaType } from '@/zod-schemas/customer'

type Props = {
  customer: selectCustomerSchemaType,
  ticket?: selectTicketSchemaType
}

export default function TicketForm({
  customer, ticket
}: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id ?? "(New)",
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? "",
  }

  const form = useForm<insertTicketSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  })

  async function submitForm(data: insertTicketSchemaType){
    console.log(data)
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {ticket?.id ? "Edit" : "New"} Ticket {ticket?.id ? `#${ticket.id} ` : "Form"} Ticket Form
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} 
        className="flex flex-col gap-4"/> 
      </Form>
      <p>
        {JSON.stringify(form.getValues())}
      </p>
    </div>
  )
}

