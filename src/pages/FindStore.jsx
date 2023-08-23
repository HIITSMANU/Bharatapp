import {Stack,Button, color} from "@chakra-ui/react"
import {Services} from "./Services"
import { Cities } from "./Cities"
import styles from "./AppStyle.module.css"
export const FindStore=()=>{
    return(
        <>
        
    <div className={styles.bannermain}>
        <div className={styles.grid_container}>
            <div className={styles.grid_item}>
                <p>Find A Store Near You</p>
            </div>
            <div className={styles.grid_item_2}>
                <p>Find a CaratLane store in your locality,the CaratLane family is growing everyday</p>
            </div>
            <div className={styles.pincode_div}>
                <span className={styles.pin}></span>
                <input type='text' placeholder='Enter pincode or city' name='location' />
                <Stack direction='row' spacing={6} align='end'>
                    <Button colorScheme="purple" variant='ghost'>
                         Locate Me
                    </Button>
                </Stack>
            </div>
        </div>
    </div>
    <div className={styles.container}>
    <Cities/>
    <Services/>
    <div className={styles.emptyspace}>
        
    </div>
    </div>
    </>
    )
    
}