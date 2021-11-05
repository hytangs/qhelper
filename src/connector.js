
import firebaseApp from "./firebase";
import {getFirestore, doc, getDoc, collection, getDocs, updateDoc, deleteDoc, setDoc} from "firebase/firestore";
import sha256 from "./components/plugins/helpers/sha256"
import datequery from "./components/plugins/helpers/datequery";

const db = getFirestore(firebaseApp);

export default {
    methods: {
        // eslint-disable-next-line no-unused-vars
        async checkLogin(inAccount, inPassword) {
            const docRef = doc(db, "AdminAccount", String(inAccount));
            let docSnap = await getDoc(docRef);
            inPassword = sha256(inPassword)
            if (docSnap.exists()) {
                if (docSnap.data().passwordhash === inPassword) {
                    if (docSnap.data().deployed === "1") {
                        return docSnap.data().name;
                    } else {
                        return "@Undeployed"
                    }
                } else {
                    return "@Undefined"
                }
            } else {
                return "@Undefined";
            }
        },

        async checkGuestLogin(inRoom, inPassword) {
            const docRef = doc(db, "RegInfo", String(inRoom));
            let docSnap = await getDoc(docRef);
            inPassword = sha256(inPassword)
            if (docSnap.exists()) {
                if (docSnap.data().PasswordHash === inPassword) {
                    return {
                        guestroom: inRoom,
                        guestfname: docSnap.data().Fname,
                        guestlname: docSnap.data().Lname,
                        guestlastfoodselectdate: docSnap.data().lastMealSelection,
                        guestlasthealthdeclaration: docSnap.data().lastHealthDeclaration,
                        guestnextpcr: docSnap.data().PCR[0],
                        guestfinance: docSnap.data().finance
                    }
                } else {
                    return "@Undefined";
                }
            } else {
                return "@Undefined";
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

        async updateLoginDateGuest(inAccount) {
            const today = datequery.methods.fetchTodayString()
            console.log(today)
            const mappedAccount = doc(db, "RegInfo", String(inAccount));
            await updateDoc(mappedAccount, {
                lastLogin: today
            });
        },

        async updateStaffDeployment(inAccount, val) {
            const mappedAccount = doc(db, "AdminAccount", String(inAccount));
            await updateDoc(mappedAccount, {
                deployed: String(1 - parseInt(val))
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
        async getRoomMetaGuest() {
            let single = await getDoc(doc(db, "RoomMeta", "Single"))
            single = single.data();
            let double = await getDoc(doc(db, "RoomMeta", "Double"))
            double = double.data();
            let premium = await getDoc(doc(db, "RoomMeta", "PremiumDouble"))
            premium = premium.data();
            let apartment = await getDoc(doc(db, "RoomMeta", "Apartment"))
            apartment = apartment.data();

            let output = [{
                havesingle: single['vacant'],
                havedouble: double['vacant'],
                havepremium: premium['vacant'],
                haveapartment: apartment['vacant'],
                singlerate: single['price'],
                doublerate: double['price'],
                premiumrate: premium['price'],
                apartmentrate: apartment['price']
            }]
            return output
        },

        // eslint-disable-next-line no-unused-vars
        async assignRoom(type) {
            const roomTypeToAssign = await getDoc(doc(db, "RoomMeta", type));
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
            return assigned;
        },

        async getRoomVacantMinusOne(type) {
            const roomType = await getDoc(doc(db, "RoomMeta", type));
            const x = roomType.data()['vacant'];
            return String(parseInt(x) - 1)
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
        },

        async removeStaff(accountName) {
            await deleteDoc(doc(db, "AdminAccount", accountName));
        },

        async modifyStaffPosition(accountName, newPosition) {
            const accountDoc = doc(db, "AdminAccount", accountName)

            var access = '0'
            if (newPosition === 'Hotel Admin') {
                access = '1'; // 1 => Master access
              } else if (newPosition === 'Quarantine Manager') {
                access = '2';
              } else if (newPosition === 'Guest Service Manager') {
                access = '3';
              } else if (newPosition === 'Food & Logistic Manager') {
                access = '4';
              } else if (newPosition === 'Financial Manager') {
                access = '5';
              } else {
                access = '6';
              }

            await updateDoc(accountDoc, {
                role: newPosition,
                zone: access
            })
        },

        async getQuarantineStatus() {
            const guestDoc = await getDocs(collection(db, "RegInfo"))
            let outputMeta = []
            guestDoc.forEach((doc) => {
                var roomNumber = doc.id;
                
                if (roomNumber !== "block") {
                    var x = doc.data();
                    outputMeta.push({
                        room: roomNumber,
                        start: x['DOA'],
                        end: x['checkout'],
                        pcr: x['PCR'],
                        quarantinePlan: x['quarantineLength'],
                        country: x['COD']
                    })
                }
            })
            return outputMeta
        },

        async healthCheckOut(roomNumber) {
            const today = datequery.methods.fetchTodayString()
            await updateDoc(doc(db, "RegInfo", roomNumber), {
                checkout: today
            })
            const guestDoc = await getDoc(doc(db, "RegInfo", roomNumber))
            var x = guestDoc.data()
            const docRef = await setDoc(doc(db, "HealthCheckout", roomNumber), x)
            console.log(docRef);
            const docRef2 = await deleteDoc(doc(db, "RegInfo", roomNumber));
            console.log(docRef2);
        },

        async getHealthCheckOut() {
            const guestDoc = await getDocs(collection(db, "HealthCheckout"))
            let outputMeta = []
            guestDoc.forEach((doc) => {
                var roomNumber = doc.id;
                
                if (roomNumber !== "Blocker") {
                    var x = doc.data();
                    outputMeta.push({
                        name: x['Fname'] + " " + x['Lname'],
                        date: x['checkout']
                    })
                }
            })
            return outputMeta
        }
    }
}
