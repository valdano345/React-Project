import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      {/* <img className={styles.error__image} src="/not_found.png" alt="404" /> */}
      <Image
        src="/not_found.png"
        alt="404"
        width={600}
        height={600}
        className={styles.error__image}
      />
      <div>Halaman Tidak Ditemuakan</div>
    </div>
  );
};

export default Custom404;
