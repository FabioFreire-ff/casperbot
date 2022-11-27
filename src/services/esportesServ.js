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

const esportesCollectionRef = collection(db, "esportes");
class EsportesServices {
    addEsportes = (newEspo) => {
        return addDoc(esportesCollectionRef, newEspo);
    };

    updateEsportes = (id, updatedEsportes) => {
        const entrDoc = doc(db, "esportes", id);
        return updateDoc(entrDoc, updatedEsportes);
    };

    deleteEsportes = (id) => {
        const entrDoc = doc(db, "esportes", id);
        return deleteDoc(entrDoc);
    };

    getAllEsportes = () => {
        return getDocs(esportesCollectionRef);
    };

    getEsportes = (id) => {
        const entrDoc = doc(db, "esportes", id);
        return getDoc(entrDoc);
    };
}

export default new EsportesServices();