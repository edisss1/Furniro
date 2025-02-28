import logo from "../../../assets/Meubel House_Logos-05.svg"
import HamMenu from "../../../assets/HamMenu.svg"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import profileUndefined from "../../../assets/Vector.svg"
import favoriteItems from "../../../assets/akar-icons_heart.svg"
import cartIcon from "../../../assets/ant-design_shopping-cart-outlined.svg"
import { paths, activeLinkStyles } from "../../../imports/imports"

const MobileNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    const handleNavState = () => {
        setIsNavOpen(!isNavOpen)
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsNavOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <nav className="lg:hidden px-6 py-4 overflow-x-hidden ">
            <div className="flex justify-between">
                <Link
                    aria-label="Logo link to home page"
                    className="flex gap-1 justify-center items-center"
                    to={"/"}
                >
                    <img className="w-8" src={logo} alt="logo" />
                    <h1 className="text-2xl font-bold font-secondary">
                        Furniro
                    </h1>
                </Link>

                <button
                    onClick={handleNavState}
                    className={`w-8 ${isNavOpen ? "hidden" : "block"}`}
                >
                    <img src={HamMenu} alt="Hamburger menu icon" />
                </button>
            </div>
            <div>
                <div
                    ref={menuRef}
                    className={`flex bg-white w-3/4 h-full  transform px-10 py-6 transition-all duration-500  ${
                        isNavOpen ? "translate-x-0" : "translate-x-full"
                    } flex-col items-center fixed top-0 right-0 z-[9999]`}
                >
                    <div className="flex justify-end self-end">
                        <button onClick={handleNavState} className="w-8">
                            <img src={HamMenu} alt="" />
                        </button>
                    </div>
                    <ul className="w-1/2 mt-8 flex flex-col gap-12 justify-center items-center">
                        {paths?.map((path) => (
                            <li key={path.path}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLinkStyles : ""
                                    }
                                    to={path.path}
                                >
                                    {path.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4 mt-8">
                        <Link aria-label="Link to login page" to={"/login"}>
                            <img
                                src={profileUndefined}
                                alt="profile is not defined"
                            />
                        </Link>

                        <Link
                            aria-label="Link to wishlist page"
                            to={"/wishlist"}
                        >
                            <img src={favoriteItems} alt="favorite items" />
                        </Link>
                        <Link aria-label="Link to cart page" to={"/cart"}>
                            <img src={cartIcon} alt="shopping cart" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav
