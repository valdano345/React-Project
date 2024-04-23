import styles from "@/styles/404.module.scss"

const Custom404 = () => {
    return(
        <div className={styles.error}>
            <img className={styles.error__image} src="/not_found.png" alt="404" />
            <div>Halaman Tidak Ditemuakan</div>
        </div>
    )
}

export default Custom404