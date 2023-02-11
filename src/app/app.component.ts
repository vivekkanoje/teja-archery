import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB004PdP--tbPo6fURBYqRNFdtakP7ncEQ",
  authDomain: "agentdialogflow-5cc12.firebaseapp.com",
  databaseURL: "https://agentdialogflow-5cc12.firebaseio.com",
  projectId: "agentdialogflow-5cc12",
  storageBucket: "agentdialogflow-5cc12.appspot.com",
  messagingSenderId: "284024040137",
  appId: "1:284024040137:web:07a5a6159aa2232d233b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teja-archery';
}
