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
        <div className=' flex flex-col justify-start gap-[calc(2rem-10%)] max-w-max '>
          <div className='flex gap-4'>
            <Input
              label='First Name'
              type='text'
              id='firstName'
              name='firstName'
              handleChange={handleChange}
              value={billingDetails.firstName}
              required={true}
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
            />
            <Input
              label='Last Name'
              type='text'
              id='lastName'
              name='lastName'
              handleChange={handleChange}
              value={billingDetails.lastName}
              required={true}
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
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
              styles='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
            />
          </div>
          <div className='flex flex-col max-w-full relative  '>
            <input
              className='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl resize-none px-2 box-border flex items-center text-justify whitespace-normal'
              id='additionalInfo'
              name='additionalInfo'
              onChange={handleChange}
              placeholder='Additional Information'
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default BillingForm
