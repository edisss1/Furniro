interface RatingReviewProps {
  rating: number
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const RatingReview = ({ rating, setRating }: RatingReviewProps) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl ${rating >= star ? "text-primary" : "text-faint"}`}
          onClick={() => setRating(star)}>
          ★
        </span>
      ))}
    </div>
  )
}
export default RatingReview
