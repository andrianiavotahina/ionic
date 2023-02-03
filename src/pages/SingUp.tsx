import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from "react";
import Sing from "../components/Singin";

const SingUp: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Sing/>
            </IonContent>
        </IonPage>
    );
};

export default SingUp;