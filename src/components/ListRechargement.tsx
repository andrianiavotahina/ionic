import './ListRechargement.css';
import {url} from "../Configuration";
import {useEffect, useState} from "react";
import {affichage} from "./Rechargement";


interface ContainerProps { }

const ListRechargement: React.FC<ContainerProps> = (message?: any) => {
    const [rechargement,setRechargement]=useState<any[]>([])

    async function getAll() {
        let result = await fetch(url + "/listes/"+localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const user = await result.json();
        setRechargement(user)
    }

    useEffect(()=>{
        getAll().catch()
    },[rechargement])
    if (rechargement.length!=0){
        // @ts-ignore
        return (
            <div className="row" id="contenaire">
                {
                    rechargement?.map(mont=>(
                        affichage(mont.montant,mont.daterechargement,mont.statue)
                    ))
                }
            </div>
        )
    }
    return (
        <div className="text-center" id="contenaire">
            <p>Vous n'avez pas de rechargement disponible</p>
        </div>
    )
}
export default ListRechargement