import Quality from "../assets/GuaranteesAssets/Quality.svg"
import Warranty from "../assets/GuaranteesAssets/Warranty.svg"
import Shipping from "../assets/GuaranteesAssets/Shipping.svg"
import Support from "../assets/GuaranteesAssets/Support.svg"

export const activeLinkStyles = "text-[#B88E2F]"
export const generalLinkStyles = " hover:text-[#DEB862] transition-all"
export const paths = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/shop",
    text: "Shop",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
]

export const values = [8, 12, 16, 20, 24, 28, 32]
export const itemsToShowValues = [
  {
    value: "8",
    title: 8,
  },
  {
    value: "12",
    title: 12,
  },
  {
    value: "16",
    title: 16,
  },
  {
    value: "20",
    title: 20,
  },
  {
    value: "24",
    title: 24,
  },
  {
    value: "28",
    title: 28,
  },
  {
    value: "32",
    title: 32,
  },
]

export const options = [
  {
    sortBy: "default",
    optionText: "Default",
  },
  {
    sortBy: "cheap-first",
    optionText: "Cheap First",
  },
  {
    sortBy: "expensive-first",
    optionText: "Expensive First",
  },
  {
    sortBy: "aToZ",
    optionText: "A-Z",
  },
  {
    sortBy: "zToA",
    optionText: "Z-A",
  },
]

export const guaranteesContent = [
  {
    img: Quality,
    header: "High Quality",
    text: "crafted from top materials",
  },
  {
    img: Warranty,
    header: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    img: Shipping,
    header: "Free Shipping",
    text: "Order over 150$",
  },
  {
    img: Support,
    header: "24 / 7 Support",
    text: "Dedicated Support",
  },
]
