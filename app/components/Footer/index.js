import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import Column from "./Column";
import footerMenuArray from "./menuArray";
import React from "react";
const Footer = () => {

    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/" className={styles.logo}>
                    <Image
                        width={200}
                        height={40}
                        src="https://assets-global.website-files.com/63105b5082760e06eb992f00/63170d2f91a50a5b4de9e8f6_Labster%20logo_white.svg"
                        alt="logo"
                    />
                </Link>

                <div className={styles.link_container}>
                    {footerMenuArray.map((item) => (
                        <Column
                            key={item.id}
                            heading={item.heading}
                            linkArray={item.linkArray}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
