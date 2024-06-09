interface ProductCardProps {
  imgURL: string
  title: string
  smallDescription: string
  price: number
}

const ProductCard = ({
  imgURL,
  title,
  smallDescription,
  price,
}: ProductCardProps) => {
  return (
    <div>
      <img src={imgURL} alt='' />
      <div>
        <h4>{title}</h4>
        <p>{smallDescription}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
export default ProductCard
