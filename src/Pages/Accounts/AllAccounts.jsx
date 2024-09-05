import { useEffect, useState } from 'react'
import { getData } from '../../Config/FirebaseMethods'
import Sidebar from '../../Layout/Sidebar'
import MyLoader from '../../Components/MyLoader'
import { Col, Row } from 'react-bootstrap'

function AllAccounts() {
    // const [allAccountsData, setAllAccountsData] = useState(false)
    // const [currentUser, setCurrentUser] = useState(false)
    // const [loader, setLoader] = useState(false)
    // const [currentObj, setCurrentObj] = useState(false)

    // const fetchData = () => {
    //     setLoader(true)
    //     getData("Users").then((res) => {
    //         setAllAccountsData(res)
    //         setLoader(false)
    //     }).catch((err) => {
    //         console.log(err)
    //         setLoader(false)
    //     })
    // }

    // const fetchCurrentData = () => {
    //     const uid = localStorage.getItem("USERID")
    //     setLoader(true)
    //     getData("Users", uid).then((res) => {
    //         setCurrentUser(res)
    //         setCurrentObj(res)
    //         setLoader(false)
    //     }).catch((err) => {
    //         console.log(err)
    //         setLoader(false)
    //     })
    // }
    // useEffect(() => {
    //     fetchData();
    //     fetchCurrentData();
    // }, [])

    // useEffect(() => {
    //     console.log(allAccountsData)
    // }, [allAccountsData])

    // const UserDetails = [
    //     {
    //         label: "ID",
    //         objName: "id"
    //     },
    //     {
    //         label: "User Name",
    //         objName: "Username"
    //     },
    //     {
    //         label: "Email",
    //         objName: "Email"
    //     },
    //     currentUser.UserType == "Admin" && {
    //         label: "Password",
    //         objName: "Password"
    //     }
    // ]

    const content = () => {
        return (
            <>
            {/* {loader && <MyLoader />}
                <div className="container-fluid bg-white p-3 pb-5 rounded">
                    <h2 className='fs-4 mb-3'>All Accounts Data</h2>
                    <Row>
                        <Col lg={5}>
                            <div className='mt-3 d-flex justify-content-center align-items-start flex-column gap-2'>
                                <h3 className='fs-4 mb-0'>Select Account</h3>
                                {allAccountsData && [...allAccountsData].reverse().map((item) => {
                                    return (
                                        <div className={`px-5 py-3 w-100 rounded AccountsBox cursor-pointer ${currentObj.id === item.id ? 'bg-active' : 'bg-bodyGray'}`} onClick={() => setCurrentObj(item)} key={item.id}>
                                            <h3 className='fs-4'>{item.Username}</h3>
                                            <h4 className='fs-5 text-muted'>{item.UserType}</h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col lg={7}>
                            {currentObj && (
                                <div className='mt-3 p-0'>
                                    <h3 className='fs-4 mb-0'>Account Details</h3>
                                    <div className='mt-2 bg-bodyGray rounded p-3 px-4'>
                                        <tbody>
                                            {UserDetails.map((item,index) => {
                                                return (
                                                    <tr key={index}>
                                                        {item && (
                                                            <>
                                                                <td className='py-2 fs-5 pe-5'> {item.label}:</td>
                                                                <td className='fw-bold fs-5 py-2 text-black'>{currentObj[item.objName]} {item.objName === "Password" && <span className='text-muted fw-light ms-2'>(Only Admins can see passwords)</span>}</td>
                                                            </>
                                                        )}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                </div> */}
            </>
        )
    }

    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Accounts" pageName="Accounts" />
        </>
    )
}

export default AllAccounts