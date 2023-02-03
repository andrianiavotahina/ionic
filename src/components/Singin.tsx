import './Singin.css';
import {useHistory} from "react-router";
import {useState} from "react";
import {url} from "../Configuration";

interface ContainerProps { }

const Sing: React.FC<ContainerProps> = (message?: any) => {

    const history=useHistory()
    const [login,setLogn]=useState("");
    const [mdp,setPwd]=useState("");
    const [nom,setNom]=useState("")
    const [prenom ,setPrenon]=useState("")
    async function log() {
        //const history=useHistory()
        let itms={login,mdp,nom,prenom}
        let result= await fetch(url+"/insert_client",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(itms)
        });
        const user=await result.json();
        history.push("/home")
    }


    return (
        <div className="card shadow p-3  rounded" id="s">
            <div className="card-body">
                <div className="row text-center my-2">
                    <h2> Nouveau Inscription</h2>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Nom</label>
                        <input type="email" className="form-control" id="inputEmail4" onChange={(event => setNom(event.target.value))}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Prenom</label>
                        <input type="text" className="form-control" id="inputPassword4" onChange={(event => setPrenon(event.target.value))}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Utilisateur</label>
                        <input type="text" className="form-control" id="inputAddress" onChange={(event => setLogn(event.target.value))} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Password</label>
                        <input type="text" className="form-control" id="inputAddress2" onChange={(event => setPwd(event.target.value))}/>
                    </div>

                        <div className="row my-4">
                            <button type="button" className="btn btn-primary" onClick={(log)}>Sign up</button>
                        </div>
                </form>
            </div>
        </div>
    )
}
export default Sing;