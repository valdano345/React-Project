import { fetcher } from "@/lib/firebase/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { query } from "firebase/firestore";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProductType } from "./product.type";


const DetailProductPage = ({product} : {product : ProductType}) => {
    // const {query} = useRouter();

    // Client Side Rendering Methode
    // const {data, error, isLoading} = useSWR(
    //     `/api/product/${query.id}`,fetcher
    // )

    
    return(
        <div>
            {/* Client Side Rendering */}
            {/* <DetailProduct product={isLoading ? [] : data.data} /> */}
            {/* Server Side Rendering */}
            <DetailProduct product={product} />
        </div>
    )
}

export default DetailProductPage;

export async function getServerSideProps({params}: {params: {id: string}}) {
    // fetch data
    const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
    const response = await res.json(); 

    return{
        props: {
            product: response.data,
        }
    }
}