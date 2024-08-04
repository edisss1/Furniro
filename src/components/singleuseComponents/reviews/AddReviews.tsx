import RatingReview from "./RatingReview"
import { useReviews } from "../../../context/ReviewsContext"

const AddReviews = () => {
  const { addReviewData, handleReview, review, rating, setRating, warning } =
    useReviews()

  return (
    <form
      onSubmit={addReviewData}
      className="flex items-center w-full mt-8 justify-center flex-wrap gap-6">
      <div className="relative group">
        <input
          required
          onChange={handleReview}
          value={review}
          id="review"
          className="border-b-2 outline-none px-2 py-1  border-b-black"
          type="text"
          placeholder="Write review..."
        />
      </div>
      <button className="py-1 px-2 relative after:content[''] overflow-hidden after:w-full after:scale-x-0 after:h-[2px] after:bg-black after:absolute after:top-0 after:left-0 hover:after:scale-x-100 after:origin-left after:transition-all before:w-full before:scale-x-0 before:origin-right before:h-[2px] before:bg-black before:transition-all before:absolute before:bottom-0 before:right-0 hover:before:scale-x-100 border-l-2 border-r-2 hover:border-white transition-all">
        Send review
      </button>
      <RatingReview rating={rating} setRating={setRating} />
      {warning ? <p>Rating can not be 0</p> : null}
    </form>
  )
}
export default AddReviews
