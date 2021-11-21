// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYlykbGmtkD3lGrZ2Tj4DiJujITdA6GNU',
  authDomain: 'todo-list-vue12.firebaseapp.com',
  projectId: 'todo-list-vue12',
  storageBucket: 'todo-list-vue12.appspot.com',
  messagingSenderId: '499689327051',
  appId: '1:499689327051:web:91f13c5f5b5ccde035ce4e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore();

export { firebaseApp, firebaseDb };
