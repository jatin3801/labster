import { useMediaQuery } from "react-responsive";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewButton from "../Button/NewButton";

const Navbar = () => {
    const isMdScreen = useMediaQuery({ query: "(max-width: 1080px)" });
    return (
        <div className={styles.topContainer}>
            <div className={styles.navIconContainer}>
                <Link href="/" className={styles.logo}>
                    <Image
                        loading="lazy"
                        width={200}
                        height={40}
                        src="https://assets-global.website-files.com/63105b5082760e06eb992f00/6318857268327f40b9b4ec2c_Labster%20logo_Brand%20Blue.svg"
                        alt="logo"
                    />
                </Link>
                <div className={styles.rightMenu}>

                    <div className={styles.menuItem}>
                        <Link href="/simulatiob">Simulations</Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href="/how_it_works">How it works</Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href="/pricing">Pricing</Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href="/resources">Resources</Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href="/contact_us">Contact us</Link>
                    </div>
                    <NewButton>Get Started</NewButton>

                </div>

                {isMdScreen && (
                    <div className={styles.mobMenuIcon}>
                        <GiHamburgerMenu size={24} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(Navbar);
