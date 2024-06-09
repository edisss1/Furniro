export type Product = {
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
