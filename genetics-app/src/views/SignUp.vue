<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
            </ion-buttons>
            <ion-title>Sign Up</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
    <form>
      <ion-list>
          <ion-item>
              <ion-label position="floating">First Name</ion-label>
              <ion-input type="text"/>
          </ion-item>
          <ion-item>
              <ion-label position="floating">Last Name</ion-label>
              <ion-input type="text"/>
          </ion-item>
          <ion-item>
              <ion-label position="floating">E-mail</ion-label>
              <ion-input type="email"/>
          </ion-item>
          <ion-item>
              <ion-label position="floating">Phone Number</ion-label>
              <ion-input type="number"/>
          </ion-item>
          <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"/>
          </ion-item>
          <ion-item>
              <ion-label position="floating">Confirm Password</ion-label>
              <ion-input type="password"/>
          </ion-item>
          <ion-button type="submit" shape="round" expand="block">Sign Up</ion-button>
      </ion-list>
  </form>
    </ion-content>
</ion-page>
</template>

<script>
import {IonPage,IonContent,IonHeader,IonToolbar,IonTitle,IonList,IonItem,IonLabel,IonInput,IonButton,IonButtons,IonBackButton} from '@ionic/vue';
    export default {
        components:{
            IonPage,
            IonContent,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonList,
            IonItem,
            IonLabel,
            IonInput,
            IonButton,
            IonButtons,
            IonBackButton,
        }
    }
</script>
