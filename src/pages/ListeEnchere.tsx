import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/Header";
import AddFootter from "../components/AddFootter";
import Content from "../components/ContentList";

const ListeEnchere: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Header/>
                <Content/>
                <AddFootter/>
            </IonContent>
        </IonPage>
    );
};

export default ListeEnchere;