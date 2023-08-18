import { useRouter } from "next/router"

const Review = ()=>{
    const router  = useRouter()
    const {productId, reviewId} = router.query
    return(
        <h3>Product  {productId}, ReviewId {reviewId}</h3>
    )
}

export default Review