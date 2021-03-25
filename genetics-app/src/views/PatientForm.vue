<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>Patient Form</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
          <form>
              <ion-list>
                  <ion-item>
                    <ion-label position="floating">Patient Full Name</ion-label>
                    <ion-input type="text"/>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Patient Age</ion-label>
                    <ion-input type="number"/>
                  </ion-item>
                  <ion-item>
                    <ion-label>Patient Gender</ion-label>
                    <ion-radio-group>
                        <ion-list>
                            <ion-item>
                                <ion-label>Male</ion-label>
                                <ion-radio value="Male" slot="start"></ion-radio>
                            </ion-item>
                            <ion-item>
                                <ion-label>Female</ion-label>
                                <ion-radio value="Female" slot="start"></ion-radio>
                            </ion-item>
                        </ion-list>
                    </ion-radio-group>
                  </ion-item>
                  <ion-item>
                      <ion-label position="fixed">Visit Reason</ion-label>
                      <ion-textarea rows="3" placeholder="e.g. Second consultation"></ion-textarea>
                  </ion-item>
                  <ion-item>
                    <ion-label>Patient Consent</ion-label>
                    <ion-checkbox></ion-checkbox>
                  </ion-item>
                  <ion-item>
                      <ion-label position="floating">Take or Upload a Patient Photo</ion-label>
                      <br>
                      <br>
                      <ion-thumbnail slot="start">
                          <img :src="takenImageUrl">
                      </ion-thumbnail>
                       <ion-button type="button" @click="takePhoto">
                            <ion-icon slot="start" :icon="camera"></ion-icon>
                        Take a Photo
                        </ion-button>
                        <br>
                        <ion-button>Upload a Photo</ion-button>
                  </ion-item>
                  <ion-item>
                      <ion-label position="floating">How Old is the Patient in the Photo?</ion-label>
                      <ion-input type="number"/>
                  </ion-item>
              </ion-list>
              <ion-button type="submit" shape="round" expand="block">Submit</ion-button>
          </form>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage,IonContent,IonHeader,IonToolbar,IonTitle,IonList,IonItem,IonInput,IonTextarea,IonLabel,IonRadio,IonRadioGroup
        ,IonCheckbox,IonButton,IonIcon,IonBackButton,IonButtons,IonThumbnail} from '@ionic/vue';
import {camera} from 'ionicons/icons';
import { Plugins, CameraResultType,CameraSource }  from '@capacitor/core';
const { Camera } =Plugins;
    export default {
        components:{
            IonPage,
            IonContent,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonList,
            IonItem,
            IonInput,
            IonTextarea,
            IonLabel,
            IonRadio,
            IonRadioGroup,
            IonCheckbox,
            IonButton,
            IonIcon,
            IonBackButton,
            IonButtons,
            IonThumbnail,
        },
        data(){
            return {
                takenImageUrl:null,
                camera,
            }
        },
        methods:{
          async takePhoto(){
              const photo = await Camera.getPhoto({
                  resultType: CameraResultType.Uri,
                  source: CameraSource.Camera, // to open camera to take photo
                  quality: 60,
              });
             this.takenImageUrl = photo.webPath;

    },
    },
    }
</script>
