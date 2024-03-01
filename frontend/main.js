const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title: 'Lista Serie Tv',
            serietv: [ ],
        };
    },

    methods:{
        fetchSerieList(){
            axios.get('../backend/api/serie-list.php').then((response) => {
                this.serietv = response.data;
            });
        },
    },

    mounted(){
        this.fetchSerieList();
    },
});

app.mount('#app');