import { useAuth } from "../../../context/AuthContext"
import ProfilePicturePlaceholder from "../../../svgs/ProfilePicturePlaceholder"
import { Review } from "./ReviewsDisplay"

const ReviewCard = ({ imgURL, name, date, review }: Review) => {
  const { user } = useAuth()

  console.log(user?.uid)

  return (
    <div className="grid grid-rows-3 place-content-start p-4  w-full rounded-md border-2">
      <div className="flex gap-4 items-center">
        {user && !user.isAnonymous ? (
          <img
            className="w-8 rounded-full aspect-square border-none outline-none"
            src={imgURL}
            alt=""
          />
        ) : (
          <ProfilePicturePlaceholder className="w-8" />
        )}
        <p>{user?.displayName ? name : "Unknown user"}</p>
        <p className="text-faint">{date}</p>
      </div>
      <div>
        <p>{review}</p>
      </div>
    </div>
  )
}
export default ReviewCard
