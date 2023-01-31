<template>
    <div class="col bg-white mt-1 p-4 text-start">

        <p>Omple tots els camps si desitges guardar el teu pressupost</p>
        <form @submit.prevent="agregaPresupuesto">
            <span v-for="datos in datosFicha" :key="datos.etiqueta">
                <input type="text" class="inputDatos" :id="datos.etiqueta" :placeholder="datos.etiqueta" required>
            </span>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

        <h3 class="text-warning mt-4">Pressupostos</h3>
        <hr>

        <div class="text-end">
            <input type="text" placeholder="Cerca pressupost o client" class="btn btn-outline-warning" v-model="busqueda">
            <button type="button" class="btn btn-outline-warning m-1" v-on:click="ordenaAz">Ordenar A-Z</button>
            <button type="button" class="btn btn-outline-warning m-1" v-on:click="ordenaData">Ordenar per data</button>
            <button type="button" class="btn btn-outline-warning m-1"
                v-on:click="ordenaReinicia">Reinicialitzar</button>
        </div>
        <table class="table table-striped mt-2">
            <thead>
                <tr>
                    <th scope="col">Pressupost</th>
                    <th scope="col">Client</th>
                    <th scope="col">Web</th>
                    <th scope="col">Pàgines</th>
                    <th scope="col">Idiomes</th>
                    <th scope="col">SEO</th>
                    <th scope="col">Publicitat</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="presupuestoItem in arrayOrdenado" :key="presupuestoItem">
                    <th scope="row">{{ presupuestoItem.presupuesto }}</th>
                    <td>{{ presupuestoItem.cliente }}</td>
                    <td>
                        <img v-if="presupuestoItem.web" class="check-icon" src="@/assets/img/true.png" alt="">
                        <img v-if="!presupuestoItem.web" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td>
                        <p v-show="presupuestoItem.web === true || presupuestoItem.web === 'true'">{{ presupuestoItem.pages }}</p>
                        <img v-if="!presupuestoItem.web" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td>
                        <p v-show="presupuestoItem.web === true || presupuestoItem.web === 'true'">{{ presupuestoItem.lang }}</p>
                        <img v-if="!presupuestoItem.web" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td>
                        <img v-if="presupuestoItem.seo" class="check-icon" src="@/assets/img/true.png" alt="">
                        <img v-if="!presupuestoItem.seo" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td>
                        <img v-if="presupuestoItem.publi" class="check-icon" src="@/assets/img/true.png" alt="">
                        <img v-if="!presupuestoItem.publi" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td class="text-danger font-weight-bold">{{ presupuestoItem.total }}€</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'PressupostList',
    props: ['servicios', 'newTotal'],
    data() {
        return {
            datosFicha: [
                { etiqueta: "Pressupost" },
                { etiqueta: "Client" }
            ],
            arrayPresupuestos: [],
            newArray: [],
            busqueda: ""
        }
    },
    computed: {
        arrayOrdenado: function () {
            //Clonación del array pasado por props
            this.newArray = [].concat(this.arrayPresupuestos);

            if (this.busqueda) {
                this.busqueda.toLocaleLowerCase();

                this.array = this.newArray.filter(elemento =>
                    elemento.presupuesto.toLocaleLowerCase().includes(this.busqueda) ||
                    elemento.cliente.toLocaleLowerCase().includes(this.busqueda)
                );
                
                this.newArray = [].concat(this.array);
            }
            return this.newArray
        }
    },
    methods: {
        agregaPresupuesto() {
            const data = {
                id: this.arrayPresupuestos.length,
                presupuesto: document.getElementById("Pressupost").value,
                cliente: document.getElementById("Client").value,
                web: JSON.parse(this.servicios[0].checked),
                pages: this.servicios[0].pages,
                lang: this.servicios[0].lang,
                seo: JSON.parse(this.servicios[1].checked),
                publi: JSON.parse(this.servicios[2].checked),
                total: this.newTotal,
                fecha: new Date()
            }

            if (this.newTotal > 0) {
                this.arrayPresupuestos.push(data)
                document.getElementById("alerta").style.display = "none"
                document.getElementById("Pressupost").value = "",
                    document.getElementById("Client").value = "",
                    this.servicios[0].checked = false
                this.servicios[0].pages = 1
                this.servicios[0].lang = 1
                this.servicios[1].checked = false
                this.servicios[2].checked = false

            } else if (this.newTotal == 0) {
                document.getElementById("alerta").style.display = "inline"
            }
        },
        ordenaAz: function () {
            this.arrayOrdenado.sort((a, b) => {
                if (a.presupuesto == b.presupuesto) {
                    return 0;
                }
                if (a.presupuesto < b.presupuesto) {
                    return -1;
                }
                return 1;
            });
        },
        ordenaData: function () {
            this.arrayOrdenado.sort((a, b) => {
                if (a.fecha == b.fecha) {
                    return 0;
                }
                if (a.fecha < b.fecha) {
                    return -1;
                }
                return 1;
            });
        },
        ordenaReinicia: function () {
            this.busqueda = ""
            
            this.arrayOrdenado.sort((a, b) => {
                if (a.id == b.id) {
                    return 0;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 1;
            });
        }
    }
}
</script>

<style>
.inputDatos {
    height: 36px;
    border-radius: 5px;
    border: 1px solid #333;
    margin: 0 5px 5px 0;
    padding: 10px;
    vertical-align: middle;
}

#alerta {
    display: none;
}

.check-icon {
    width: 10px;
}
</style>