import './Singin.css';
import {useHistory} from "react-router";
import {useState} from "react";
import {url} from "../Configuration";

interface ContainerProps { }

const AddRecharger: React.FC<ContainerProps> = (message?: any) => {

    const history=useHistory()
    const [montant,setMontant]=useState("");
    const id_client=localStorage.getItem("id")
    async function log() {
        //const history=useHistory()
        let itms={montant,id_client}
        let result= await fetch(url+"/rechargement",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(itms)
        });
        const user=await result.json();
        history.push("/rechargement")
    }


    return (
        <div className="card shadow p-3  rounded" id="s">
            <div className="card-body">
                <div className="row text-center">
                    <h2 className="my-3"> Rechargement</h2>
                </div>
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Montant</label>
                        <input type="number" className="form-control" id="inputAddress" onChange={(event => setMontant(event.target.value))}/>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="row p-2">
                                    <button type="reset" className="btn btn-secondary" onClick={(e=>{
                                        history.push("/rechargement")
                                    })}>annuller</button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row p-2">
                                    <button type="button" className="btn btn-primary" onClick={log}>Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddRecharger;