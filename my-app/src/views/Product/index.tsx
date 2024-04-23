import Link from 'next/link';
import styles from './Product.module.scss';

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const ProductView = ({products}: {products: ProductType[]}) => {

    return(
        <div className={styles.product}>
            <h1 className={styles.product__title}>Product</h1>
            <div className={styles.product__content}>
                {products.length > 0 ? (
                    <>
                    {products.map((product: ProductType) => (
                    <Link href={`/product/${product.id}`} key={product.id} className={styles.product__content__item}>
                        <div className={styles.product__content__item__image}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h4 className={styles.product__content__item__name}>
                            {product.name}
                        </h4>
                        <p className={styles.product__content__item__category}>
                            {product.category}
                        </p>
                        <p className={styles.product__content__item__price}>
                            {product.price.toLocaleString('id-ID', {style: "currency", currency: "IDR"})}
                        </p>
                    </Link>
                ))}
                    </>
                ) : (
                    <>
                    <div className={styles.product__content__skelton}>
                        <div className={styles.product__content__skelton__image} />
                        <div className={styles.product__content__skelton__name} />
                        <div className={styles.product__content__skelton__category} />
                        <div className={styles.product__content__skelton__price} />
                    </div>
                    </>
                )}
                
                
            </div>
            
        </div>
    )

} 
export default ProductView  