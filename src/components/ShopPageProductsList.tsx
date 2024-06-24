import { useDisplay } from "../context/ItemsDisplayContext"
import { useProducts } from "../hooks/useProducts"
import ProductCard from "./ProductCard"

const ShopPageProductsList = () => {
  const display = useDisplay()
  const products = useProducts()
  return (
    <div className='flex justify-center items-center'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imgURL={product.imageURL}
          smallDescription={product.smallDescription}
          price={product.price}
          title={product.name}
        />
      ))}
    </div>
  )
}
export default ShopPageProductsList
