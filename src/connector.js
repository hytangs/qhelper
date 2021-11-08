
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
                    const pcr = docSnap.data().PCR;
                    let today = datequery.methods.fetchTodayString();
                    let pcr_out = "No Test Needed";
                    for (const x of pcr) {
                        if (x >= today) {
                            pcr_out = x;
                            pcr_out = pcr_out.substring(0, 4) + "-" + pcr_out.substring(4, 6) + "-" + pcr_out.substring(6, 8)
                            break;
                        }
                    }

                    const checkout =docSnap.data().checkout;
                    var i = 0;
                    var j = "Overstay"
                    while (i < 15) {
                        if (datequery.methods.addDays(i) === checkout) {
                            j = String(i);
                            break;
                        }
                        i++;
                    }

                    return {
                        guestroom: inRoom,
                        guestfname: docSnap.data().Fname,
                        guestlname: docSnap.data().Lname,
                        guestlastfoodselectdate: docSnap.data().lastMealSelection,
                        guestlasthealthdeclaration: docSnap.data().lastHealthDeclaration,
                        guestnextpcr: pcr_out,
                        guestfinance: docSnap.data().finance,
                        guestcheckout: checkout,
                        guestremaining: j,
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

            const regMeta = await getDocs(collection(db, "RegInfo"));
            let regDict = {}
            regMeta.forEach((doc) => {
                var x = doc.data();
                regDict[x.RoomNumber] = x.Fname + "/" + x.Lname;
            })
            console.log(regDict)

            const roomMeta = await getDocs(collection(db, "RoomMeta"));
            let outputMeta = []
            roomMeta.forEach((doc) => {
                var x = doc.data();
                var output = [];

                for (var key in x) {
                    if (key !== 'vacant' && key !== 'total' && key !== 'price' && key !== 'name' && key !== 'identity') {
                        var roomStatus = x[key];
                        var roomGuest;
                        var checkout;
                        if (roomStatus !== "0") {
                            roomStatus = "Occupied"
                            checkout = x[key]
                            roomGuest = regDict[key]
                        } else {
                            roomStatus = "Free"
                            roomGuest = 'Not Applicable'
                            checkout = 'Not Applicable'
                        }
                        output.push({
                            roomNo: key,
                            roomStatus: roomStatus,
                            roomType: x['name'],
                            roomGuestName: roomGuest,
                            roomCheckout: checkout
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
                if (key !== 'vacant' && key !== 'total' && key !== 'price' && key !== 'name' && key !== 'identity') {
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
                if (x['identification'] !== 'block') {
                    outputMeta.push({
                        contains: x['contains'],
                        date: x['date'],
                        sender: x['sender'],
                        id: x['id']
                    })
                }
            })
            return outputMeta
        },

        async getHealthAlert() {
            const HealthOrder = await getDocs(collection(db, "HealthOrder"));
            let outputOrder = []
            HealthOrder.forEach((doc) => {
                var roomNumber = doc.id

                if (roomNumber !== "Blocker") {
                    var x = doc.data();

                    outputOrder.push({
                        room: roomNumber,
                        guestName: x['Guest'],
                        date: x['Date'],
                        symptoms: x['Symptoms'],
                        temp: x['Temperature'],
                        request: x['Request'],
                    })
                }
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

        async countStaff() {
            const staffRosterMeta = await getDocs(collection(db, "AdminAccount"));
            let outputMeta = 0
            staffRosterMeta.forEach(() => outputMeta += 1);
            return outputMeta;
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

        async getFeedback() {
            const feedbackData = await getDocs(collection(db, "Feedback"));
            let outputMeta = []
            feedbackData.forEach((doc) => {
                var x = doc.data();
                console.log("hi")
                outputMeta.push({
                    name: x['Name'],
                    room: x['Room'],
                    feedback: x['Feedback'],
                })
            })
            return outputMeta
        },

        async removeFeedback(room) {
            await deleteDoc(doc(db, "Feedback", room));
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
                healthCheckout: today
            })
            const guestDoc = await getDoc(doc(db, "RegInfo", roomNumber))
            var x = guestDoc.data()
            // add guest info to HealthCheckout
            await setDoc(doc(db, "HealthCheckout", roomNumber), x)

            var roomType = x["RoomType"]
            if (roomType === "Double Room") {
                roomType = "Double"
            } else if (roomType === "Single Room") {
                roomType = "Single"
            } else if (roomType === "Premium Double Room") {
                roomType = "PremiumDouble"
            } else {
                roomType = "Apartment"
            }

            const roomDoc = await getDoc(doc(db, "RoomMeta", roomType))
            var y = roomDoc.data().vacant
            // update checkout day for room
            await updateDoc(doc(db, "RoomMeta", roomType), {
                [roomNumber]: '0',
                vacant: String(parseInt(y) + 1)
            })

            // delete guest info from guest list
            const docRef2 = await deleteDoc(doc(db, "RegInfo", roomNumber));
            console.log(docRef2)
        },

        async getHealthCheckOut() {
            const guestDoc = await getDocs(collection(db, "HealthCheckout"))
            let outputMeta = []
            guestDoc.forEach((doc) => {
                var roomNumber = doc.id;

                if (roomNumber !== "Blocker") {
                    var x = doc.data();
                    outputMeta.push({
                        room: roomNumber,
                        name: x['Fname'] + " " + x['Lname'],
                        date: x['healthCheckout']
                    })
                }
            })
            return outputMeta
        },

        async quarantineCheckout(roomNumber) {
            await deleteDoc(doc(db, "HealthCheckout", roomNumber));
        },

        async removeHealthAlert(roomNumber) {
            await deleteDoc(doc(db, "HealthOrder", roomNumber));
        },

        async healthCheckin(roomNumber) {
            const guestDoc = await getDoc(doc(db, "HealthCheckout", roomNumber))
            var x = guestDoc.data()

            var roomType = x["RoomType"]
            if (roomType === "Double Room") {
                roomType = "Double"
            } else if (roomType === "Single Room") {
                roomType = "Single"
            } else if (roomType === "Premium Double Room") {
                roomType = "PremiumDouble"
            } else {
                roomType = "Apartment"
            }

            // assign new room to guest
            const newRoom = await this.assignRoom(roomType)

            // update room info in RoomMeta
            const roomDoc = await getDoc(doc(db, "RoomMeta", roomType))
            var y = roomDoc.data().vacant
            await updateDoc(doc(db, "RoomMeta", roomType), {
                [roomNumber]:  datequery.methods.fetchTodayString(),
                vacant: String(parseInt(y) - 1)
            })

            // add guest back to guest info
            await setDoc(doc(db, "RegInfo", newRoom), x)

            // update roomNumber of guest
            await updateDoc(doc(db, "RegInfo", newRoom), {
                RoomNumber: newRoom,
            })

            // delete guest from health check out
            await deleteDoc(doc(db, "HealthCheckout", roomNumber));
        },

        async getShopOrders() {
            const shopDoc = await getDocs(collection(db, "ShopOrder"))
            let outputMeta = []
            shopDoc.forEach((doc) => {
                var roomNumber = doc.id;

                if (roomNumber !== "block") {
                    var x = doc.data();
                    outputMeta.push({
                        room: x["Room"],
                        name: x["Name"],
                        order: x["ItemsOrdered"],
                        amount: x["PaymentAmount"],
                        delivery: x["DeliveryMethod"],
                        status: x["OrderStatus"],
                        time: x["TimeOfOrder"],
                    })
                }
            })
            return outputMeta
        },

        async completeShopOrder(roomNumber) {
            await updateDoc(doc(db, "ShopOrder", roomNumber), {
                OrderStatus: "Order Delivered"
            })
            console.log("Document successfully updated!", roomNumber)
        },

        async getBreakfast(){
            const shopDoc = await getDocs(collection(db, "Breakfast"))
            let outputMeta = []
            shopDoc.forEach((doc) => {
                var roomNumber = doc.id;

                if (roomNumber !== "block") {
                    var x = doc.data();
                    outputMeta.push({
                        room: roomNumber,
                        name: x["Name"],
                        selection: x["Selection"],
                        request: x["Request"],
                        status: x["OrderStatus"],
                        date: x["OrderDate"],
                    })
                }
            })
            return outputMeta
        },

        async getLunch(){
            const shopDoc = await getDocs(collection(db, "Lunch"))
            let outputMeta = []
            shopDoc.forEach((doc) => {
                var roomNumber = doc.id;

                if (roomNumber !== "block") {
                    var x = doc.data();
                    outputMeta.push({
                        room: roomNumber,
                        name: x["Name"],
                        selection: x["Selection"],
                        request: x["Request"],
                        status: x["OrderStatus"],
                        date: x["OrderDate"],
                    })
                }
            })
            return outputMeta
        },

        async getDinner(){
            const shopDoc = await getDocs(collection(db, "Dinner"))
            let outputMeta = []
            shopDoc.forEach((doc) => {
                var roomNumber = doc.id;

                if (roomNumber !== "block") {
                    var x = doc.data();
                    outputMeta.push({
                        room: roomNumber,
                        name: x["Name"],
                        selection: x["Selection"],
                        request: x["Request"],
                        status: x["OrderStatus"],
                        date: x["OrderDate"],
                    })
                }
            })
            return outputMeta
        },

        async completeBreakfast(roomNumber) {
            alert("You are going to update the Breakfast's order status for room " + roomNumber)
            await updateDoc(doc(db, "Breakfast", roomNumber), {
                OrderStatus: "Order Delivered"
            })
            console.log("Document successfully updated!", roomNumber)
        },

        async completeLunch(roomNumber) {
            alert("You are going to update the Lunch's order status for room " + roomNumber)
            await updateDoc(doc(db, "Lunch", roomNumber), {
                OrderStatus: "Order Delivered"
            })
            console.log("Document successfully updated!", roomNumber)
        },

        async completeDinner(roomNumber) {
            alert("You are going to update the Dinner's order status for room " + roomNumber)
            await updateDoc(doc(db, "Dinner", roomNumber), {
                OrderStatus: "Order Delivered"
            })
            console.log("Document successfully updated!", roomNumber)
        },

        async getAnnouncement(){
            const shopDoc = await getDocs(collection(db, "Notification"))
            let outputMeta = []
            shopDoc.forEach((doc) => {
                var ID = doc.id;

                if (ID !== "block") {
                    var x = doc.data();
                    outputMeta.push({
                        id: ID,
                        announcement: x["contains"]
                    })
                }
            })
            return outputMeta
        },
    }
}
