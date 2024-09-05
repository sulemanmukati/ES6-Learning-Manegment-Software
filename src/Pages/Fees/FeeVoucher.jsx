import { useEffect, useRef, useState } from "react";
import Sidebar from "../../Layout/Sidebar"
import { getData } from "../../Config/FirebaseMethods";
import MySelect from "../../Components/MySelect";
import MyButton from "../../Components/MyButton";
import { Col, Row } from "react-bootstrap";
import MyLoader from "../../Components/MyLoader";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FeeVoucher() {
    const navigate = useNavigate()
    // const [loader, setLoader] = useState(false)
    // const [allClasses, setAllClasses] = useState<(false)
    // const [selectedClass, setSelectedClass] = useState("")
    // const [classStudents, setClassStudents] = useState(false)
    // const [classesName, setClassesName] = useState([])

    // const fetchClassData = () => {
    //     setLoader(true)
    //     getData("Classes").then((res) => {
    //         setLoader(false)
    //         setAllClasses(res)
    //     }).catch((err) => {
    //         console.log(err)
    //         setLoader(false)
    //     })
    // }

    // useEffect(() => {
    //     fetchClassData()
    // }, [])

    // useEffect(() => {
    //     if (allClasses) {
    //         if (classesName.length !== allClasses.length) {
    //             setClassesName([...allClasses.map((item) => item.ClassName)]);
    //         }
    //     }
    // }, [allClasses])

    // const handleSave = (e) => {
    //     e.preventDefault();
    //     setLoader(true)
    //     getData("Students")
    //         .then((res) => {
    //             setClassStudents(res.filter((item) => item.StudentClass === selectedClass));
    //             setLoader(false)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setLoader(false)
    //         });
    // };

    // const FeeVoucherComp = () => {
    //     const year = new Date().getFullYear();
    //     const month = new Date().toLocaleString('default', { month: 'long' });
    //     return (
    //         loader ? <MyLoader /> : classStudents &&
    //             <div>
    //                 {classStudents.map((item, index) => {
    //                     return (
    //                         <>
    //                             <Row key={index}>
    //                                 {["Parent Copy", "School Copy"].map((a) => (
    //                                     <Col lg={6}>
    //                                         <div className="fs-5 position-relative mb-4 p-4 border-black border">
    //                                             <h1 className="fs-2 text-center mb-4 text-decoration-underline">Fee Voucher</h1>
    //                                             <span className="position-absolute end-0 top-0 px-2 py-1 bg-bodyGray border">{a}</span>
    //                                             <div className="border row">
    //                                                 <span className="col-3">Roll</span>
    //                                                 <span className="col-3 border-start">{item.StudentRoll}</span>
    //                                                 <span className="col-3 border-start border-3">Class</span>
    //                                                 <span className="col-3 border-start">{item.StudentClass}</span>
    //                                             </div>
    //                                             <div className="border row">
    //                                                 <span className="col-4">First Name</span>
    //                                                 <span className="col-8 border-start">{item.StudentFirstName}</span>
    //                                             </div>
    //                                             <div className="border row">
    //                                                 <span className="col-4">Father Name</span>
    //                                                 <span className="col-8 border-start">{item.StudentFatherName}</span>
    //                                             </div>
    //                                             <div className="border row">
    //                                                 <span className="col-4">Month</span>
    //                                                 <span className="col-8 border-start">{month} {year}</span>
    //                                             </div>
    //                                             <div className="border row">
    //                                                 <span className="col-4">Fee Status</span>
    //                                                 <span className="col-8 border-start">{item.FeeDetails[year] && item.FeeDetails[year][month] ? item.FeeDetails[year][month] : 'Unpaid'}</span>
    //                                             </div>
    //                                             <div className="border row">
    //                                                 <span className="col-4">Amount</span>
    //                                                 <span className="col-8 border-start">{item.StudentFees}</span>
    //                                             </div>
    //                                             <div className="px-3 mt-2 text-center">
    //                                                 <span className="fw-semibold fs-6">*This is computer generated fee voucher, No manual corrections will be accepted</span>
    //                                             </div>
    //                                             <hr className="my-1" />
    //                                             <div className="d-flex justify-content-between mt-5">
    //                                                 <span>Recieved By</span> <span style={{ fontFamily: "sans-serif" }}> ________________________</span>
    //                                             </div>
    //                                         </div>
    //                                     </Col>
    //                                 ))}
    //                             </Row>
    //                         </>
    //                     )
    //                 })}
    //             </div>
    //     );
    // };



    // const PrintFeeVoucher = () => {
    //     const voucherRef = useRef<any>(null);

    //     const handlePrint = () => {
    //         const printContents = voucherRef.current.innerHTML;
    //         const originalContents = document.body.innerHTML;

    //         document.body.innerHTML = printContents;
    //         window.print();
    //         document.body.innerHTML = originalContents;
    //     };

    //     return (
    //         <div>
    //             {classStudents && <MyButton bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="me-2 mb-3" btnValue="Print" onClick={handlePrint} />}
    //             <div ref={voucherRef}>
    //                 <FeeVoucherComp />
    //             </div>
    //         </div>
    //     );
    // };

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
          // border: '1px solid #ccc',
          // backgroundColor:"white",
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
