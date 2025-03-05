import { createContext, useEffect, useState } from "react";

// Create context
export let UserContext = createContext();

export default function UserContextProvider(props) {
    // State
  const [userLogin, setUserLogin] = useState(null);


  // Effect
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserLogin(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}
