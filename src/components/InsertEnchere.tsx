import './Singin.css';
import {useHistory} from "react-router";
import {useEffect, useState} from "react";
import {url} from "../Configuration";

interface ContainerProps { }

const Insert: React.FC<ContainerProps> = (message?: any) => {

    const history=useHistory()
    const [nom_produit,setNom]=useState("");
    const [prix,setPrix]=useState("");
    const [about,setAbout]=useState("")
    const [daty_fin ,setFin]=useState("")
    const [daty_debut ,setDebut]=useState("")
    const id_client=localStorage.getItem("id")
    const [idCategorie,setIdCategorie]=useState("")
    async function log() {
        let itms={nom_produit,prix,about,daty_fin,id_client,idCategorie,daty_debut}
        let result= await fetch(url+"/insert_encher",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(itms)
        });
        const user=await result.json();
        history.push("/List")
    }

    const [categorie,setCategorie]=useState<any[]>([])
    async function getAllCategorie() {
        let result = await fetch(url + "/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const user = await result.json();
        setCategorie(user)
    }
    useEffect(()=>{
        getAllCategorie().catch()
    },[categorie])

    return (
        <div className="card shadow p-3  rounded" id="s">
            <div className="card-body">
                <div className="row text-center my-2">
                    <h2> Insertion Enchere</h2>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Nom</label>
                        <input type="email" className="form-control" id="inputEmail4" onChange={(event => setNom(event.target.value))}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">Categorie</label>
                        <select id="inputState" className="form-select" onChange={(event => setIdCategorie(event.target.value))}>
                            {
                                categorie?.map(mont=>(
                                    <option value={mont.idcategories} >{mont.nomcategorie}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Prix</label>
                        <input type="number" step="0.0001" className="form-control" id="inputAddress" onChange={(event => setPrix(event.target.value))}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddre" className="form-label">Date debut</label>
                        <input type="datetime-local" className="form-control" id="inputAddre" onChange={(event => setDebut(event.target.value))}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddre" className="form-label">Date fin</label>
                        <input type="datetime-local" className="form-control" id="inputAddre" onChange={(event => setFin(event.target.value))}/>
                    </div>

                    <div className="col-12">
                        <label htmlFor="floatingTextarea">Comments</label>
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(event => setAbout(event.target.value))}/>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <button type="submit" className="btn btn-primary" onClick={log}>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Insert;