import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import { ProductWithId } from "../../components/producRelatedComponents/Products"
import { useQuery } from "@tanstack/react-query"

const fetchProducts = async (category?: string) => {
  let q
  if (category) {
    q = query(collection(db, "products"), where("category", "==", category))
  } else {
    q = collection(db, "products")
  }

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  })) as ProductWithId[]
}

export function useProducts(category?: string) {
  return useQuery<ProductWithId[]>({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
  })
}
