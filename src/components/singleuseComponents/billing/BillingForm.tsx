import { useContext } from "react"
import Input from "../../ui/Input"
import { BillingContext } from "../../../context/BillingContext"

const BillingForm = () => {
  const context = useContext(BillingContext)
  if (!context) return
  const { billingDetails, handleChange } = context

  return (
    <>
      <legend className='font-semibold text-3xl mb-4'>Billing details</legend>
      <div>
        <div className=' flex flex-col justify-start gap-4 max-w-max '>
          <div className='flex gap-4'>
            <Input
              label='First Name'
              type='text'
              id='firstName'
              name='firstName'
              handleChange={handleChange}
              value={billingDetails.firstName}
              required={true}
            />
            <Input
              label='Last Name'
              type='text'
              id='lastName'
              name='lastName'
              handleChange={handleChange}
              value={billingDetails.lastName}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Company Name (Optional)'
              id='companyName'
              name='companyName'
              type='text'
              handleChange={handleChange}
              value={billingDetails.companyName}
              required={false}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Country / Region'
              id='country'
              name='country'
              type='text'
              handleChange={handleChange}
              value={billingDetails.country}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Street Address'
              id='streetAddress'
              name='streetAddress'
              type='text'
              handleChange={handleChange}
              value={billingDetails.streetAddress}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Town / City'
              id='city'
              name='city'
              type='text'
              handleChange={handleChange}
              value={billingDetails.city}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Province'
              id='province'
              name='province'
              type='text'
              handleChange={handleChange}
              value={billingDetails.province}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='ZIP Code'
              id='zipCode'
              name='zipCode'
              type='text'
              handleChange={handleChange}
              value={billingDetails.zipCode}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Phone'
              id='phone'
              name='phone'
              type='text'
              handleChange={handleChange}
              value={billingDetails.phone}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Email Address'
              id='email'
              name='email'
              type='text'
              handleChange={handleChange}
              value={billingDetails.email}
              required={true}
            />
          </div>
          <div className='flex flex-col max-w-full'>
            <Input
              label='Additional Information'
              id='additionalInfo'
              name='additionalInfo'
              type='text'
              handleChange={handleChange}
              value={billingDetails.additionalInfo}
              required={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default BillingForm
