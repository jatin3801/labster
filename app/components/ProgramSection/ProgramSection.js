import NewButton from "../Button/NewButton";
import React from "react";
import styles from "./ProgramSection.module.css";

const ProgramSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>
                    Unlock the Potential of Your STEM Program
                </h2>
                <div className={styles.btn_container}>
                    <NewButton isOutlined isActive onClick={() => { }}>
                        Maximize Resources
                    </NewButton>
                    <NewButton isOutlined onClick={() => { }}>
                        Inspire Students
                    </NewButton>
                    <NewButton isOutlined onClick={() => { }}>
                        Close Learning Gap
                    </NewButton>
                    <NewButton isOutlined onClick={() => { }}>
                        Empower Educators
                    </NewButton>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_wrapper}>
                        <div className={styles.card_wrapper_left}>
                            <h3 className={styles.left_heading}>
                                Students Step into the Shoes of Real Scientists
                            </h3>
                            <p className={styles.left_subheading}>
                                Offer students a glimpse into an exciting STEM career through
                                simulations where they experience the thrill of solving
                                real-world challenges.
                            </p>
                            <NewButton onClick={() => { }}> Take the Product Tour</NewButton>
                        </div>
                        <div className={styles.card_wrapper_right}>
                            <div className={styles.video_wrapper}>
                                <video
                                    className={styles.video_player}
                                    width="100%"
                                    src="https://assets-global.website-files.com/63105b5082760e06eb992f00/649af6aee6cfcc41f578f79f_Hero%20Video%20Preview%20compressed-transcode.mp4"
                                    autoPlay
                                    loop
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(ProgramSection);
