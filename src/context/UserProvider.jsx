import { UserContext } from "./UserContext";
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState({})
  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
