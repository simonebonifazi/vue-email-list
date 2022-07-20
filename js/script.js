console.log('vue ok', Vue)

const app = new Vue({
    el: '#root',
    data: {
        mail: '',
        error: '',
    },
    computed: {

    },
    methods: {

    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mail = res.data.response
                console.log(res.data.response)
            }).catch(() => {
                this.error = 'Ops! Qualcosa è andato storto..'
            })
    }
})