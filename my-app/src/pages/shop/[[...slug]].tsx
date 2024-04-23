import { useRouter } from "next/router";


const ShopPage = () => {
    const {query} = useRouter();
    return(
        <div>
            <h1>Shop Page</h1>
            <p>shop: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`} </p>
        </div>
    )
}

export default ShopPage;