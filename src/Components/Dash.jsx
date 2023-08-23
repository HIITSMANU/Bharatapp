import styles from  "./Dash.module.css"
import rev from "../Images/revenue.png"
import stat from "../Images/stat.png"
import geo from "../Images/geo.png"
// import users from "../Components/Images/users.png"
import logo from "../Images/logo1.png"
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
  import { Avatar, AvatarBadge, AvatarGroup ,Stack} from '@chakra-ui/react'
export const Dash = ()=>{
    return (
        <div className={styles.mene}>
           {/*<img src={logo} width="250px" className={styles.logoso}/>*/} 
            <h1 style={{color:"white",fontSize:"40px"}}>WELCOME TO DASHBOARD</h1>
            <Stack direction='row' spacing={4}>
  <Avatar>
    <AvatarBadge boxSize='1.00em' bg='green.500' />
  </Avatar>

  {/* You can also change the borderColor and bg of the badge */}
  
  
</Stack>
            <div className={styles.stats}>
                
            <div className={styles.stat}>
                <h1 style={{fontSize:"30px",fontWeight:"bold"}}>Total Products   <span><CircularProgress value={40} color='green.400'>
  
</CircularProgress></span></h1>
                
                < br />
                <p className={styles.statvalue}></p>
                <StatGroup>
  <Stat>
    <StatLabel>UP</StatLabel>
    <StatNumber>20000</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>DOWN</StatLabel>
    <StatNumber>25</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
            </div>
            <div className={styles.stat}>
                <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Total Revenue   <span><CircularProgress value={60} color='green.400'>
  
  </CircularProgress></span></h1>
                < br />
                <p className={styles.statvalue}></p>
                <StatGroup>
  <Stat>
    <StatLabel>UP</StatLabel>
    <StatNumber>₹38,68,180   </StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>
  < br />

  <Stat>
    <StatLabel>DOWN</StatLabel>
    <StatNumber>   -₹45000</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
            </div>
            <div className={styles.stat}>
                <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Total Users   <span><CircularProgress value={75} color='green.400'>
  
  </CircularProgress></span></h1>
                < br />
                <p className={styles.statvalue}></p>
                <StatGroup>
  <Stat>
    <StatLabel>UP</StatLabel>
    <StatNumber>30000</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>DOWN</StatLabel>
    <StatNumber>-75</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
            </div>
           
            <div className={styles.revenue}>
                <h1>Revenue Generated</h1>
                <p>₹38,68,180</p>
                <img src="https://www.researchgate.net/publication/338833908/figure/fig3/AS:851930817499137@1580127543078/Big-Data-market-size-revenue-forecast-worldwide-from-2011-to-2027-Source-The-Statistics.ppm" width="500px" height="400px" className={styles.hidebg}/>
            </div>
            <div className={styles.recent}>
                <h1>Recent Transactions</h1>
                <TableContainer>
            <Table variant='simple'>
                <TableCaption></TableCaption>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Date</Th>
                    <Th isNumeric>Price</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Gartia Loria</Td>
                    <Td>01-07-23</Td>
                    <Td isNumeric>₹1,50,000</Td>
                </Tr>
                <Tr>
                    <Td>Girish Bharadwaj</Td>
                    <Td>02-07-23</Td>
                    <Td isNumeric>₹1,00,000</Td>
                </Tr>
                <Tr>
                    <Td>S.Manohar</Td>
                    <Td>5-07-23</Td>
                    <Td isNumeric>₹1,50,000</Td>
                </Tr>
                <Tr>
                    <Td>Arpita Mishra</Td>
                    <Td>12-07-23</Td>
                    <Td isNumeric>₹80,000</Td>
                </Tr>
                <Tr>
                    <Td>Khushi Saloni</Td>
                    <Td>15-07-23</Td>
                    <Td isNumeric>₹70,000</Td>
                </Tr>
                <Tr>
                    <Td>Khushi Thacker</Td>
                    <Td>20-07-23</Td>
                    <Td isNumeric>₹1,50,000</Td>
                </Tr>
                <Tr>
                    <Td>Swasti Samal</Td>
                    <Td>23-07-23</Td>
                    <Td isNumeric>₹90,000</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    
                </Tr>
                </Tfoot>
            </Table>
            </TableContainer>
            </div>
           <div className={styles.imagestat}>
            
            <h1>Circular Revenue Stats</h1>
           <img src={rev} className={styles.hidebg} />
           
           </div>
    </div>
    < br />
    < br />
    <div style={{display:"flex"}}>
    <img className={styles.stut} src={stat} />
    <img className={styles.geos} src={geo} />
    <img src="https://images.ctfassets.net/dkgr2j75jrom/3t9kZUq4dNeOD2Q3kKUe5C/9e03a73c19c1b526100de3e7c359fcd7/vs-prior.png?w=899&h=662&q=50&fm=png" width="410px"/>
    </div>
        </div>
    
    )
}