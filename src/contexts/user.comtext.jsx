import { createContext ,useState, useEffect} from "react";

import { onAuthStateChangedsListerner,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
      currentUser: null,
      setCurrentUser: ()=> null
});


export const UserProvider = ({children}) =>{
    const  [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    // function only runs once when the component mounts 
     useEffect(()=>{
        const unsubscribe =  onAuthStateChangedsListerner((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            
            setCurrentUser(user);  
            
        })
        // the return function will run when we annmpount
        return unsubscribe;
     },[])
    return <UserContext.Provider value={value }>{children}</UserContext.Provider>
}