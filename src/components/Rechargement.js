
export function affichage(montant,dateRechargement,statue){
    return (
        <>
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h5>Mont :  <span>{montant}</span></h5>
                        </div>
                        <div className="row">
                            <h5>Date :  <span>{dateRechargement}</span></h5>
                        </div>
                        <div className="row">
                            <h5>Statue :  <span>{statue}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export function displayEnchere(produit,prix,debut,fin){
    return (
        <>
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h5>Produit :  <span>{produit}</span></h5>
                        </div>
                        <div className="row">
                            <h5>Prix :  <span>{prix}</span></h5>
                        </div>
                        <div className="row">
                            <h5>Debut :  <span>{debut}</span></h5>
                        </div>
                        <div className="row">
                            <h5>Fin :  <span>{fin}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}