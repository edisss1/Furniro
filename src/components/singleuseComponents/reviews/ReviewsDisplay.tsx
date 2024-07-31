import ReviewCard from "./ReviewCard"

import { useReviews } from "../../../context/ReviewsContext"
import { useEffect } from "react"

export interface Review {
  id: string | undefined
  imgURL: string | undefined
  name: string | undefined
  email?: string | undefined
  reviewFor?: string | undefined
  date: string | undefined
  review: string | undefined
}

const ReviewsDisplay = () => {
  const { visibleReviews, loadMoreReviews, acquiredReviews, setReviewsToShow } =
    useReviews()

  useEffect(() => {
    setReviewsToShow(8)
  }, [])

  return (
    <div className="flex items-center flex-col mt-8 gap-4">
      {visibleReviews.length !== 0 ? (
        visibleReviews.map((review) => (
          <>
            <ReviewCard
              key={review.id}
              imgURL={review.imgURL}
              id={review.id}
              name={review.name}
              date={review.date}
              review={review.review}
            />
          </>
        ))
      ) : (
        <p>Product has no reviews</p>
      )}
      {visibleReviews &&
        acquiredReviews &&
        visibleReviews.length < acquiredReviews.length && (
          <button
            className="border-2 px-2 py-1 rounded-md text-faint hover:text-black hover:border-black transition-all duration-150 ease-linear"
            onClick={loadMoreReviews}>
            Show more
          </button>
        )}
      {/* <button onClick={loadMoreReviews}>test</button> */}
    </div>
  )
}
export default ReviewsDisplay
