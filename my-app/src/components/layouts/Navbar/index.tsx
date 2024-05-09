import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navabr.module.css";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div className="big" id="title">
        Navbar
      </div>
      <div className={styles.profile}>
        {data?.user?.image && (
          <Image
            width={30}
            height={30}
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.name}
          />
        )}
        {data && data.user.fullname}{" "}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
