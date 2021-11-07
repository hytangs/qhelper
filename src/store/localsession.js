import datequery from "../components/plugins/helpers/datequery";

export default {
    methods: {
        initializeStorage() {
            localStorage.adminuser = null;
            localStorage.adminpass = null;
            localStorage.adminadmitted = false;
            localStorage.adminzone = 0;
            localStorage.guestroom = null;
            localStorage.guestfname = null;
            localStorage.guestlname = null;
            localStorage.guestlastfoodselectdate = '';
        },

        initializeAdminSession(user, pass, zone) {
            localStorage.adminuser = user;
            localStorage.adminpass = pass;
            localStorage.adminadmitted = true;
            localStorage.adminzone = zone;
        },

        getAdminZone() {
            return localStorage.adminzone;
        },

        getAdminName() {
            let out;
            try {
                out = localStorage.adminuser;
                if (out === 'null') {
                    out = 'Unauthorized User'
                }
            } catch (x) {
                out = 'Unauthorized User'
            }
            return out
        },

        getGuestRoom() {
            let out;
            try {
                out = localStorage.guestroom;
                if (out === 'null') {
                    out = 'Undefined'
                }
            } catch (x) {
                out = 'Undefined'
            }
            return out
        },

        getGuestName() {
            let out;
            try {
                out = localStorage.guestfname + " " + localStorage.guestlname;
                if (out === 'null null') {
                    out = 'Unauthorized Guest'
                }
            } catch (x) {
                out = 'Unauthorized Guest'
            }
            return out
        },

        initializeGuestSession(table) {
            localStorage.guestroom = table.guestroom;
            localStorage.guestfname = table.guestfname;
            localStorage.guestlname = table.guestlname;
            localStorage.guestlastfoodselectdate = table.guestlastfoodselectdate;
            localStorage.guestlasthealthdeclaration = table.guestlasthealthdeclaration;
            localStorage.guestnextpcr = table.guestnextpcr;
            localStorage.guestfinance = table.guestfinance;
            localStorage.guestremaining = table.guestremaining;
            localStorage.guestcheckout = table.guestcheckout;
        },

        getGuestFinance() {
            return localStorage.guestfinance;
        },

        getGuestRemaining() {
            return localStorage.guestremaining;
        },

        getGuestLastHealthDeclare() {
            return localStorage.guestlasthealthdeclaration;
        },

        getGuestCheckout() {
            return localStorage.guestcheckout;
        },

        getGuestPCR() {
            return localStorage.guestnextpcr;
        },

        setDeclareHealthToday() {
            localStorage.guestlasthealthdeclaration = datequery.methods.fetchTodayString()
        }
    }
}
