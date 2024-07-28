import { useEffect, useState } from "react"
import MainPageSliderInfo from "./MainPageSliderInfo"
import { collection, onSnapshot, query } from "firebase/firestore"

import SliderArrow from "../../assets/SliderArrow.svg"
import SliderLink from "../../assets/SliderLink.svg"
import { Link } from "react-router-dom"
import { db } from "../../firebase/firebaseConfig"
import { SliderImageType } from "../../types/SlideImageType"

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
          sliderImagesArray.sort((a, b) => a.order - b.order)
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

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const getVisibleImages = () => {
    const newImages = [...images]
    const firstPart = newImages.slice(currentIndex)
    const secondPart = newImages.slice(0, currentIndex)
    return [...firstPart, ...secondPart]
  }

  return (
    <div className="ps-[10%] max-md:hidden max-lg:flex-col max-lg:gap-5 max-lg:justify-center max-lg:items-center  bg-secondary flex justify-center items-center relative overflow-hidden py-8 ">
      <MainPageSliderInfo />
      <div className="flex gap-6 overflow-hidden ">
        {getVisibleImages().map((image, index) => (
          <div
            key={image.id}
            className={`relative transition-transform duration-500 ${
              index === 0 ? "transform scale-100" : "transform scale-95"
            } ${index === images.length - 1 ? "-mr-24" : ""}`}>
            <img
              src={image.url}
              alt=""
              className={`bg-white block ${
                index !== 0 ? "h-[90%]" : "h-[100%]"
              } object-contain`}
            />
            <div className="absolute bottom-[10%] left-[5%] grid grid-cols-3 items-end ">
              <div
                className={` bg-[#FFFFFF] bg-opacity-50 ps-6 max-lg:ps-2 py-6 max-lg:py-2 pe-4 max-lg:pe-1 col-span-2 ${
                  index !== 0
                    ? "hidden opacity-0"
                    : "block opacity-100 transition-opacity duration-500"
                }`}>
                <p className="max-xl:text-sm">{image.imageSubHeader}</p>
                <h3 className="font-bold text-[1.7rem] max-xl:text-base text-[#3A3A3A]">
                  {image.imageHeader}
                </h3>
              </div>
              <div
                className={`aspect-square w-[3rem] bg-primary flex justify-center items-center ${
                  index !== 0
                    ? "hidden opacity-0"
                    : "block opacity-100 transition-opacity duration-500"
                } `}>
                <Link aria-label="Blank link" to="/">
                  <img src={SliderLink} alt="" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        <button
          className="w-fit h-fit top-[50%] right-[5%] transform -translate-y-1/2 rounded-full z-30 bg-white absolute py-4 px-4 flex justify-center items-center"
          onClick={goToNextImage}>
          <img src={SliderArrow} className="w-[14px] h-[14px]" alt="" />
        </button>
      </div>
      <div className="absolute bottom-8 flex justify-center w-full z-20 left-44 gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary outline outline-offset-4 outline-primary outline-1 "
                : "bg-gray-300 "
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default MainPageSlider
