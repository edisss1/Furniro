import { Link } from "react-router-dom"
import { paths } from "../../../imports/imports"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../firebase/firebaseConfig"

const Footer = () => {
    const [email, setEmail] = useState<string>("")
    const date = new Date()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleEmailSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const emailDocRef = collection(db, "newsletter-emails")
        await addDoc(emailDocRef, {
            email: email
        })
        setEmail("")
    }

    return (
        <footer className="py-12 px-[clamp(.2rem,5vw,6.25rem)] max-lg:grid-cols-1 grid grid-cols-3 gap-16 ">
            <div className="col-start-1 row-start-1 w-fit">
                <div className="flex flex-col  gap-[clamp(1rem,10vh,2.5rem)]">
                    <h3 className="text-2xl font-bold block ">Furniro</h3>
                    <span className="max-w-[250px] text-black/50">
                        400 University Drive Suite 200 Coral Gables, FL 33134
                        USA
                    </span>
                </div>
            </div>
            <div className="flex w-fit items-center col-start-2 col-end-3 col-span-2 justify-between  row-start-1 max-lg:row-start-2   max-lg:items-start max-lg:col-start-1 max-lg:col-span-1 max-lg:justify-center gap-4 m-0">
                <div className="flex flex-col gap-4">
                    <h4 className="text-black/50">Links</h4>
                    <div className="grid gap-2">
                        {paths.map((path) => (
                            <Link
                                className="font-medium"
                                key={path.text}
                                to={path.path}
                            >
                                {path.text}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="grid gap-4  row-start-1">
                    <h4 className="text-black/50">Links</h4>
                    <div className="grid gap-2">
                        {paths.map((path) => (
                            <Link
                                className="font-medium"
                                key={path.text}
                                to={path.path}
                            >
                                {path.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-start-4 w-full max-w-[250px] row-start-1 flex flex-col items-start gap-8 max-lg:col-start-1 max-lg:row-start-3">
                <h4 className="text-black/50">Newsletter</h4>
                <form
                    onSubmit={handleEmailSubmit}
                    className=" w-full flex flex-col  items-start gap-4 "
                >
                    <div className="relative ">
                        <input
                            onChange={handleEmailChange}
                            required
                            className="peer outline-none border-b-2 border-black w-full px-0 py-2 "
                            id="email"
                            type="text"
                            autoComplete="off"
                        />
                        <label
                            className="absolute w-max peer-focus:-translate-y-[150%] peer-focus:text-[0.9rem] left-0 top-[50%] -translate-y-[50%] pointer-events-none peer-focus:bg-white transition-all opacity-50"
                            htmlFor="email"
                        >
                            Enter your email address
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="underline decoration-black underline-offset-8"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
            <div className="row-start-3 max-lg:row-start-4 col-start-1 w-fit">
                <span className="block">
                    {date.getFullYear()} Furniro. All rights reserved
                </span>
            </div>
        </footer>
    )
}
export default Footer
