import { useEffect, useState } from "react"
import MainPageSliderInfo from "./MainPageSliderInfo"
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { SliderImageType } from "../types/SlideImageType"

const MainPageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images, setImages] = useState<SliderImageType[]>([])

  useEffect(() => {
    const fetchSliderImages = async () => {
      const q = query(collection(db, "sliderImages"))
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const sliderImagesArray: SliderImageType[] = []
          querySnapshot.forEach((doc) => {
            const sliderImageData = doc.data() as SliderImageType
            sliderImagesArray.push({ ...sliderImageData, id: doc.id })
          })
          setImages(sliderImagesArray)
        },
        (error) => {
          console.error("Error fetching slider images ", error)
        }
      )
      return unsubscribe
    }
    fetchSliderImages()
  }, [])

  return (
    <div className='ps-[10%] max-md:hidden'>
      <MainPageSliderInfo />
      <div></div>
    </div>
  )
}
export default MainPageSlider
