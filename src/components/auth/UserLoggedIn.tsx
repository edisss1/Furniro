import { useAuth } from "../../context/AuthContext"
import profileIdentified from "../../assets/profileIdentified.svg"
import SignOut from "../../svgs/SignOut"

const UserLoggedIn = () => {
  const { user, signOut } = useAuth()
  return (
    <div className='flex flex-col items-center animate-sign-up-appear  '>
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='border-2  rounded-full w-fit flex items-center justify-center'>
          {user && user?.photoURL ? (
            <img className='w-full rounded-full' src={user.photoURL} alt='' />
          ) : user && !user.photoURL ? (
            <img className='w-full rounded-full ' src={profileIdentified} />
          ) : null}
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-center'>
            {user?.displayName ? user.displayName : "User"}
          </p>
        </div>
        <button
          className='flex items-center  gap-3 border-2 px-3 py-2 rounded-full absolute bottom-2'
          onClick={signOut}>
          <SignOut />
          <p>Sign out</p>
        </button>
      </div>
    </div>
  )
}
export default UserLoggedIn
