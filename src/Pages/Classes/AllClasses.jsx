import { Tooltip } from "@mui/material";
import Sidebar from "../../Layout/Sidebar"
import { Col, Row } from "react-bootstrap";
import FloatingInput from "../../Components/FloatingInput";
import MyLoader from "../../Components/MyLoader";
import MyButton from "../../Components/MyButton";
import Grid from "../../Components/MyGrid";
import { useEffect, useState } from "react";
import { deleteData, getData, setData } from "../../Config/FirebaseMethods";
import { toastGreen, toastRed } from "../../Components/My Toasts";
import MyModal from "../../Components/MyModal";
import MySelect from "../../Components/MySelect";
import ConfirmModal from "../../Components/ConfirmModal";
import { useNavigate } from "react-router-dom";
import Tables from "../../Components/Tables";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import TablesClass from "../../Components/TableClass";

function AllClasses() {
    const [userData, setUserData] = useState([]);
    const navigate =useNavigate()
  
    
    useEffect(() => {
        getData();
      }, );
      
      //   Data get from firebase Firestore Database
      
      const getData = async () => {
        try {
          const arr = [];
          const getData = await getDocs(collection(db, "students"));
      
          getData.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
      
          setUserData(arr);
        } catch (error) {
          console.log(error);
        }
      };



    const content = () => {
        return (
            <> 
                 <div className="container">
        <div className="row">
          <div className=" col-sm-12">
            <div style={{width:'100%'}} className="card">
              <div className="card-header">
                <h3 className="card-title" style={{textAlign:'center'}}>All Students</h3>

                <MyButton onClick={()=>navigate('/dashboard/classes/addClass')} margin={20} float={"right"} btnValue={'ADD'}/>
                <TablesClass data={userData}/>

              
              </div>
            </div>
          </div>
        </div>
      </div>
               
            </>
        )
    }
    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Classes" pageName="All Classes" breadcrumbNestedLink="All Classes" />
{/* 
            <MyModal
                title="Edit Class Details"
                height="50vh"
                onClose={handleCloseModal}
                isOpen={editIsOpen}
                body={
                    <>
                        <form onSubmit={(e) => handleEdit(e)}>
                            <Row className="row-gap-2">
                                <Col md={12} lg={6}>
                                    <div style={{ height: "58px" }}>
                                        <FloatingInput
                                            label="Class Name"
                                            required={true}
                                            onChange={(e) =>
                                                seteditedClassObj({
                                                    ...editedClassObj,
                                                    ClassName: e.target.value,
                                                })
                                            }
                                            placeholder="Edit Class Name"
                                            myValue={getValue("ClassName")}
                                            type="text"
                                        />
                                    </div>
                                </Col>
                                <Col md={12} lg={6} className="mb-3">
                                    <div style={{ height: "58px" }}>
                                        <MySelect
                                            label="Select Class Teacher"
                                            required={true}
                                            defaultValue="Select Class Teacher"
                                            value={getValue("ClassTeacher")}
                                            onChange={(e) =>
                                                seteditedClassObj({
                                                    ...editedClassObj,
                                                    ClassTeacher: e.target.value,
                                                })
                                            }
                                            options={teachersName}
                                        />
                                    </div>
                                </Col>
                                <Col md={12} lg={6} className="mb-3">
                                    {
                                        allSubjectsData.length > 0 && allSubjectsData.map((item, index) => (
                                            <div key={index}>
                                                <label className="fs-5 me-2" htmlFor={`subject-${index}`}>{item.SubjectName}</label>
                                                <input
                                                    type="checkbox"
                                                    value={item.SubjectName}
                                                    checked={classObj.ClassSubjects && classObj.ClassSubjects.includes(item.SubjectName)}
                                                    onChange={() => handleCheckboxChange(item.SubjectName)}
                                                    id={`subject-${index}`}
                                                />
                                            </div>
                                        ))
                                    }
                                </Col>
                                <Col md={12} lg={6} className="mb-3">
                                    <div style={{ height: "58px" }}>
                                        <FloatingInput
                                            label="Code (Auto Generated)"
                                            disabled
                                            placeholder=""
                                            required={true}
                                            myValue={loader ? "Loading..." : classObj.ClassId}
                                            type="text"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <hr className="mt-4 mb-2" />
                            <div className="text-end" >
                                <MyButton bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="me-2" btnValue={(<div className="d-flex align-items-center gap-2">Save <lord-icon src="https://cdn.lordicon.com/dangivhk.json" trigger="hover" style={{ width: "37px", height: "37px" }} /></div>)} type="submit" />
                            </div>
                        </form>
                    </>
                }
                footer={
                    <div>
                        <MyButton
                            bgColor="var(--darkBlue)"
                            hoverBgColor="var(--orange)"
                            className="me-2"
                            btnValue="Close"
                            onClick={handleCloseModal}
                        />
                    </div>
                }
            />

            <ConfirmModal
                title={`Are you sure you want to delete ${classObj.ClassName}`}
                icon={
                    <lord-icon
                        src="https://cdn.lordicon.com/jxzkkoed.json"
                        trigger="hover"
                        style={{ width: "120px", height: "120px" }}
                    />
                }
                onClose={handleCloseModal}
                isOpen={delIsOpen}
                body={
                    <>
                        <MyButton
                            bgColor="var(--red)"
                            hoverBgColor="rgb(139, 0, 0)"
                            className="me-4"
                            btnValue="Yes, Delete"
                            onClick={() => { handleCloseModal(); handleDelete() }}
                        />
                        <MyButton
                            bgColor="var(--green)"
                            hoverBgColor="#00943e"
                            btnValue="No, Cancel"
                            onClick={handleCloseModal}
                        />
                    </>
                }
            /> */}
        </>
    )
}

export default AllClasses
