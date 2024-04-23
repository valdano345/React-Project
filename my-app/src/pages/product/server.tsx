import ProductView from "@/views/Product"
import { ProductType } from "./product.type";



const ProductPage = ({products} : {products : ProductType[]}) => {

    return(
        <div>
            <ProductView products={products}/>
        </div>
    )
}

export default ProductPage;

// diapnggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/products');
    const response = await res.json();

    return{
        props: {
            products: response.data
        }
    }
}