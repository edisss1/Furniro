import { collection, addDoc } from "firebase/firestore"
import { db } from "./config"
import * as fs from "fs"
import * as path from "path"

type Product = {
  category: string
  details: {
    dimensions: {
      depth: number
      height: number
      width: number
    }
    features: string[]
    material: string
    countryOfOrigin: string
  }
  fullDescription: string
  imageURL: string
  name: string
  price: number
  productID: string
  ratings: {
    average: number
    count: number
  }
  reviews: string[]
  smallDescription: string
  stock: number
  subcategory: string
  id: string
}

async function importJSONToFirestore() {
  const filePath = path.join(__dirname, "products.json")
  const fileData = fs.readFileSync(filePath, "utf-8")
  const jsonData: Product[] = JSON.parse(fileData)

  for (const data of jsonData) {
    try {
      const docRef = await addDoc(collection(db, "products"), data)
      console.log("Document written with ID: ", docRef.id)
    } catch (e) {
      console.error("error adding document:", e)
    }
  }
}

importJSONToFirestore()
