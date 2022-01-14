//Partendo dal markup qui in allegato 
// (di cui in passato abbiamo fatto una versione simile in js plain), 
// rifare lo slider ma questa volta usando Vue.

new Vue ({
    el: '#app',
    data: {
        currentIndex: 0,
        sliderImages: [
            {
                image: 'ciao://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
            },
            {
                image: 'https://images.unsplash.com/photo-1642155549055-ff351114a8a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            },
            {
                image: 'https://images.unsplash.com/photo-1642106520907-a7e77f7738ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            },
            {
                image: 'https://images.unsplash.com/photo-1642097538727-a3ff8624258e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            }
        ]
    },
    methods: {
        prevImage: function () {
            this.currentIndex--;
        },
        nextImage: function () {
            this.currentIndex++;
        },
    }
});