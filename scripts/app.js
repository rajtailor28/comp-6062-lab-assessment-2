/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {
            studentName: 'Rajkumar Tailor',
            pressure: 50,
            indicatorLevels: [
                { id: 'danger-low', status: 'danger', label: 'Danger - Low!', min: 0, max: 10 },
                { id: 'warn-low', status: 'warn', label: 'Warning - Low', min: 11, max:30 },
                { id: 'safe', status: 'safe', label: 'Safe', min: 31, max: 70 },
                { id: 'warn-high', status: 'warn', label: 'Warning - High', min: 71, max:90 },
                { id: 'danger-high', status: 'danger', label: 'Danger - High', min: 91,max: 100 }
                ]
                
        };
    },
    /// Define the methods for the app
    methods: {
        isActive(level) {
            return this.pressure >= level.min && this.pressure <= level.max;
            /// Logic here for if the pressure is within the level parameters return boolean
        }
        
    }
});

/// Mount the app to the #app element
app.mount('#app');