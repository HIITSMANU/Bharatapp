import styles from "./OtherJwellery.module.css"
export const Jewellery=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>
                    Bharat Jewels Bestsellers
                </h1>
            </div>
            <div className={styles.secContainer}>
            <div className={styles.secdiv}>
                <div className={styles.img1}>
                    <a href="/newarrivals">
                    <img src="https://banner.caratlane.com/live-images/c4e3f443e6fc45219f46e053e436e90a.jpg"className="img" alt="" /></a>
                </div>
                <div className={styles.img1}>
                    <a href="/specialdeals">
                    <img src="https://banner.caratlane.com/live-images/0313540933404303ab4dbfe9d7c55d1d.jpg" className="img" alt="" srcset="" /></a>
                </div>
            </div>
            <div className={styles.thirddiv}>
                <div className={styles.img2}>
                    <a href="/earRingscombo">
                    <img src="https://banner.caratlane.com/live-images/94243b98b03e4952932ecc4f1bb9e935.jpg"className="img" alt="" /></a>
                </div>
                <div className={styles.img2}>
                    <a href="/bestsellers">
                    <img src="https://banner.caratlane.com/live-images/da257d2285bb42a2a3f1512f35b3cb26.jpg"className="img" alt="" /></a>
                </div>
                <div className={styles.img2}>
                    <a href="/bestsellers">
                    <img src="https://banner.caratlane.com/live-images/b8e4c3f3a1be4a3ea67381090849bbdf.jpg"className="img" alt="" /></a>
                </div>
            </div>
            <div className={styles.fourthdiv}>
                <div className={styles.img3}>
                    <a href="/bestsellers">
                    <img src="https://banner.caratlane.com/live-images/8bb153834f4b48b6a8edeb8938a8e05e.jpg"className="img" alt="" /></a>
                </div>
                <div className={styles.img3}>
                    <a href="/bestsellers">
                    <img src="https://banner.caratlane.com/live-images/1aba470118154e5b9af3c355f127379e.jpg"className="img" alt="" /></a>
                </div>
                </div>
            </div>
        </div>
    )
}