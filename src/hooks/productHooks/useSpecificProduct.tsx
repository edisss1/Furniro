import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { ProductWithId } from "../../components/producRelatedComponents/Products"
import { useQuery } from "@tanstack/react-query"

const fetchSpecificProduct = async (id: string) => {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id } as ProductWithId
  }
  return undefined
}

export function useSpecificProduct(id: string) {
  return useQuery<ProductWithId | undefined, Error>({
    queryKey: ["products", id],
    queryFn: () => fetchSpecificProduct(id),
  })
}

// export function useSpecificProduct(id: string) {
//   const [specificProduct, setSpecificProduct] = useState<ProductWithId | null>(
//     null
//   )
//   const [loading, setLoading] = useState<boolean>(true)

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const docRef = doc(db, "products", id)
//         const docSnap = await getDoc(docRef)

//         if (docSnap.exists()) {
//           setSpecificProduct({
//             ...docSnap.data(),
//             id: docSnap.id,
//           } as ProductWithId)
//         }
//       } catch (error) {
//         console.error("Error fetching products: ", error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchProduct()
//   }, [id])

//   return { specificProduct, loading }
// }
