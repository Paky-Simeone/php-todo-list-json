const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title: 'Lista Serie Tv',
            serietv: [ ],

            newserie: {
                name: '',
                done: false,
            },
        };
    },

    methods:{
        // Metodo che recupera la serielist dalla api
        fetchSerieList(){
            axios.get('../backend/api/serie-list.php').then((response) => {
                this.serietv = response.data;
            });
        },

        // Metodo che invia una nuova serie alla api e ne riceve la lista aggiornata
        fetchStoreSerie(){
            
            // dati da postare
            const data ={
                name: this.newserie.name,
                done: false,
            };

            // parametri da aggiungere alla richiesta
            const params = {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }

            // richiesta
            axios.post('../backend/api/store-serie.php', data, params).then((response) => {
                console.log(response.data);
            });
        },
    },

    mounted(){
        this.fetchSerieList();
    },
});

app.mount('#app');