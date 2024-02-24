import { UseForm } from "../hooks/useForm"
import { UserContext } from "../context/UserContext";
import { useContext } from "react"

export const LoginScreen = () => {

    const initialForm = {
        name: '',
        technologies: '',
        email: '',
        redes: ''
    }

    const { formState, name, technologies, email, redes, onInputChange } = UseForm(initialForm)
    const {setUsuario} = useContext(UserContext);



    const onSubmit = (e) => {
        e.preventDefault()
        setUsuario(formState)
    }

    return (
        <>
            <form className="container" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                    type="text"
                    className="form-control" 
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="technologies" className="form-label">Technologies</label>
                    <input type="text" 
                    className="form-control" 
                    name="technologies"
                    value={technologies}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" 
                    className="form-control" 
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="redes" className="form-label">Redes</label>
                    <input type="text" 
                    className="form-control" 
                    name="redes"
                    value={redes}
                    onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}
