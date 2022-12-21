import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBBd12kCn657q-1IRseaZokYiDyO_SpoV0',
	authDomain: 'maltimart-d4e22.firebaseapp.com',
	projectId: 'maltimart-d4e22',
	storageBucket: 'maltimart-d4e22.appspot.com',
	messagingSenderId: '138903825968',
	appId: '1:138903825968:web:33c03b27ce9a14657987f5',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
