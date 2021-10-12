import React, { useEffect, useState } from 'react';
import Menu from '../Menu/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
import Teacher from '../Teacherroom/teacher';
import './room.css'
const Room = () => {
    const [teachers,setTeachers]=useState([])
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
         fetch('./teacher.json')
         .then(res=>res.json())
         .then(data=>setTeachers(data))
    },[])
    const toMenu = (item) => {
        const newMenu = [...menu, item];
        setMenu(newMenu);
    }
    return (
    <div>
        <div className="searchbtn">
            <input className="input" type="text" placeholder="Search Your Desire Profile" />
            <button className="ipnutbtn"><a href="#"><FontAwesomeIcon icon={faSearch} /> Search</a></button>

        </div>
        <div className="room-container">
            <div className="roomone">
              {
                  
                  teachers.map(teacher=><Teacher
                     key={teacher.id}
                     teacherRoom={teacher}
                     toMenu={toMenu}></Teacher>)   
              }
            </div>
            <div className="roomtwo">
                  <Menu menu={menu}></Menu>
            </div>
          </div>
     </div>
    );
};

export default Room;