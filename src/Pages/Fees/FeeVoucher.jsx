
import Sidebar from "../../Layout/Sidebar"

import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FeeVoucher() {
    const navigate = useNavigate()

    const content = () => {
        return (
            <>
    <Box>
<Box sx={{display:"flex",justifyContent:"center",fontSize:35}}>
    Fee Voucher
  </Box>

<Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
    
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 1
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
             Class 1
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 500
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 6000
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>


    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 2
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 2
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 600
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 7200
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 3
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 3
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 700
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 8400
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 4
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
            Class 4
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 800
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 9600
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 5
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 5
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 900
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 10800
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 6
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 6
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 1000
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 12000
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 7
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 7
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 1100
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 13200
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 8
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 8
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 1200
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 14400
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 9
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 9
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 1300
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 15600
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>



    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:6
      }}
    >
      
      <Paper
      elevation={2}
        sx={{

          textAlign: 'center',
          p: 2,
          // border: '1px solid #ccc',
          // backgroundColor:"white",
          borderRadius: '8px',
          width: 900,
          height:280
        }}
      >
        <Typography style={{ fontFamily: 'revert',fontFamily:"fantasy", fontSize:20 }}  gutterBottom>
          Fee Voucher-Class 10
        </Typography>
        
        <Grid container spacing={2}>

        <Grid item xs={6} style={{ textAlign: 'left',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20,fontSize:18 }} variant="body1">
              Class
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'right',marginTop:30 }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20, fontSize:18 }} variant="body1">
              Class 10
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20, fontSize:18 }} variant="body1">
              Monthly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 1400
            </Typography>
          </Grid>

          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <Typography style={{ fontFamily: 'cursive', marginLeft: 20 , fontSize:18 }} variant="body1">
              Yearly Fees
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography style={{ fontFamily: 'cursive', marginRight: 20 , fontSize:18 }} variant="body1">
              Rs 16800
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{backgroundColor:"green"}} onClick={()=>navigate('/dashboard/fees/generateFee')}>
          PayNow
        </Button>
      </Paper>
    </Box>


</Box>
            </>
        )
    }

    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Fees" pageName="Fee Voucher" breadcrumbNestedLink="Fee Submission" />
        </>
    )
}

export default FeeVoucher
