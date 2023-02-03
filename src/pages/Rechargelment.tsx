import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import Header from "../components/Header";
import ListRechargement from "../components/ListRechargement";
import AddRechargement from "../components/AddRechargement";
import ModalRechargement from "../components/ModalRechargement";
import Example from "../components/ModalRechargement";
function f() {
    return (
        <>

        </>
    )
}

const Rechargelment: React.FC = () => {
    return (
        <>
        <IonPage>
            <IonContent fullscreen>
                <Header/>
                <ListRechargement/>
                <AddRechargement/>
            </IonContent>
        </IonPage>
        </>
    );
};

export default Rechargelment;