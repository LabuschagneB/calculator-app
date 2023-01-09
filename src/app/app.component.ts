import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
}

  const firebaseConfig = {
  apiKey: "AIzaSyDIMiZUEw0KoAC_mYW0keD2s5Wk6g4rRUE",
  authDomain: "calculator-bryan.firebaseapp.com",
  projectId: "calculator-bryan",
  storageBucket: "calculator-bryan.appspot.com",
  messagingSenderId: "452075653746",
  appId: "1:452075653746:web:b3a9f34121ac2b64c1d0eb",
  measurementId: "G-9R1RL812T6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);