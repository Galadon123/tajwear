import React from 'react';
import './person.css'
const Person = (props) => {
   const {menu}=props.person

    return (
        <div className="namelist">
           {
               menu.map(item=><p>{item.name}</p>)
            }
        </div>
    );
};

export default Person;