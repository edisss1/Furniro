import ProfilePicturePlaceholder from "../../../svgs/ProfilePicturePlaceholder"

interface ReviewCardProps {
  id: string | undefined
  imgURL?: string | undefined
  name: string | undefined
  date: string | undefined
  review: string | undefined
}

const ReviewCard = ({ imgURL, name, date, review }: ReviewCardProps) => {
  return (
    <div className="grid grid-rows-3 place-content-start p-4  w-full rounded-md border-2">
      <div className="flex gap-4 items-center">
        {imgURL ? (
          <img className="w-8 rounded-full" src={imgURL} />
        ) : (
          <ProfilePicturePlaceholder className="w-8 rounded-full" />
        )}
        <p>{name ? name : "Unknown user"}</p>
        <p className="text-faint">{date}</p>
      </div>
      <div>
        <p>{review}</p>
      </div>
    </div>
  )
}
export default ReviewCard
