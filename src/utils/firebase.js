import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCkPP8sZvfYG7spBQTEiCmPaPu7UY_TNHw',
  authDomain: 'pwa-native.firebaseapp.com',
  databaseURL: 'https://pwa-native.firebaseio.com',
  projectId: 'pwa-native',
  storageBucket: 'pwa-native.appspot.com',
  messagingSenderId: '873819253197',
  appId: '1:873819253197:web:0217aaf231329d121afc84',
  measurementId: 'G-MZJXXWCJYL',
};

firebase.initializeApp(config);

export { firebase };
