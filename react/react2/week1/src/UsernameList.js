import React, {useContext, useState} from 'react'
import { UserContext } from './UserContext';

 const UsernameList = () => {
    const {usernames, setUsernames} = useContext(UserContext);

    const listItems = [];
    for (let name of usernames) {
    const listItem = (
       <li key={name}>
              {name}
       </li>
   );
   listItems.push(listItem);
 }
    let errMsg;
   if (listItems.length === 0 ) {
     errMsg = "No Result"
   } else {
     errMsg = ""
   } 


  return (
    <div>   
      <ul>
        {listItems}
    </ul>
    <p>{errMsg}</p>
    </div>
  )
}

export default UsernameList;