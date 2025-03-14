import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

// Create the base schema first
export const insertCustomerSchema = createInsertSchema(customers);

// Then extend it with your validations
export const validatedCustomerSchema = insertCustomerSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address1: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  zip: z.string().min(1, "Zip code is required"),
  state: z.string().min(1, "State is required"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof validatedCustomerSchema._type
export type selectCustomerSchemaType = typeof selectCustomerSchema._type