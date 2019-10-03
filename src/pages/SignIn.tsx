import {
  IonCard,
  /* IonCardContent, */
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';
import React from 'react';
import './SignIn.css';

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SignIn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>SignIn</IonCardSubtitle>
            <IonCardTitle>SignIn</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Sign In with:</IonLabel>
          </IonListHeader>
          <IonItem href="" target="">
            <IonIcon slot="start" color="medium" icon={logoFacebook} />
            <IonLabel>Facebook</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
