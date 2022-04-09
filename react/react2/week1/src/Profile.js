import React, {useState, useContext}  from 'react'
import UsernameList from './UsernameList';
import { UserProvider, UserContext } from './UserContext';

const Profile = () => {
    const [username, setUsername] = useState("");
    const [usernames, setUsernames] = useState([]);
/*     const [usernames, setUsernames] = useState([]);
 *//*  const [repositories, setRepositories] = useState([]);
 */ const [isLoading, setIsLoading] = useState(false)
  
    /* const onChangeHandler = e => {
      setUsername(e.target.value);
    }; */
  
    const submitHandler = async e => {
        setUsername(e.target.value);

        setIsLoading(true) 
     try {
      e.preventDefault();
  
      const profiles = await fetch(`https://api.github.com/search/users?q=${username}`);
      const profilesJson = await profiles.json();
      let usernameArray = [];
      for (const profileIndex in profilesJson.items) {
        usernameArray.push(profilesJson.items[profileIndex].login);
      }

      console.log(usernameArray);
  
      /* const repositories = await fetch(profilesJson.repos_url);
      const repoJson = await repositories.json();
      console.log(repoJson); */
  
      if (profilesJson) {
/*         setRepositories(repoJson);
 */        setUsernames(usernameArray);
      }}
      catch (err) {
          
          console.log(err);
      }
      setIsLoading(false)
    };
    
 let loadingText; 
 if (isLoading){
     loadingText = "Loading"
 } else {
     loadingText = ""
 }
  return (
    <div>
    <input type="test" value={username} onChange={submitHandler} />
    <p>{loadingText}</p>
    <UserProvider value={{usernames, setUsernames}}> 
    <UsernameList />
    </UserProvider> 
    {/* {isLoading ? <p>Loading</p> : <p>"Not loading"</p>} */}
    </div>
  )
}

export default Profile;