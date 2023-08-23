import React from "react";
import styles from "./Adminindex.module.css"

export const Adminindex=() => {
    return(
        <div>
            <nav className={styles.adminnav}>
                <div className={styles.admintitle}>
                    <img className={styles.admin_logo} src={require(`../Images/logo1.png`)} alt="" />
                    <div className={styles.admintitle_text}>
                        <span>H</span><p>ello</p>
                    </div>
                    <div className={styles.admintitle_text}>
                        <span>A</span><p>dmin</p>
                    </div>
                </div>
                <div className={styles.admin_control_btns}>
                    <ul>
                        <li>
                            <a href="/alldata">Table of products</a>
                        </li>
                        <li>
                            <a href="/dash">Check stats</a>
                        </li>
                        <li>
                            <a href="/homepage">Visit site</a>
                        </li>
                        <li>
                            <a href="/login">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.admin_index_body}>
                <div className={styles.admintogglebtns}>
                    <div className={styles.admin_button1}>
                        <a href="/prodform">Add products</a>
                    </div>
                    <div className={styles.admin_button2}>
                        <a href="/prodata">Product edits</a>
                    </div>
                </div>
            </div>
        </div>
    )
}