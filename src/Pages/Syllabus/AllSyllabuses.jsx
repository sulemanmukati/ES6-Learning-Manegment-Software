import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Grid from "../../Components/MyGrid"
import Sidebar from '../../Layout/Sidebar';
import { deleteData, getData, setData } from '../../Config/FirebaseMethods';
import { toastGreen, toastRed } from '../../Components/My Toasts';
import { Tooltip } from '@mui/material';
import MyButton from '../../Components/MyButton';
import FloatingInput from '../../Components/FloatingInput';
import MyLoader from '../../Components/MyLoader';
import MyModal from '../../Components/MyModal';
import ConfirmModal from '../../Components/ConfirmModal';
import MySelect from '../../Components/MySelect';
import MyTextarea from '../../Components/MyTextarea';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Config/FirebaseConfig';
import MyTables2 from '../../Components/MyTables2';

function AllSyllabus() {
 
    const [userData, setUserData] = useState([]);
    const navigate =useNavigate()
    useEffect(() => {
      getData();
    }, );
    
    //   Data get from firebase Firestore Database
    
    const getData = async () => {
      try {
        const arr = [];
        const getData = await getDocs(collection(db, "subject"));
    
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
  
              <MyButton onClick={()=>navigate('/dashboard/subjects/addSubjects')} margin={20} float={"right"} btnValue={'ADD'}/>
              <MyTables2 data={userData} />
  
            
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
            <Sidebar element={content()} breadcrumbLink="Syllabus" pageName="All Syllabus" breadcrumbNestedLink="All Syllabus" />
            {/* <MyModal title="Edit Syllabus Details" height="52vh" onClose={handleCloseModal} isOpen={editIsOpen}
                body={(
                    <>
                        <form onSubmit={(e) => handleEdit(e)}>
                            <Row>
                                <Col md={12} lg={6} className='mb-3'>
                                    <MySelect
                                        label="Select Class"
                                        defaultValue="Please Select Class"
                                        value={getValue("SyllabusClass")}
                                        onChange={(e) => setEditedSyllabusObj({ ...editedSyllabusObj, SyllabusClass: e.target.value })}
                                        options={classesName}
                                    />
                                </Col>

                                <Col md={12} lg={6} className='mb-3'>
                                    <MySelect
                                        label="Select Subject"
                                        defaultValue="Please Select Subject"
                                        value={getValue("SyllabusSubject")}
                                        onChange={(e) => setEditedSyllabusObj({ ...editedSyllabusObj, SyllabusSubject: e.target.value })}
                                        options={subjectsName}
                                    />
                                </Col>

                                <Col md={12} lg={6} className='mb-1'>
                                    <FloatingInput
                                        label="Topic"
                                        onChange={(e) => setEditedSyllabusObj({ ...editedSyllabusObj, SyllabusTopic: e.target.value })}
                                        placeholder="Edit Topic"
                                        myValue={getValue("SyllabusTopic")}
                                        type="text"
                                    />
                                </Col>
                                <br />
                                <Col md={12} lg={6} className='mb-3'>
                                    <FloatingInput
                                        label="Start Date"
                                        onChange={(e) => setEditedSyllabusObj({ ...editedSyllabusObj, SyllabusStartDate: e.target.value })}
                                        placeholder="Edit Start Date"
                                        myValue={getValue("SyllabusStartDate")}
                                        type="date"
                                    />
                                </Col>
                                <Col md={12} lg={6} className='mb-3'>
                                    <FloatingInput
                                        label="End Date"
                                        onChange={(e) => setEditedSyllabusObj({ ...editedSyllabusObj, SyllabusEndDate: e.target.value })}
                                        placeholder="Edit End Date"
                                        myValue={getValue("SyllabusEndDate")}
                                        type="date"
                                    />
                                </Col>
                                <Col md={12}>
                                    <MyTextarea
                                        value={getValue("SyllabusDescription")}
                                        onChange={(e) => setEditedSyllabusObj({ ...editedSyllabusObj, SyllabusDescription: e.target.value })}
                                        label="Description"
                                    />
                                </Col>
                            </Row>
                            <hr className="mt-4 mb-2" />
                            <div className="text-end">
                                <MyButton bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="me-2" btnValue={(<div className="d-flex align-items-center gap-2">Save <lord-icon src="https://cdn.lordicon.com/dangivhk.json" trigger="hover" style={{ width: "37px", height: "37px" }} /></div>)} type="submit" />
                            </div>
                        </form>
                    </>
                )}
                footer={(
                    <div>
                        <MyButton bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="me-2" btnValue="Close" onClick={handleCloseModal} />
                    </div>
                )} />

            <ConfirmModal title={`Are you sure you want to delete the syllabus for ${syllabusObj.SyllabusClass} - ${syllabusObj.SyllabusSubject}?`}
                icon={(<lord-icon src="https://cdn.lordicon.com/jxzkkoed.json" trigger="hover" style={{ width: "120px", height: "120px" }} />)}
                onClose={handleCloseModal} isOpen={delIsOpen}
                body={(
                    <>
                        <MyButton bgColor="var(--red)" hoverBgColor="rgb(139, 0, 0)" className="me-4" btnValue="Yes, Delete" onClick={() => { handleCloseModal(); handleDelete() }} />
                        <MyButton bgColor="var(--green)" hoverBgColor="#00943e" btnValue="No, Cancel" onClick={handleCloseModal} />
                    </>
                )} /> */}
        </>
    );
}

export default AllSyllabus;
