console.log('vue ok', Vue)

const app = new Vue({
    el: '#root',
    data: {
        error: '',
    },
    computed: {

    },
    methods: {

    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res.data.response)
            }).catch((error) => {
                this.error = 'Ops! Qualcosa è andato storto..'
            })
    }
})