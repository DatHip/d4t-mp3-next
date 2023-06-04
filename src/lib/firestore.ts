/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {initializeApp, getApps, getApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import "firebase/firestore"
import { env } from "@/env.mjs";

const firebaseConfig = {
  apiKey: env.FIRE_BASE_API_KEY,
  authDomain: env.FIRE_BASE_AUTH_DOMAIN,
  projectId: env.FIRE_BASE_PROJECT_ID,
  storageBucket: env.FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: env.FIRE_BASE_MESSAGING_SENDER_ID,
  appId: env.FIRE_BASE_APP_ID,
  measurementId: env.FIRE_BASE_MEASUREMENT_ID
};

export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
