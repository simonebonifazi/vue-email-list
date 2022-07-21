
const app = new Vue({
    el: '#root',
    data: {
        mails: [],
        emailNumbers: 10,
        error: '',
    },
    computed: {


    },
    methods: {
        createNewEmail() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mails.push(res.data.response)
                    console.log(res.data.response)
                }).catch(() => {
                    this.error = 'Ops! Qualcosa è andato storto..'
                })
        }

    },
    created() {
        for (let i = 0; i <= 9; i++) {
            this.createNewEmail()
        }
    }
})