import { useAuth } from "../../../context/AuthContext"
import { useReviews } from "../../../context/ReviewsContext"
import ProfilePicturePlaceholder from "../../../svgs/ProfilePicturePlaceholder"
import Trashcan from "../../../svgs/Trashcan"

interface ReviewCardProps {
  id: string | undefined
  imgURL?: string | undefined
  name: string | undefined
  date: string | undefined
  review: string | undefined
  rating: number
  userId: string | undefined
}

const ReviewCard = ({
  imgURL,
  name,
  date,
  review,
  rating,
  id,
  userId,
}: ReviewCardProps) => {
  const { user } = useAuth()
  const { deleteReview } = useReviews()

  return (
    <div className="grid relative grid-rows-3 place-content-start p-4  w-full rounded-md border-2">
      <div className="flex gap-4 items-center">
        {imgURL ? (
          <img className="w-8 rounded-full" src={imgURL} />
        ) : (
          <ProfilePicturePlaceholder className="w-8 rounded-full" />
        )}
        <p>{name ? name : "Unknown user"}</p>
        <p className="text-faint">{date}</p>
        <p className="pointer-events-none">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={crypto.randomUUID()}
              className={`${rating >= star ? "text-primary" : "text-faint"}`}>
              ★
            </span>
          ))}
        </p>
      </div>
      <div>
        <p>{review}</p>
      </div>
      {user?.uid === userId ? (
        <>
          <button
            onClick={() => deleteReview(id)}
            className="absolute right-2 top-2">
            <Trashcan className="w-8" />
          </button>
          <span className="sr-only">Delete review</span>
        </>
      ) : null}
    </div>
  )
}
export default ReviewCard
