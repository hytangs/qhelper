
import firebaseApp from "./firebase";
import {getFirestore, doc, getDoc, collection, getDocs, updateDoc} from "firebase/firestore";
import sha256 from "./components/plugins/helpers/sha256"
import datequery from "./components/plugins/helpers/datequery";

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

        async updateLoginDate(inAccount) {
            const today = datequery.methods.fetchTodayString()
            console.log(today)
            const mappedAccount = doc(db, "AdminAccount", String(inAccount));
            await updateDoc(mappedAccount, {
                lastLogin: today
            });
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
        },
        async getRoomMeta() {
            const roomMeta = await getDocs(collection(db, "RoomMeta"));
            let outputMeta = []
            roomMeta.forEach((doc) => {
                var x = doc.data();
                var output = [];
                for (var key in x) {
                    if (key !== 'vacant' && key !== 'total' && key !== 'price' && key !== 'name') {
                        output.push({
                            roomNo: key,
                            roomStatus: x[key],
                            roomType: x['name'],
                            roomGuestName: 'Not yet ready',
                            roomCheckout: 'N/A'
                        })
                    }
                }
                outputMeta = outputMeta.concat(output)
            });
            outputMeta.sort((x, y) => (x.roomNo - y.roomNo))
            return outputMeta
        },
        async getRoomTypeInfo() {
            const roomMeta = await getDocs(collection(db, "RoomMeta"));
            let outputMeta = []
            roomMeta.forEach((doc) => {
                    var x = doc.data();
                    outputMeta.push({
                        roomType: x['name'],
                        roomVacancy: x['vacant'],
                        roomTotal: x['total'],
                        roomPrice: x['price']
                    })
            })
            return outputMeta
        },
        async assignRoom(type) {
            const roomTypeToAssign = await doc(db, "RoomMeta", type);

            var x = roomTypeToAssign.data();
            var assigned;
            for (var key in x) {
                if (key !== 'vacant' && key !== 'total' && key !== 'price' && key !== 'name') {
                    console.log(key + " -> " + x[key]);
                    if (x[key] === '0') {
                        assigned = key;
                        break;
                    }
                }
            }
            console.log(assigned);
        },

        async getBroadcast() {
            const broadcastMeta = await getDocs(collection(db, "Notification"));
            let outputMeta = []
            broadcastMeta.forEach((doc) => {
                var x = doc.data();
                outputMeta.push({
                    contains: x['contains'],
                    date: x['date'],
                    sender: x['sender']
                })
            })
            return outputMeta
        },

        async getHealthAlert() {
            const HealthOrder = await getDocs(collection(db, "HealthOrder"));
            let outputOrder = []
            HealthOrder.forEach((doc) => {
                var x = doc.data();
                outputOrder.push({
                    guestName: x['Guest'],
                    date: x['Date'],
                    symptoms: x['Symptoms'],
                    temp: x['Temperature']
                })
            })
            return outputOrder
        },

        async getStaffRoster() {
            const staffRosterMeta = await getDocs(collection(db, "AdminAccount"));
            let outputMeta = []
            staffRosterMeta.forEach((doc) => {
                var x = doc.data();
                outputMeta.push({
                    staffName: x['name'],
                    account: x['account'],
                    staffRole: x['role'],
                    staffZone: x['zone'],
                    deployed: x['deployed'],
                    lastLogin: x['lastLogin']
                })
            })
            return outputMeta
        }
    }
}
