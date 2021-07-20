const app = Vue.createApp({
    // template: '<h1>Hello World!</h1>'
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app')