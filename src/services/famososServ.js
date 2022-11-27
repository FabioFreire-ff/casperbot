import { db } from "../config/firebaseconfig";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const famososCollectionRef = collection(db, "famosos");
class FamososServices {
    addFamosos = (newFamo) => {
        return addDoc(famososCollectionRef, newFamo);
    };

    updateFamosos = (id, updatedFamosos) => {
        const entrDoc = doc(db, "famosos", id);
        return updateDoc(entrDoc, updatedFamosos);
    };

    deleteFamosos = (id) => {
        const entrDoc = doc(db, "famosos", id);
        return deleteDoc(entrDoc);
    };

    getAllFamosos = () => {
        return getDocs(famososCollectionRef);
    };

    getFamosos = (id) => {
        const entrDoc = doc(db, "famosos", id);
        return getDoc(entrDoc);
    };
}

export default new FamososServices();