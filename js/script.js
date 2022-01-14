//Partendo dal markup qui in allegato 
// (di cui in passato abbiamo fatto una versione simile in js plain), 
// rifare lo slider ma questa volta usando Vue.

new Vue ({
    el: '#app',
    name: 'Slider',
    data: {
        images: [
            'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',    
            'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            'https://images.unsplash.com/photo-1503682579489-1a53aff795af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1460398495418-62c9b5d79fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        ],
        currentIndex: 0,
        currentPoints: 0,
        // timer: null, //------AUTOPLAY CON TIMER
    },
    // mounted: function () { //------AUTOPLAY CON TIMER
    //     this.startRotation();
    // },
    methods: {
        prevImage: function () {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.images.length - 1;
            }
        },
        nextImage: function () {
            this.currentIndex++;
            if (this.currentIndex >= this.images.length) {
                this.currentIndex = 0;
            }
        },
        // startRotation: function() { //------ AUTOPLAY CON TIMER
        // this.timer = setInterval(this.nextImage, 3000);
        // },
    }
});