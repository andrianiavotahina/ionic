import './ListRechargement.css';
import {url} from "../Configuration";
import {useEffect, useState} from "react";
import {affichage, displayEnchere} from "./Rechargement";


interface ContainerProps { }

const Content: React.FC<ContainerProps> = (message?: any) => {
    const [rechargement,setRechargement]=useState<any[]>([])

    async function getAll() {
        let result = await fetch(url + "/my_propre_encher/"+localStorage.getItem("id"), {
            method: "POST",
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
                        displayEnchere(mont.nom_produit,mont.prix,mont.daty_debut,mont.daty_fin)
                    ))
                }
            </div>
        )
    }
    return (
        <div className="text-center" id="contenaire">
            <p>Pas d'nechere disponible</p>
        </div>
    )
}
export default Content