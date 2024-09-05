import React, { useState, useEffect, useRef } from 'react';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FaAngleRight, FaAngleDown, FaChalkboardTeacher, FaRegRegistered, FaUsers, FaWpforms } from 'react-icons/fa';
import { RxDotFilled } from "react-icons/rx";
import { PiStudentBold, PiBooks, PiExam } from "react-icons/pi";
import { SiGoogleclassroom, SiBookstack } from "react-icons/si";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import { getData } from '../Config/FirebaseMethods';



const initialData = [
  {
    id: '0',
    name: 'Dashboard',
    icon: <AiOutlineDashboard />,
    link: '/dashboard',
  },
  {
    id: '1',
    name: 'Students',
    icon: <PiStudentBold />,
    children: [
      {
        id: 'addStudent',
        name: 'Students Registration',
        link: '/dashboard/students/StudentsRegistration',
        icon: <RxDotFilled />,
      },
      // {
      //   id: 'admissionForm',
      //   name: 'Admission Form',
      //   link: '/dashboard/students/admissionForm',
      //   icon: <RxDotFilled />,
      // },
      {
        id: 'studentPromotion',
        name: 'Student List',
        link: '/dashboard/students/studentlist',
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    id: '2',
    name: 'Teachers',
    icon: <FaChalkboardTeacher />,
    children: [
      {
        id: '4',
        name: 'Teachers Registration',
        link: '/dashboard/teachers/TeachersRegistretion',
        icon: <RxDotFilled />,
      },
      {
        id: '3',
        name: 'Teachers list',
        link: '/dashboard/teachers/Teacherslist',
        icon: <RxDotFilled />,
      },
      // {
      //   id: '5',
      //   name: 'Teacher Allocation',
      //   link: '/dashboard/teachers/teacherAllocation',
      //   icon: <RxDotFilled />,
      // },
    ],
  },
  {
    id: '6',
    name: 'Subjects',
    icon: <PiBooks />,
    children: [
      {
        id: '8',
        name: 'Add Subjects',
        link: '/dashboard/subjects/addSubjects',
        icon: <RxDotFilled />,
      },
      {
        id: '7',
        name: 'Subjects list',
        link: '/dashboard/subjects/allSubjects',
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    id: '9',
    name: 'Classes',
    icon: <SiGoogleclassroom />,
    children: [
      {
        id: '11',
        name: 'Add Class',
        link: '/dashboard/classes/addClass',
        icon: <RxDotFilled />,
      },
      {
        id: '10',
        name: 'Class list',
        link: '/dashboard/classes/allClasses',
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    id: '12',
    name: 'Fees',
    icon: <GiMoneyStack />,
    children: [
      {
        id: '14',
        name: 'Fee Payment Status',
        link: '/dashboard/fees/feePaymentStatus',
        icon: <RxDotFilled />,
      },
      {
        id: '13',
        name: 'Generate Fees',
        link: '/dashboard/fees/generateFee',
        icon: <RxDotFilled />,
      },
      {
        id: '15',
        name: 'Fee Voucher',
        link: '/dashboard/fees/feesVoucher',
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    id: '16',
    name: 'Syllabus',
    icon: <SiBookstack />,
    children: [
      {
        id: '17',
        name: 'All Syllabuses',
        link: '/dashboard/syllabus/allSyllabuses',
        icon: <RxDotFilled />,
      },
      {
        id: '18',
        name: 'Add Syllabus',
        link: '/dashboard/syllabus/addSyllabus',
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    id: '23',
    name: `Admission`,
    icon: <FaWpforms />,
    children: [ 
      {
      id: '24',
      name: 'Admission Form',
      link: '/dashboard/students/admissionForm',
      icon: <RxDotFilled />,
    },
  ],
},
  {
    id: '19',
    name: 'Exams',
    icon: <PiExam />,
    children: [
      {
        id: '20',
        name: 'Exams Schedule',
        link: '/dashboard/exams/allExamsSchedule',
        icon: <RxDotFilled />,
      },
      {
        id: '21',
        name: 'Exam results',
        link: '/dashboard/exams/examResult',
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    id: '22',
    name: 'Register',
    icon: <FaRegRegistered />,
    link: '/dashboard/school/registration',
  },


];

const TreeNode = ({ node, nested, onTabClick, activeTab }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    const isActive = node.children?.some(child => child.link === location.pathname) || node.link === location.pathname;
    if (isActive) setOpen(true);
    else setOpen(false);
  }, [location.pathname, node]);

  const handleClick = (id) => {
    if (node.children) {
      handleToggle();
    } else {
      onTabClick(id);
    }
  };

  useEffect(() => {
    const isActive = node.children?.some(child => child.link === location.pathname) || node.link === location.pathname;
    if (isActive) {
      onTabClick(node.id);
    }
  }, [location.pathname]);

  return (
    <>
      <ListItem disablePadding>
        <Link
          className='text-white text-decoration-none w-100'
          to={node.link || "#"}
          onClick={() => handleClick(node.id)}
        >
          <ListItemButton
            className={nested ? `py-2 ${activeTab === node.id ? "ps-5 active-nested" : "nested-item bg-blackBlue"}` : 'ps-4 py-3 main-item'}
            sx={{ backgroundColor: activeTab === node.id ? 'var(--orange)' : 'transparent' }}
          >
            {node.icon && (
              <ListItemIcon className={nested ? "text-secondary" : activeTab === node.id ? "text-black fs-4" : "text-orange fs-4"} style={nested ? { minWidth: '20px' } : {}}>
                {node.icon}
              </ListItemIcon>
            )}
            <ListItemText className={activeTab === node.id ? "text-black" : "text-gray"} primary={node.name} />
            {node.children && (
              <ListItemIcon className='ml-auto text-orange'>
                {open ? <FaAngleDown /> : <FaAngleRight />}
              </ListItemIcon>
            )}
          </ListItemButton>
        </Link>
      </ListItem>
      {!nested && <hr className='text-white p-0 m-0' />}
      {node.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((childNode) => (
              <TreeNode key={childNode.id} node={childNode} nested={true} onTabClick={onTabClick} activeTab={activeTab} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const CustomList = ({ onTabClick, activeTab }) => {
  const [data, setData] = useState(initialData);
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;

      const id = localStorage.getItem("USERID");
      if (id) {
        getData("Users", id).then((res) => {
            if (res.UserType !== "Admin") {
              setData(prevData => [
                ...prevData,
                {
                  id: '23',
                  name: 'Accounts',
                  icon: <FaUsers />,
                  link: '/dashboard/allAccounts',
                }
              ]);
            } else {
              setData(prevData => [
                ...prevData,
                {
                  id: '23',
                  name: 'Accounts',
                  icon: <FaUsers />,
                  children: [
                    {
                      id: '24',
                      name: 'All Accounts',
                      link: '/dashboard/allAccounts',
                      icon: <RxDotFilled />,
                    },
                    {
                      id: '25',
                      name: 'Add Account',
                      link: '/dashboard/addAccount',
                      icon: <RxDotFilled />,
                    },
                  ],
                }
              ]);
            }
        });
      }
    }
  }, []);

  return (
    <List className='m-0 p-0'>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} nested={false} onTabClick={onTabClick} activeTab={activeTab} />
      ))}
    </List>
  );
};

export default CustomList;
