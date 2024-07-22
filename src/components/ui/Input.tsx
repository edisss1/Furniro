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
  styles: string
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
  styles,
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
        className={styles}
        id={id}
        type={type}
        required={required}
      />
    </div>
  )
}
export default Input
