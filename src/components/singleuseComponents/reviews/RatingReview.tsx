import React, { useState } from "react"

interface RatingReviewProps {
  rating: number
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const RatingReview: React.FC<RatingReviewProps> = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl ${hoverRating !== null ? (hoverRating >= star ? "text-primary" : "text-faint") : rating >= star ? "text-primary" : "text-faint"}`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(null)}>
          ★
        </span>
      ))}
    </div>
  )
}

export default RatingReview
