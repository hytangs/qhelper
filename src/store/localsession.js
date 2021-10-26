export default {
    methods: {
        initializeStorage() {
            localStorage.adminuser = null;
            localStorage.adminpass = null;
            localStorage.adminadmitted = false;
            localStorage.adminzone = 0;
            localStorage.guestuser = null;
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
        }
    }
}
