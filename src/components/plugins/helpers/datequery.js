export default {
    methods: {
        fetchTodayString() {
            const today = new Date();
            const todayString = today.toISOString().substring(0, 4)
                + today.toISOString().substring(5, 7)
                + today.toISOString().substring(8, 10);
            return todayString
        },

        dateStringCompareCurrent(dateString) {
            return dateString <= this.fetchTodayString();
        },

        addDays(days) {
            var date = new Date();
            date = new Date(date.setDate(date.getDate() + (days-1)));
            return date.toISOString().substring(0, 4)
                + date.toISOString().substring(5, 7)
                + date.toISOString().substring(8, 10)
        }
    }
}
