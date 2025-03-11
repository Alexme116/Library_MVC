import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
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

    async getLibros() {
        const libros = [];
        const querySnapshot = await getDocs(collection(db, "libros"));
        querySnapshot.forEach((doc) => {
            libros.push(doc.data());
        })
        return libros;
    }

    async addLibro(libro) {
        try {
            await addDoc(collection(db, "libros"), libro);
        } catch (error) {
            console.log(error);
        }
    }

    async isAdmin(email) {
        const querySnapshot = await getDocs(collection(db, "admins"));
        let isAdmin = false;
        querySnapshot.forEach((doc) => {
            if (doc.data().email === email) {
                isAdmin = true;
            }
        })
        return isAdmin;
    }

    async updateLibro(libro) {
        const querySnapshot = await getDocs(collection(db, "libros"));
        querySnapshot.forEach(async (doc) => {
            if (doc.data().id === libro.id) {
                await updateDoc(doc.ref, libro);
            }
        })
    }
}