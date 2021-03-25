<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-title color="dark"><h3>Genetics App
            <ion-button router-link="/home/form">TeleHealth</ion-button>
            <ion-button href="#s2">How to Use</ion-button>
            <ion-button router-link="/home/signup">Sign Up</ion-button>
            <ion-button router-link="/home/signin">Sign In</ion-button>
            <ion-button href="#s1">About Us</ion-button>
            <ion-button href="#s3">Contact Us</ion-button>
          </h3>
          </ion-title>             
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="false">

      <div>
      <div >
        <img class="img" src="https://www.childrens.com/wps/wcm/connect/childrenspublic/8861192a-e8dc-40d7-804e-a7535255da75/shutterstock_369646874_800x480.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_MP541240M8QL00A94691A238J3-8861192a-e8dc-40d7-804e-a7535255da75-noFWXEU"/>
      </div>
     
      </div>
      <div id="s2" align="center">
        <ion-title ><h1> How to use ?</h1></ion-title>
        <h3>
          The application contains page for TeleHealth to fill in your personal data and take<br>
          a photo in tha app or upload one to send you the result in no time.<br>
        </h3>   
      </div>
      <div id="s1" align="center">
       <ion-title ><h1>  About Us</h1></ion-title>
        
          <h3>
          Imagine a world where every person’s genome serves as their medical record to guide health decisions.<br>
          We’re well on our way—genomic analysis is becoming the clinical standard in diagnostic evaluations,<br> 
          and artificial intelligence is the cornerstone of technologies that enable it. Used by 70% of the <br>
          world’s geneticists across 2,000 clinical sites in over 130 countries, the next-generation phenotyping <br> 
          (NGP) technologies capture, structure, and analyze complex human physiological data to produce actionable<br>
          genomic insights. We aim to facilitate faster access to accurate genetic analysis via Telehealth.<br>
          We focus on diagnosing genetic diseases like Down Syndrome using deep learning algorithms and Convolution<br>
          Neural Network (CNN) specifically.<br>
          </h3>
         
      </div>
    

      <ion-footer class="ion-no-border" id="s3">
    <ion-toolbar>
      <h3>Contact Us: <a target="_blank" rel="noopener noreferrer" href="https://facebook.com">Facebook</a></h3>
    </ion-toolbar>
    </ion-footer>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle,IonFooter,IonToolbar,IonButton} from '@ionic/vue'; //, IonNavbar 


export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonFooter,
  },
};
</script>

<style>
  .img{
    width: 100%;
  }
</style>