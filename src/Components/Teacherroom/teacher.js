import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF ,faTwitter} from '@fortawesome/free-brands-svg-icons';
import './teacher.css'

const Teacher = (teacher) => {
   const {name,age,id,Value,img,University,address}=teacher.teacherRoom;
    return (
        <div className="teacherRoom">
             <div className="text">
             <img className="imgresize"  src={img} alt='text'></img>
             </div>
             <div className="text">
             <h2>Name : {name}</h2>
             <h4>Age : {age}</h4>
             <h4>University: {University}</h4>
             <h3>Value: ${Value}</h3>
             <h3>Address: {address}</h3>
             <button onClick={() => teacher.toMenu(teacher.teacherRoom)} className="btn"><FontAwesomeIcon icon={faUser} /> Hire Me</button>
              <h3 ><FontAwesomeIcon className="fontawesome" icon={faFacebookF}/> <FontAwesomeIcon icon={faTwitter}/></h3>
             </div>
        </div>
    );
};

export default Teacher;