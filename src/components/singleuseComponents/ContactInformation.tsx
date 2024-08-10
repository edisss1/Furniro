import Map from "../../assets/Map.svg"
import Clock from "../../assets/Clock.svg"
import Phone from "../../assets/Phone.svg"
import { useContext } from "react"
import { FeedbackContext } from "../../context/FeedbackContext"
import FeedbackSent from "./FeedbackSent"

const ContactInformation = () => {
  const context = useContext(FeedbackContext)
  if (!context) {
    return null
  }

  const { sent, sendFeedback, handleChange, feedback } = context

  const inputStyles =
    "border-2 h-[75px] w-[calc(100%-20px)] mx-auto rounded-md ps-4"
  return (
    <div className="mt-[10%] flex max-md:flex-col max-md:items-center justify-evenly items-start ">
      <div className="flex-col flex gap-8 ">
        <div>
          <div className="flex gap-4 max-w-[212px] items-start">
            <img src={Map} alt="" />
            <div>
              <h3>Address</h3>
              <p className="">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 max-w-[270px] items-start">
            <img src={Phone} alt="" />
            <div>
              <h3>Phone</h3>
              <p className="text-base">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 max-w-[212px] items-start">
            <img src={Clock} alt="" />
            <div>
              <h3>Working Time</h3>
              <p className="">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
          sendFeedback(feedback, e)
        }
        className="flex flex-col gap-6 ">
        <div className="flex flex-col">
          <label className="ps-3" htmlFor="name">
            Your name
          </label>
          <input
            required
            className={inputStyles}
            id="name"
            name="name"
            type="text"
            placeholder="Abc"
            onChange={handleChange}
            value={feedback.name}
          />
        </div>
        <div className="flex flex-col">
          <label className="ps-3" htmlFor="email">
            Email address
          </label>
          <input
            required
            className={inputStyles}
            id="email"
            name="email"
            type="email"
            placeholder="Abc@def.com"
            value={feedback.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="ps-3" htmlFor="subject">
            Subject
          </label>
          <input
            className={inputStyles}
            id="subject"
            name="subject"
            type="text"
            placeholder="This is optional"
            value={feedback.subject}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[calc(105%-20px)]  ">
          <label className="ps-3" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-[calc(30vh-100px)] border-2 w-[calc(100%-20px)]  rounded-md resize-none p-4"
            name="message"
            id="message"
            placeholder="Hi! I'd like to ask about"
            value={feedback.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex w-[calc(100%-20px)]">
          <button className="self-start bg-primary text-white px-20 py-3 rounded-md">
            Submit
          </button>
        </div>
        {sent ? <FeedbackSent /> : null}
      </form>
    </div>
  )
}
export default ContactInformation
