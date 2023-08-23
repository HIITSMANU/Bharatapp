import styles from "../pages/AppStyle.module.css"

export const Services=()=>{
    return(
        <div>
            <h2 class={styles.services_heading}>CaratLane Special In-store Services</h2>
            <div class={styles.services_main}>
                <div className={styles.services_first}>
                    <div className={styles.services_first_image}>
                    <img src={require(`../Images/oldgold.png`)} alt="free try at home" />
                    </div>
                    <h4 className={styles.services_h4} >Old Gold Exchange</h4>
                    <p className={styles.services_para}>It can be any gold jewellery</p>
                    <button className={styles.services_button}>Find Store</button>
                </div>
                <div className={styles.services_first}>
                    <div className={styles.services_first_image}>
                    <img src={require(`../Images/buyonline.png`)} alt="free try at home" />
                    </div>
                    <h4 className={styles.services_h4} >Buy Online,Pick At Store</h4>
                    <p className={styles.services_para}>Save time, pickup and go</p>
                    <button className={styles.services_button}>Find Store</button>
                </div>
                <div className={styles.services_first}>
                    <div className={styles.services_first_image}>
                    <img src={require(`../Images/instore.png`)} alt="free try at home" />
                    </div>
                    <h4 className={styles.services_h4} >In-Store Customisation</h4>
                    <p className={styles.services_para}>Made-to-order and Personalised for you</p>
                    <button className={styles.services_button}>Find Store</button>
                </div>
            </div>
        </div>
    )}