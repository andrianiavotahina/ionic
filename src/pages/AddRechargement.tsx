import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from "react";
import Sing from "../components/Singin";
import AddRecharger from "../components/AddRecherger";

const AddR: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <AddRecharger/>
            </IonContent>
        </IonPage>
    );
};

export default AddR;