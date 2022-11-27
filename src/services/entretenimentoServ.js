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

const entretenimentoCollectionRef = collection(db, "entretenimento");
class EntretenimentoServices {
    addEntretenimento = (newEntr) => {
        return addDoc(entretenimentoCollectionRef, newEntr);
    };

    updateEntretenimento = (id, updatedEntretenimento) => {
        const entrDoc = doc(db, "entretenimento", id);
        return updateDoc(entrDoc, updatedEntretenimento);
    };

    deleteEntretenimento = (id) => {
        const entrDoc = doc(db, "entretenimento", id);
        return deleteDoc(entrDoc);
    };

    getAllEntretenimento = () => {
        return getDocs(entretenimentoCollectionRef);
    };

    getEntretenimento = (id) => {
        const entrDoc = doc(db, "entretenimento", id);
        return getDoc(entrDoc);
    };
}

export default new EntretenimentoServices();