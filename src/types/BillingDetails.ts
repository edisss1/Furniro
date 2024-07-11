export type BillingDetailsProps = {
  firstName: string
  lastName: string
  companyName?: string
  country: string
  streetAddress: string
  city: string
  province?: string
  zipCode: string
  phone: string
  email: string
  additionalInfo: string
  orderedProducts: string[]
  paymentMethod: string
}