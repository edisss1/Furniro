import { Link } from "react-router-dom"

const MainPageSliderInfo = () => {
  return (
    <div className="max-w-[430px] flex flex-col gap-6">
      <div>
        <h2 className="font-bold text-[40px] text-[#3A3A3A]">
          50+ Beautiful room <br /> inspiration
        </h2>
        <p className="text-[1rem] text-[#616161]">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
      </div>
      <Link
        aria-label="Link to shop page"
        to={"/shop"}
        className="text-white  max-w-[11rem] bg px-8 py-3 bg-primary font-bold">
        Explore More
      </Link>
    </div>
  )
}
export default MainPageSliderInfo
