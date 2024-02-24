import { UserContext } from "../context/UserContext";
import { useContext } from "react"


export const HomeScreen = () => {


  const {usuario} = useContext(UserContext);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Technologies</th>
              <th scope="col">Email</th>
              <th scope="col">Networking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{usuario.name}</th>
              <td>{usuario.technologies}</td>
              <td>{usuario.email}</td>
              <td>{usuario.redes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
