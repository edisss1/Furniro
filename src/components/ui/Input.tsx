interface InputProps {
  label: string
  id: string
  name: string
  type: string
  placeholder?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  checked?: boolean
  required: boolean
}

const Input = ({
  label,
  id,
  name,
  type,
  handleChange,
  value,
  checked,
  required,
}: InputProps) => {
  return (
    <div className='flex flex-col'>
      <label className='font-medium' htmlFor='firstName'>
        {label}
      </label>
      <input
        name={name}
        onChange={handleChange}
        value={value}
        checked={checked}
        className='h-[75px] w-full border-2 border-[#9F9F9F] rounded-xl max-xl:h-[4rem] max-md:h-[3rem] px-2'
        id={id}
        type={type}
        required={required}
      />
    </div>
  )
}
export default Input
