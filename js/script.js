
const app = new Vue({
    el: '#root',
    data: {
        mails: [],
        error: '',
    },
    computed: {

    },
    methods: {


    },
    created() {
        for (let i = 0; i < 9; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mails.push(res.data.response)
                    console.log(res.data.response)
                }).catch(() => {
                    this.error = 'Ops! Qualcosa è andato storto..'
                })
        }
    }
})