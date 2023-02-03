import {useHistory} from "react-router";

interface ContainerProps { }

const AddRechargement: React.FC<ContainerProps> = (message?: any) => {
    const history=useHistory();
    return (
        <div className="row" id="add" >
            <button type="button" className="btn btn-primary shadow-lg rounded-circle" onClick={(e=>{
                history.push("/addRechargement")
            })} ><i className="fa-solid fa-plus"/></button>
        </div>
)
}
export default AddRechargement;