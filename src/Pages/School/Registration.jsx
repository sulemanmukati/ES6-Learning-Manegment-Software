import { useEffect, useState } from "react";
import Sidebar from "../../Layout/Sidebar"
import FloatingInput from "../../Components/FloatingInput";
import { Row, Col } from "react-bootstrap";
import MyButton from "../../Components/MyButton";
import MyLoader from "../../Components/MyLoader";

function Registration() {
    const [pageLoader, setPageLoader] = useState(false);
    const [isSchoolRegistered, setIsSchoolRegistered] = useState(false)
    const [schoolData, setSchoolData] = useState({
        schoolName: '',
        schoolLogo: '',
        schoolAddress: '',
        phoneNumber: '',
        schoolEmail: '',
        website: '',
        principalName: '',
        principalEmail: '',
        principalPhone: '',
        schoolTimings: '',
    });

    const fetchData = () => {
        setPageLoader(true)
        getData("School").then((res) => {
            setIsSchoolRegistered(res);
            setPageLoader(false)
        }).catch((err) => {
            console.log(err)
            setPageLoader(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSave = (e) => {
        e.preventDefault();
   
    };

   
    const content = () => {
        return (
            <>
                <div className="container-fluid bg-white p-3 rounded">
                    {pageLoader ? <MyLoader /> : null}
                    {isSchoolRegistered ? (
                        <div>
                            <div className="text-center">
                                <h1 className="fs-2">School Already has been registered!</h1>
                                <MyButton btnValue={(<div className="d-flex align-items-center gap-2">Reset the previous data and register again <lord-icon src="https://cdn.lordicon.com/abaxrbtq.json" trigger="hover" style={{ width: "30px", height: "30px" }} /></div>)} bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="px-3 py-2" onClick={handleDelete} />
                            </div>
                            <hr />
                            <div className="mt-4">
                                <h2 className="fs-3 mb-3">School Details</h2>
                                <Row>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">School Name:</strong> {isSchoolRegistered[0].schoolName}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">School Address:</strong> {isSchoolRegistered[0].schoolAddress}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">Phone Number:</strong> {isSchoolRegistered[0].phoneNumber}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">Email:</strong> {isSchoolRegistered[0].schoolEmail}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">Website:</strong> <a className="col-6" href={isSchoolRegistered[0].website}>{isSchoolRegistered[0].website}</a></p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">Principal Name:</strong> {isSchoolRegistered[0].principalName}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">Principal Email:</strong> {isSchoolRegistered[0].principalEmail}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">Principal Phone:</strong> {isSchoolRegistered[0].principalPhone}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails border-bottom pb-2">
                                        <p className="row"><strong className="col-6">School Timings:</strong> {isSchoolRegistered[0].schoolTimings}</p>
                                    </Col>
                                    <Col md={12} className="pt-4 schoolRegisteredDetails pb-2">
                                        <p className="row"><strong className="col-6">School Logo:</strong> {isSchoolRegistered[0].schoolLogo}</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className='fs-4 mb-3'>Register Your School</h2>
                            <form onSubmit={handleSave}>
                                <Row className='mb-3'>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="School Name*" required={true} onChange={(e) => setSchoolData({ ...schoolData, schoolName: e.target.value })} placeholder="Enter School Name" myValue={schoolData.schoolName} type="text" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="School Logo*" required={true} onChange={(e) => setSchoolData({ ...schoolData, schoolLogo: e.target.value })} placeholder="Upload School Logo" myValue={schoolData.schoolLogo} type="file" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="School Address*" required={true} onChange={(e) => setSchoolData({ ...schoolData, schoolAddress: e.target.value })} placeholder="Enter School Address" myValue={schoolData.schoolAddress} type="text" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="Phone Number*" required={true} onChange={(e) => setSchoolData({ ...schoolData, phoneNumber: e.target.value })} placeholder="Enter Phone Number" myValue={schoolData.phoneNumber} type="text" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="School Email*" required={true} onChange={(e) => setSchoolData({ ...schoolData, schoolEmail: e.target.value })} placeholder="Enter School Email" myValue={schoolData.schoolEmail} type="email" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="Website" onChange={(e) => setSchoolData({ ...schoolData, website: e.target.value })} placeholder="Enter Website" myValue={schoolData.website} type="text" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="Principal Name*" required={true} onChange={(e) => setSchoolData({ ...schoolData, principalName: e.target.value })} placeholder="Enter Principal Name" myValue={schoolData.principalName} type="text" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="Principal Email*" required={true} onChange={(e) => setSchoolData({ ...schoolData, principalEmail: e.target.value })} placeholder="Enter Principal Email" myValue={schoolData.principalEmail} type="email" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="Principal Phone*" required={true} onChange={(e) => setSchoolData({ ...schoolData, principalPhone: e.target.value })} placeholder="Enter Principal Phone" myValue={schoolData.principalPhone} type="text" />
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3">
                                        <FloatingInput label="School Timings" onChange={(e) => setSchoolData({ ...schoolData, schoolTimings: e.target.value })} placeholder="Enter School Timings" myValue={schoolData.schoolTimings} type="text" />
                                    </Col>
                                </Row>
                                <div className='d-flex gap-4'>
                              
                                    <MyButton width={'100%'} btnValue={'save'} />
                                    {/* <MyButton btnValue={(<div className="d-flex align-items-center gap-2">Reset <lord-icon src="https://cdn.lordicon.com/abaxrbtq.json" trigger="hover" style={{ width: "30px", height: "30px" }} /></div>)} bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="px-4 py-3" onClick={handleReset} /> */}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </>
        )
    }


    return (
        <>
            <Sidebar element={content()} breadcrumbLink="School" pageName="School Registration" breadcrumbNestedLink="School Registration" />
        </>
    )
}

export default Registration
