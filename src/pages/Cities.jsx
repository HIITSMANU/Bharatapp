
import styles from "../pages/AppStyle.module.css"
export const Cities=()=>{
    return(
        <div className={styles.city_main}>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                <img src={require('../Images/bangalore.png')}/>
                </div>
                <h4 className={styles.city_title}>Bangalore</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>12 Stores</p>
            </div>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                <img src={require('../Images/ahemdabad.png')}/>
                </div>
                <h4 className={styles.city_title}>Ahemdabad</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>10 Stores</p>
            </div>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                <img src={require('../Images/chennai.png')}/>
                </div>
                <h4 className={styles.city_title}>Chennai</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>20 Stores</p>
            </div>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                <img src={require('../Images/delhi.png')}/>  
                </div>
                <h4 className={styles.city_title}>Delhi</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>7 Stores</p>
            </div>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                <img src={require('../Images/kolkata.png')}/>
                </div>
                <h4 className={styles.city_title}>Kolkata</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>18 Stores</p>
            </div>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                    <img src={require('../Images/mumbai.png')}/>
                </div>
                <h4 className={styles.city_title}>Mumbai</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>18 Stores</p>
            </div>
            <div className={styles.city_div}>
                <div className={styles.city_photo}>
                    <img src={require('../Images/mumbai.png')}/>
                </div>
                <h4 className={styles.city_title}>Pune</h4>
                <div className={styles.city_margin}>
                </div>
               <p className={styles.stores_number}>18 Stores</p>
            </div>

        </div>
    )
}