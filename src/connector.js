
import firebaseApp from "./firebase";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    methods: {
        // eslint-disable-next-line no-unused-vars
        async checkPwd(inAccount, inPassword) {
            const docRef = doc(db, "AdminAccount", String(inAccount));
            let docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data().password);
                return docSnap.data().password === inPassword;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return false;
            }
        },
        async getZone(inAccount) {
            const docRef = doc(db, "AdminAccount", String(inAccount));
            let docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return await docSnap.data().zone;
            } else {
                return 0;
            }
        }
    }
}
