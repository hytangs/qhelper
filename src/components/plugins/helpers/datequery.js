export default {
    methods: {
        fetchTodayString() {
            const today = new Date();
            const todayString = today.toISOString().substring(0, 10);
            return todayString
        },

        dateStringCompareCurrent(dateString) {
            return dateString < this.fetchTodayString()
        }
    }
}
