import { useState, useEffect } from 'react';

import Sidebar from '../../Layout/Sidebar';

import MyButton from '../../Components/MyButton';

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
          
        </>
    );
}

export default AllSyllabus;
