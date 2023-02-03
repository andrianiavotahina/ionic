import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React from "react";
import Insert from "../components/InsertEnchere";

const InsertPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Insert/>
            </IonContent>
        </IonPage>
    );
};

export default InsertPage;