import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { app, db, auth } from "./FirebaseConfiguration";

export class FirebaseDao {
    getUser() {
        return auth.currentUser;
    }

    async createUser(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    }

    async signIn(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    }

    async signOut() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }
}