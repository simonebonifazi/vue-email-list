console.log('vue ok', Vue)

const app = new Vue({
    el: '#root',
    data: {

    },
    computed: {

    },
    methods: {

    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res.data.response)
            })
    }
})