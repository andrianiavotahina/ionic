import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
