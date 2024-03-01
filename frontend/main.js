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
                this.serietv = response.data;
            });
        },

        // Metodo che modifica la serie
        fetchUpdateSerie(index, serie){
            const newstatus = !serie.done;

            const data= {
                index,
                name: serie.name,
                done: newstatus,
            };

            const params = {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            };

            axios.post('../backend/api/update-serie.php', data, params).then((response) =>{
                this.serietv = response.data;
            });
        },

        // Metodo che elimina una task
        fetchDeleteSerie(index){
            const data = {
                index,
            };

            const params = {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            };

            axios.post('../backend/api/delete-serie.php', data, params).then((response) =>{
                this.serietv = response.data;
            });
        },
    },

    mounted(){
        this.fetchSerieList();
    },
});

app.mount('#app');