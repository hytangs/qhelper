
import firebaseApp from "./firebase";
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
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
        },
        async getMetaTuple() {
            const roomMeta = await getDocs(collection(db, "RoomMeta"));
            var totalrooms = 0
            var vacantrooms = 0
            roomMeta.forEach((doc) => {
                totalrooms += parseInt(doc.data().total)
                vacantrooms += parseInt(doc.data().vacant)
            });
            var occupiedrooms = totalrooms - vacantrooms
            return {
                "totalrooms":totalrooms,
                "occupiedrooms":occupiedrooms,
                "vacantrooms":vacantrooms
            }
        }
    }
}
