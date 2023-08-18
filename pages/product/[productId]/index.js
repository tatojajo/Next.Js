import { useRouter } from "next/router"

const ProductsDetail = ()=>{
    const router  = useRouter()
    const productId = router.query.productId
    return(
        <h3>Product Detail {productId}</h3>
    )
}

export default ProductsDetail