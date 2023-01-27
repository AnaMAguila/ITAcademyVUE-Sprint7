<template>
    <div class="container">
        <div class="row">
            <div class="col-10 col-md-7 col-lg-6 col-xl-5 bg-white mt-4 p-4 text-start">
                <p>¿Què vols fer?</p>
                <p v-for="servicio in servicios" :key="servicio">
                    <input type="checkbox" :id="servicio.title" v-model="servicio.checked">
                    {{ servicio.title }}

                <div v-if="servicio.pages != null && servicio.checked == true">
                    <Panell :servicio=servicio></Panell>
                </div>
                </p>
                <p id="alerta" class="text-danger">Has de seleccionar almenys un servei</p>
                <p>Preu: {{ newTotal }}€</p>
                <p></p>
                <button class="btn btn-outline-warning mt-1 border border-3 border-warning" @click="$router.go(-1)">Enrere</button>
            </div>  
            <PressupostList :servicios="servicios" :newTotal="newTotal"></PressupostList>         
        </div>        
        
    </div>
</template>

<script>
import Panell from './Panell.vue'
import PressupostList from './PressupostList.vue';

export default {
    name: 'Home',
    components: {
        Panell,
        PressupostList
    },
    data() {
        return {
            servicios: [
                {
                    title: "Obtenir el pressupost d'una pàgina web (500 €)",
                    price: 500,
                    checked: false,
                    pages: 1,
                    lang: 1
                },
                {
                    title: "Fer una campanya SEO (300 €)",
                    price: 300,
                    checked: false
                },
                {
                    title: "Fer una campanya de publicitat (200 €)",
                    price: 200,
                    checked: false
                }
            ],
            total: 0
        }
    },
    methods: {
        // Si el servicio está seleccionado suma en el total, en caso contrario, resta
        // isChecked(servicio) {
        //   servicio.checked ? this.total -= servicio.price : this.total += servicio.price
        // }
    },
    computed: {
        // calcula el presupuesto total con páginas e idiomas incluidos
        newTotal() {
            let total = 0;

            this.servicios.map(function (servicio) {
                if (servicio.checked) {
                    total += servicio.price;

                    if (servicio.pages > 0 && servicio.lang > 0) {
                        total += (servicio.pages * servicio.lang * 30)
                    }
                }
            })
            return total;
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>