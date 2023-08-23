import logo from"../Images/logo.jpg";
import styles from './ty.module.css';
export const Ty = () =>{
    return(
        <div className={styles.ty25}>
            <img className = {styles.t25}src={logo} alt="" /><br/>
            <div className ={styles.t30}>
        <h1><b>Your payment has been received.</b><br></br><b>Thank you for Shopping with us!!</b></h1>
        </div>
        </div>
    );
};