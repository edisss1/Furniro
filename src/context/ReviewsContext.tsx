import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { SpecificProductContext } from "./SpecificProductContext"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDocs,
} from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { FirebaseError } from "firebase/app"

interface ReviewsContextProps {
  handleReview: (e: React.ChangeEvent<HTMLInputElement>) => void
  addReviewData: (
    e: React.ChangeEvent<HTMLFormElement>
  ) => Promise<DocumentReference<DocumentData> | undefined>
  rating: number
  setRating: React.Dispatch<React.SetStateAction<number>>
  visibleReviews: Review[]
  setVisibleReviews: React.Dispatch<React.SetStateAction<Review[]>>
  review: string
  loadMoreReviews: () => void
  acquiredReviews: Review[]
  setReviewsToShow: React.Dispatch<React.SetStateAction<number>>
  deleteReview: (reviewId: string | undefined) => Promise<void>
  warning: boolean
}

interface Review {
  id: string
  imgURL: string | undefined
  name: string | undefined
  email?: string | undefined
  reviewFor?: string | undefined
  userId?: string | undefined
  date: string | undefined
  review: string | undefined
  rating: number
}

const ReviewsContext = createContext<ReviewsContextProps | null>(null)

export const useReviews = () => {
  const context = useContext(ReviewsContext)
  if (!context) {
    throw new Error("useReviews must be used within ReviewsProvider")
  }

  return context
}

export const ReviewsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { user } = useAuth()
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([])
  const [reviewsToShow, setReviewsToShow] = useState<number>(8)
  const [warning, setWarning] = useState(false)

  const [acquiredReviews, setAcquiredReviews] = useState<Review[]>([])

  const { specificProduct } = useContext(SpecificProductContext) ?? {}

  const date = new Date()
  const dateMDY = `${date.getDate()}.${"0" + (date.getMonth() + 1).toString()}.${date.getFullYear()}`

  const handleReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value)
  }

  useEffect(() => {
    if (acquiredReviews && acquiredReviews.length > 0) {
      setVisibleReviews(acquiredReviews.slice(0, reviewsToShow))
    }
  }, [acquiredReviews, reviewsToShow])

  const loadMoreReviews = () => {
    const newReviewsToShow = reviewsToShow + 8
    setReviewsToShow(newReviewsToShow)
    setVisibleReviews(acquiredReviews.slice(0, newReviewsToShow))
  }

  const addReviewData = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!specificProduct?.id) {
        console.error("Product ID is undefined.")
        return
      }
      const parentDocRef = doc(db, "products", specificProduct.id)
      const subCollectionRef = collection(parentDocRef, "reviews")

      const data = {
        imgURL: user?.photoURL ? user.photoURL : "",
        name: user?.displayName ? user.displayName : "",
        userId: user?.uid ? user.uid : crypto.randomUUID(),
        email: user?.email ? user.email : "",
        reviewFor: specificProduct.name,
        date: dateMDY,
        review: review,
        rating: rating,
      }

      if (data.rating === 0) {
        setWarning(true)
        return
      } else {
        const docRef = await addDoc(subCollectionRef, data)
        setAcquiredReviews((prevReviews) => [
          ...prevReviews,
          { id: docRef.id, ...data } as Review,
        ])
        return docRef

        setReview("")
      }
    } catch (err) {
      console.error("Error adding review data:", err as FirebaseError)
    }
  }

  const deleteReview = async (reviewID: string | undefined) => {
    try {
      if (!specificProduct?.id) {
        console.error("Product ID is undefined")
        return
      }

      const parentDocRef = doc(db, "products", specificProduct.id)
      const subCollectionRef = collection(parentDocRef, "reviews")

      const reviewDocRef = doc(subCollectionRef, reviewID)

      await deleteDoc(reviewDocRef)

      setAcquiredReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewID)
      )
    } catch (err) {
      console.error(err as FirebaseError)
    }
  }

  useEffect(() => {
    const getReviewsForProduct = async () => {
      try {
        if (!specificProduct?.id) {
          console.error("Product ID is undefined.")
          return
        }
        const productDocRef = doc(db, "products", specificProduct.id)
        const reviewsCollectionRef = collection(productDocRef, "reviews")

        const querySnapshot = await getDocs(reviewsCollectionRef)

        const reviews: Review[] = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Review
        )
        setAcquiredReviews(reviews)
      } catch (err) {
        console.error(
          "Error getting reviews for product:",
          err as FirebaseError
        )
      }
    }

    if (specificProduct?.id) {
      getReviewsForProduct()
    }
  }, [specificProduct])

  return (
    <ReviewsContext.Provider
      value={{
        warning,
        deleteReview,
        setReviewsToShow,
        acquiredReviews,
        review,
        handleReview,
        addReviewData,
        rating,
        setRating,
        visibleReviews,
        setVisibleReviews,
        loadMoreReviews,
      }}>
      {children}
    </ReviewsContext.Provider>
  )
}
