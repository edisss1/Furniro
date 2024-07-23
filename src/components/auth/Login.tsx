import Input from "../ui/Input"
import google from "../../assets/google.svg"
import { AuthProps } from "../../types/AuthProps"
import { useAuth } from "../../context/AuthContext"
import Error from "./Error"

const Login = ({ isLogin, setIsLogin }: AuthProps) => {
  const {
    error,
    onLogin,
    handleEmail,
    handlePassword,
    signInWithGoogle,
    setError,
  } = useAuth()

  return (
    <form
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
        onLogin(e)
      }}
      action=''
      className='animate-sign-up-appear mx-auto p-4 transition-all'>
      <fieldset className='flex flex-col gap-6 items-center'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          required={true}
          handleChange={handleEmail}
          styles='w-[100%] p-4 border-2 rounded-md'
        />
        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          required={true}
          handleChange={handlePassword}
          styles='w-[100%] p-4 border-2 rounded-md'
        />
        <button
          type='submit'
          className='border-2  w-fit self-center px-6 py-2 rounded-full'>
          Sign In
        </button>
        {error ? <Error /> : null}
      </fieldset>
      <div className='flex flex-col justify-center items-center mt-4'>
        <div className='flex flex-col items-center gap-4'>
          <p className='relative w-max px-4 bg-white text-gray-400'>
            <span className='relative z-10 bg-white px-1'>OR</span>
            <span className='absolute inset-0 flex items-center'>
              <span className='w-full border-t  border-gray-400'></span>
            </span>
          </p>
          <div className='w-full border-2  rounded-full'>
            <button
              type='button'
              onClick={() => {
                signInWithGoogle()

                setError(null)
              }}
              className='flex gap-2 items-center px-4 py-2'>
              <img src={google} alt='/' />
              <p>Sign In with Google</p>
            </button>
          </div>
        </div>
        <div className='flex gap-1 mt-4'>
          <p>Don't have an account?</p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className='text-faint underline underline-offset-4'>
            Create one
          </button>
        </div>
      </div>
    </form>
  )
}
export default Login
