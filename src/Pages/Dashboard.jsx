import { useEffect, useState } from "react"
import DashboardBox from "../Components/DashboardBox"
import Sidebar from "../Layout/Sidebar"
import { getData } from "../Config/FirebaseMethods"
import MyLoader from "../Components/MyLoader"
import { Col, Row } from "react-bootstrap"
import { PiStudentBold, PiBooks, PiExam } from "react-icons/pi";
import { FaChalkboardTeacher, 
  // FaMoneyCheck,
   FaRegMoneyBillAlt, FaQuestion } from 'react-icons/fa';
import { GiMoneyStack } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si"; 
import BarChartComp from "../Components/BarChartComp"
import PieChartComp from "../Components/PirChartComp"

function Dashboard() {
  // const [loader, setLoader] = useState(false)
  // const [allStudentsData, setAllStudentsData] = useState(false)
  // const [allTeachersData, setAllTeachersData] = useState(false)
  // const [allClassesData, setAllClassesData] = useState(false)
  // const [allSubjectsData, setAllSubjectsData] = useState(false)
  // const [allExamsData, setAllExamsData] = useState(false)
  // const [profitCalcMonth, setProfitCalcMonth] = useState(0)
  // // const [profitCalcYear, setProfitCalcY(false)
  // const [feesUnpaid, setFeesUnpaid] = useState(false)
  // const fetchData = () => {
  //   setLoader(true)
  //   getData("Students").then((res) => {
  //     setAllStudentsData(res)
  //     setLoader(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoader(false)
  //   })
  // }

  // const fetchTeachersData = () => {
  //   setLoader(true)
  //   getData("Teachers").then((res) => {
  //     setAllTeachersData(res)
  //     setLoader(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoader(false)
  //   })
  // }

  // const fetchClassesData = () => {
  //   setLoader(true)
  //   getData("Classes").then((res) => {
  //     setAllClassesData(res)
  //     setLoader(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoader(false)
  //   })
  // }

  // const fetchSubjectsData = () => {
  //   setLoader(true)
  //   getData("Subjects").then((res) => {
  //     setAllSubjectsData(res)
  //     setLoader(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoader(false)
  //   })
  // }

  // const fetchExamsData = () => {
  //   setLoader(true)
  //   getData("Exams").then((res) => {
  //     setAllExamsData([...res.filter((item)=>item.examStatus === "Scheduled")])
  //     setLoader(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoader(false)
  //   })
  // }

  // useEffect(() => {
  //   fetchData();
  //   fetchTeachersData();
  //   fetchClassesData();
  //   fetchSubjectsData();
  //   fetchExamsData();
  // }, [])

  // const year = new Date().getFullYear()
  // const month = new Date().toLocaleString('default', { month: 'long' });
  // useEffect(() => {
  //   if (allStudentsData.length) {
  //     // Calculate monthly profit
  //     const paidStudents = allStudentsData.filter((item) => {
  //       let feeExists = item.FeeDetails && item.FeeDetails[year] && item.FeeDetails[year][month];
  //       return feeExists && item.FeeDetails[year][month] === "Paid";
  //     });
  //     const totalFees = paidStudents.reduce((sum, item) => {
  //       return sum + (parseFloat(item.StudentFees) || 0);
  //     }, 0);
  //     setProfitCalcMonth(totalFees);

  //     // CHECK FEES PAID STUDENTS THIS MONTH
  //     const feesPaidThisMonth = allStudentsData.filter((student) => {
  //       const feeDetails = student.FeeDetails && student.FeeDetails[year] && student.FeeDetails[year][month];
  //       return feeDetails === "Paid";
  //     }).length;
  //     setFeesPaid(feesPaidThisMonth)

  //     // CHECK FEES UNPAID STUDENTS THIS MONTH
  //     const feesUnpaidThisMonth = allStudentsData.filter((student) => {
  //       const feeDetails = student.FeeDetails && student.FeeDetails[year] && student.FeeDetails[year][month];
  //       return feeDetails === "Unpaid";
  //     }).length;
  //     setFeesUnpaid(feesUnpaidThisMonth)

  //     // Calculate yearly profit
  //     // const paidStudentsYear = allStudentsData.filter((item: any) => {
  //     //   let feeExists = item.FeeDetails && item.FeeDetails[year];
  //     //   if (feeExists) {
  //     //     const monthsPaid = Object.keys(item.FeeDetails[year]).filter((m: string) => item.FeeDetails[year][m] === "Paid");
  //     //     return monthsPaid.length > 0;
  //     //   }
  //     //   return false;
  //     // });

  //     // const totalFeesYear = paidStudentsYear.reduce((sum: number, item: any) => {
  //     //   return sum + (parseFloat(item.StudentFees) || 0);
  //     // }, 0);
  //     // setProfitCalcYear(totalFeesYear);
  //   }
  // }, [allStudentsData]);

  // const Boxes = [
  //   {
  //     title: "Total Students",
  //     count: allStudentsData.length,
  //     bgColor: "#f39c1a",
  //     color: "white",
  //     icon: <PiStudentBold />
  //   },
  //   {
  //     title: "Total Teachers",
  //     count: allTeachersData.length,
  //     bgColor: "#01beea",
  //     color: "white",
  //     icon: <FaChalkboardTeacher />
  //   },
  //   {
  //     title: "Total Classes",
  //     count: allClassesData.length,
  //     bgColor: "#0272af",
  //     color: "white",
  //     icon: <SiGoogleclassroom />
  //   },
  //   {
  //     title: "Total Subjects",
  //     count: allSubjectsData.length,
  //     bgColor: "#f39c1a",
  //     color: "white",
  //     icon: <PiBooks />
  //   },
  //   {
  //     title: "Total Income This Month",
  //     count: `${profitCalcMonth}/-`,
  //     bgColor: "#01a55b",
  //     color: "white",
  //     // icon: <FaMoneyCheck />
  //     icon: <GiMoneyStack />
  //   },
  //   // {
  //   //   title: "Total Profit This Year",
  //   //   count: `${profitCalcYear}/-`,
  //   //   bgColor: "#0272af",
  //   //   color: "white",
  //   //   icon: <GiMoneyStack />
  //   // },
  //   {
  //     title: "Upcoming Exams",
  //     count: allExamsData.length,
  //     bgColor: "#0272af",
  //     color: "white",
  //     icon: <PiExam />
  //   },
  //   // {
  //   //   title: "Students Paid (This Month)",
  //   //   count: feesPaid,
  //   //   bgColor: "#01a55b",
  //   //   color: "white",
  //   //   icon: <FaRegMoneyBillAlt />
  //   // },
  //   {
  //     title: "Students Unpaid (This Month)",
  //     count: feesUnpaid,
  //     bgColor: "#01beea",
  //     color: "white",
  //     icon: <FaQuestion />
  //   },
  // ]

  const content = () => {
    return (
      <>
        {/* <div className="container-fluid p-3">
            <h2 className="fs-4 p-2 mb-3 bg-white rounded">Admin Dashboard</h2>
          {loader ? <MyLoader /> : allStudentsData && allTeachersData && allClassesData && allSubjectsData && (
            <>
              <Row className="row-gap-4 rounded bg-white py-3">
                {Boxes.map((item, index) => {
                  return (
                    <Col md={12} lg={6} xl={3} key={index} className="d-flex flex-column justify-content-center">
                      <DashboardBox titleName={item.title} count={item.count} icon={item.icon} bgColor={item.bgColor} color={item.color} className="flex-fill" />
                    </Col>
                  )
                })}
              </Row>
              <Row className="mt-3">
                <Col md={12} lg={8} className="m-0 p-0">
                  <div className="bg-white rounded">
                    <BarChartComp allStudentsData={allStudentsData} />
                  </div>
                </Col>
                <Col md={12} lg={4} className="pe-0">
                  <div className="bg-white d-flex align-items-start flex-column h-100 justify-center-start rounded">
                  <h2 className="pt-2 ps-2">All Students</h2>
                    <PieChartComp allStudentsData={allStudentsData} />
                  </div>
                </Col>
              </Row>
            </>
          )}
        </div> */}
      </>
    )
  }

  return (
    <>
      <Sidebar element={content()} breadcrumbLink="Admin" breadcrumbNestedLink="Dashboard" pageName="Admin Dashboard" />
    </>
  )
}

export default Dashboard
