import { useEffect, useState } from "react"
import Sidebar from "../../Layout/Sidebar"
// import Grid from "../../Components/MyGrid"
import { getData, setData } from "../../Config/FirebaseMethods"
import MyLoader from "../../Components/MyLoader"
import {  Box, Grid, Paper, Typography } from "@mui/material"
import MyButton from "../../Components/MyButton"
import { Link, useNavigate } from "react-router-dom"
import FloatingInput from "../../Components/FloatingInput"
import { Col, Row } from "react-bootstrap"
import MySelect from "../../Components/MySelect"
import ConfirmModal from "../../Components/ConfirmModal"
import { toastGreen, toastRed } from "../../Components/My Toasts"
function FeePaymentStatus() {
    // const [loader, setLoader] = useState(false)
    // const [allStudentsData, setAllStudentsData] = useState(false)
    // const [filteredStudentsData, setFilteredStudentsData] = useState(false)
    // const [payIsOpen, setPayIsOpen] = useState(false)
    // const [studentObj, setStudentObj] = useState({})
    // const [rollSearch, setRollSearch] = useState("")
    // const [nameSearch, setNameSearch] = useState("")
    // const [classSearch, setClassSearch] = useState("")
    // const [feeSearch, setFeeSearch] = useState("All")
    // const navigate = useNavigate()

    // const fetchData = () => {
    //     setLoader(true)
    //     getData("Students").then((res) => {
    //         setAllStudentsData(res)
    //         setLoader(false)
    //     }).catch((err) => {
    //         console.log(err)
    //         setLoader(false)
    //     })
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const handleCloseModal = () => {
    //     setPayIsOpen(false);
    //     setStudentObj({});
    // };

    // const handlePay = () => {
    //     console.log(studentObj)
    //     const year = new Date().getFullYear()
    //     const month = new Date().toLocaleString('default', { month: 'long' });
    //     const finalObj = {
    //         ...studentObj,
    //         FeeDetails: {
    //             ...studentObj.FeeDetails,
    //             [year]: {
    //                 ...studentObj.FeeDetails?.[year],
    //                 [month]: "Paid"
    //             }
    //         }
    //     }
    //     console.log(finalObj)
    //     setData("Students", finalObj).then(() => {
    //         handleCloseModal()
    //         fetchData()
    //         toastGreen("Payment successfully processed!")
    //     }).catch((err) => {
    //         console.log(err)
    //         handleCloseModal()
    //         toastRed("Payment failed. Please try again.")
    //     })
    // }


    // // Search Mechanism
    // useEffect(() => {
    //     let filteredData = allStudentsData;

    //     if (rollSearch !== "") {
    //         filteredData = filteredData.filter((item) => item.StudentRoll == rollSearch);
    //     }

    //     if (nameSearch !== "") {
    //         filteredData = filteredData.filter((item) => item.StudentFirstName.toLowerCase().includes(nameSearch.toLowerCase()) || item.StudentLastName.toLowerCase().includes(nameSearch.toLowerCase()));
    //     }

    //     if (classSearch !== "") {
    //         filteredData = filteredData.filter((item) => item.StudentClass.toLowerCase().includes(classSearch.toLowerCase()));
    //     }

    //     if (feeSearch !== "All") {
    //         const year = new Date().getFullYear();
    //         const month = new Date().toLocaleString('default', { month: 'long' });

    //         filteredData = filteredData.filter((item) => {
    //             const feeDetailsExist = item.FeeDetails && item.FeeDetails[year] && item.FeeDetails[year][month];
    //             if (feeSearch === "Not Generated") {
    //                 return !feeDetailsExist;
    //             }
    //             return feeDetailsExist && item.FeeDetails[year][month] === feeSearch;
    //         });
    //     }

    //     setFilteredStudentsData(filteredData);
    // }, [rollSearch, nameSearch, classSearch, feeSearch, allStudentsData]);

    // const renderActions = (row) => (
    //     <>
    //         <Tooltip title="Pay" placement="top">
    //             <span>
    //                 <MyButton bgColor="var(--green)" hoverBgColor="#00943e" className="p-0 px-1 pt-1 me-2" btnValue={<lord-icon src="https://cdn.lordicon.com/lxizbtuq.json" style={{ width: "37px", height: "37px" }} trigger="hover" />} onClick={() => { setStudentObj(row); setPayIsOpen(true) }} />
    //             </span>
    //         </Tooltip>

    //         <Tooltip title="View Details" placement="top">
    //             <span>
    //                 <MyButton bgColor="var(--orange)" hoverBgColor="#b87a00" className="p-0 px-1 pt-1" btnValue={<lord-icon src="https://cdn.lordicon.com/anqzffqz.json" trigger="hover" style={{ width: "37px", height: "37px" }} />} onClick={() => { navigate(`/students/${row.id}`) }} />
    //             </span>
    //         </Tooltip>
    //     </>
    // );
    const content = () => {
        return (
            <>
              <Box>

<Box sx={{display:"flex",justifyContent:"center",fontSize:35}}>
  Fee Structure
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
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 1
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 500
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 6000
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>


  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 2
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 600
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 7200
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>

  
  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 3
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 700
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 8400
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>



  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 4
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 800
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 9600
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>




  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 5
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 900
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 10800
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>




  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 6
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 1000
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 12000
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>



  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 7
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 1100
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 13200
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>



  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 8
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 1200
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 14400
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>




  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 9
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 1300
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 15600
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>



  <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    
    <Paper
    elevation={2}
      sx={{
        marginTop:2,
        textAlign: 'center',
        p: 2,
        // border: '1px solid #ccc',
        // backgroundColor:"white",
        borderRadius: '8px',
        width: 900
      }}
    >
      <Typography style={{ fontFamily: 'revert' }} variant="h5" gutterBottom>
        Class 10
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Monthly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ color: "darkgreen", fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 1400
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Typography style={{ fontFamily: 'cursive', marginLeft: 20 }} variant="body1">
            Yearly Fees
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography style={{ fontFamily: 'cursive', marginRight: 20 }} variant="body1">
            Rs 16800
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Box>



</Box>
            </>
        )
    }
    // const year = new Date().getFullYear();
    // const month = new Date().toLocaleString('default', { month: 'long' });
    // const feeDetailsExist = studentObj.FeeDetails && studentObj.FeeDetails[year] && studentObj.FeeDetails[year][month];
    // console.log(feeDetailsExist)
    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Fees" pageName="Fee Payment Status" breadcrumbNestedLink="Fee Submission" />
{/* 
            <ConfirmModal title={feeDetailsExist ? (feeDetailsExist == "Unpaid" ? `Are you sure you want to proceed with the payment of ${studentObj.StudentFees}/- for ${studentObj.StudentFirstName} ${studentObj.StudentLastName}'s fee?` : ` ${studentObj.StudentFirstName} ${studentObj.StudentLastName}'s fee is already paid`) : <>Generate the fee to proceed <Link to="/fees/generateFee">Generate Fee Here</Link></>}
                icon={(<lord-icon src="https://cdn.lordicon.com/jtiihjyw.json" trigger="hover" style={{ width: "120px", height: "120px" }} />)}
                onClose={handleCloseModal} isOpen={payIsOpen}
                body={(
                    <>
                        {feeDetailsExist ? ( feeDetailsExist == "Unpaid" ?
                            <MyButton bgColor="var(--green)" hoverBgColor="#00943e" className="me-4" btnValue="Yes, Proceed" onClick={() => { handlePay() }} />
                            :
                            <MyButton bgColor="var(--green)" hoverBgColor="#00943e" className="me-4" btnValue="Close" onClick={handleCloseModal} />
                        ) : (
                            <MyButton bgColor="var(--green)" hoverBgColor="#00943e" className="me-4" btnValue="Generate Fee" onClick={() => { navigate("/fees/generateFee") }} />
                        )}
                        {feeDetailsExist == "Paid" ? null : <MyButton bgColor="var(--red)" hoverBgColor="rgb(139, 0, 0)" btnValue="No, Cancel" onClick={handleCloseModal} />}
                    </>
                )} /> */}
        </>
    )
}

export default FeePaymentStatus
