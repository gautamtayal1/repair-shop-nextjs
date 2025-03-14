"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { insertCustomerSchema, type insertCustomerSchemaType, type selectCustomerSchemaType  } from "@/zod-schemas/customer"

type Props = {
  customer?: selectCustomerSchemaType
}

export default function CustomerForm({customer} : Props) {
  const defaultValues: insertCustomerSchemaType = {
    id: customer?.firstName || 0,
    firstName: customer?.firstName || "",
    lastName: customer?.lastName || "",
    address1: customer?.address1 || '',
    address2: customer?.address2 || '',
    city: customer?.city || '',
    state: customer?.state || '',
    zip: customer?.zip || '',
    phone: customer?.phone || '',
    notes: customer?.notes || '',

  }

  const form = useForm<insertCustomerSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  })

  async function submitForm(data: insertCustomerSchemaType){
    console.log(data)
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {customer?.id ? "Edit" : "New"} Customer Form
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