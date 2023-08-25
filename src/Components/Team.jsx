/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Team.module.css"
import arpita from "../Images/Arpita.jpeg"
import loria from "../Images/Loria.jpeg"
import manu from "../Images/manu.JPG"
import girish from "../Images/Girish.jpeg"
import khushi1 from "../Images/khushi1.jpeg"
import khushi2 from "../Images/khushi2.jpeg"
import swasti from "../Images/swasti.jpg"
import logo from "../Images/logo1.png"
// import video from "./Images/video.mp4"
export const  Team = () => {
    // let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
        <div className={styles.body}>
          

            <div class={styles.container} style={{display:"grid",textAlign:"center"}}>
            
        <div className={styles.loria}>
            <img class={styles.logom} src={logo} alt="logo" width="350px"/>
        </div>
        <h2 style={{fontFamily:"cursive"}} >Presents</h2>
        <h3 style={{fontFamily:"cursive"}} >Team</h3>
        <br />
        <h1 class={styles.team} > ˂ CODE CRAFTERS ∕˃ </h1>
        <div class={styles.lead} style={{textAlign: "center", marginLeft: "550px"}}>
            <div class={styles.card} >
                <div class={styles.content} >
                    <div class={styles.imgBx} >
                        <img src={loria}alt="" />
                    </div>
                    <div class={styles.contentBx}>
                        <h4>Loria</h4>
                        <h5>Team Leader</h5>
                    </div>
                    <div class={styles.sci}>
                        <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                        <a href="https://github.com/GartiaLoria/caratlane_clone"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    <div class={styles.container}>
        <div class={styles.card}>
            <div class={styles.content}>
                <div class={styles.imgBx}>
                    <img src={manu} alt=""/>
                </div>
                <div class={styles.contentBx}>
                    <h4>S.Manohar</h4>
                    <h5>Team Member</h5>
                </div>
                <div class={styles.sci}>
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class={styles.card}>
            <div class={styles.content}>
                <div class={styles.imgBx}>
                    <img src={arpita} alt=""/>
                </div>
                <div class={styles.contentBx}>
                    <h4>Arpita</h4>
                    <h5>Team Member</h5>
                </div>
                <div class={styles.sci}>
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class={styles.card}>
            <div class={styles.content}>
                <div class={styles.imgBx}>
                    <img src={girish} alt=""/>
                </div>
                <div class={styles.contentBx}>
                    <h4>Girish</h4>
                    <h5>Team Member</h5>
                </div>
                <div class={styles.sci}>
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        
        <div class={styles.card}>
            <div class={styles.content}>
                <div class={styles.imgBx}>
                    <img src={khushi1} alt=""/>
                </div>
                <div class={styles.contentBx}>
                    <h4>Khushi Thacker</h4>
                    <h5>Team Member</h5>
                </div>
                <div class={styles.sci}>
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class={styles.card}>
            <div class={styles.content}>
                <div class={styles.imgBx}>
                    <img src={khushi2} alt=""/>
                </div>
                <div class={styles.contentBx}>
                    <h4>Khushi Saloni</h4>
                    <h5>Team Member</h5>
                </div>
                <div class={styles.sci}>
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class={styles.card}>
            <div class={styles.content}>
                <div class={styles.imgBx}>
                    <img src={swasti} alt=""/>
                </div>
                <div class={styles.contentBx}>
                    <h4>Swasti</h4>
                    <h5>Team Member</h5>
                </div>
                <div class={styles.sci}>
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        

    </div>
    </div>
    
        </div>
    )
}

export default Team;