
import firebaseApp from "./firebase";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import sha256 from "./components/plugins/helpers/sha256"

const db = getFirestore(firebaseApp);

export default {
    methods: {
        // eslint-disable-next-line no-unused-vars
        async checkPwd(inAccount, inPassword) {
            const docRef = doc(db, "AdminAccount", String(inAccount));
            let docSnap = await getDoc(docRef);
            console.log(sha256)
            inPassword = sha256(inPassword)
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data().passwordhash);
                return docSnap.data().passwordhash === inPassword;
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
                console.log(docSnap.data().zone)
                return await docSnap.data().zone;
            } else {
                return 0;
            }
        }
    }
}
