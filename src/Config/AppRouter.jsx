import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import AllStudents from '../Pages/Students/AllStudents';
import AdmissionForm from '../Pages/Students/AdmissionForm';
import AllTeachers from '../Pages/Teachers/AllTeachers';
import AddTeachers from '../Pages/Teachers/AddTeachers';
import TeacherDetailedPage from '../Pages/Teachers/TeacherDetailedPage';
import StudentPromotion from '../Pages/Students/StudentPromotion';
import AllSubjects from '../Pages/Subjects/AllSubjects';
import AddSubject from '../Pages/Subjects/AddSubject';
import AddClass from '../Pages/Classes/AddClass';
import AllClasses from '../Pages/Classes/AllClasses';
import FeeSubmission from '../Pages/Fees/GenerateFee';
import FeeVoucher from '../Pages/Fees/FeeVoucher';
import FeePaymentStatus from '../Pages/Fees/FeePaymentStatus';
import Registration from '../Pages/School/Registration';
import AllSyllabuses from '../Pages/Syllabus/AllSyllabuses';
import AddSyllabus from '../Pages/Syllabus/AddSyllabus';
import AddExam from '../Pages/Exams/AddExam';
import AllExamsShedule from '../Pages/Exams/AllExamsShedule';
import Signin from '../Pages/Signin';
import Protected from './Protected';

import Signup from '../Pages/Signup';

function AppRouter() {
  return (
    <>
    
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Protected Component={Dashboard} />} />
          <Route path='/dashboard/students/StudentsRegistration' element={<Protected Component={AllStudents} />} />
          <Route path='/dashboard/students/admissionForm' element={<Protected Component={AdmissionForm} />} />
          <Route path='/dashboard/students/studentlist' element={<Protected Component={StudentPromotion} />} />
          <Route path='/dashboard/teachers/Teacherslist' element={<Protected Component={AllTeachers} />} />
          <Route path='/dashboard/teachers/TeachersRegistretion' element={<Protected Component={AddTeachers} />} />
          <Route path='/dashboard/teachers/:id' element={<Protected Component={TeacherDetailedPage} />} />
         <Route path='/dashboard/subjects/allSubjects' element={<Protected Component={AllSubjects} />} />
          <Route path='/dashboard/subjects/addSubjects' element={<Protected Component={AddSubject} />} />
          <Route path='/dashboard/classes/addClass' element={<Protected Component={AddClass} />} />
          <Route path='/dashboard/classes/allClasses' element={<Protected Component={AllClasses} />} />
          <Route path='/dashboard/fees/generateFee' element={<Protected Component={FeeSubmission} />} />
          <Route path='/dashboard/fees/feesVoucher' element={<Protected Component={FeeVoucher} />} />
          <Route path='/dashboard/fees/feePaymentStatus' element={<Protected Component={FeePaymentStatus} />} />
          <Route path='/dashboard/school/registration' element={<Protected Component={Registration} />} />
          <Route path='/dashboard/syllabus/allSyllabuses' element={<Protected Component={AllSyllabuses} />} />
          <Route path='/dashboard/syllabus/addSyllabus' element={<Protected Component={AddSyllabus} />} />
          <Route path='/dashboard/exams/examResult' element={<Protected Component={AddExam} />} />
          <Route path='/dashboard/exams/allExamsSchedule' element={<Protected Component={AllExamsShedule} />} />
          </Routes>
    </>
  )
}

export default AppRouter
