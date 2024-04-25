import { fetcher } from "@/lib/firebase/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [products, setPorducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  // useEffect(() => {
  //     fetch('/api/products')
  //         .then((res) => res.json())
  //         .then((response) => {
  //             setPorducts(response.data);
  //         })
  // }, [])

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
