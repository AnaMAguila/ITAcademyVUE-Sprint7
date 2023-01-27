<template>
    <div class="col bg-white mt-4 p-4 text-start">
        <p>Omple tots els camps si desitges guardar el teu pressupost</p>
        <form @submit.prevent="agregaPresupuesto">
            <span v-for="datos in datosFicha" :key="datos.etiqueta">
                <input type="text" class="inputDatos" :id="datos.etiqueta" :placeholder="datos.etiqueta" required>
            </span>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

        <h3 class="text-warning mt-4">Pressupostos</h3>

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
                <tr v-for="presupuestoItem in arrayPresupuestos" :key="presupuestoItem">
                    <th scope="row">{{ presupuestoItem.presupuesto }}</th>
                    <td>{{ presupuestoItem.cliente }}</td>
                    <td>
                        <img v-if="presupuestoItem.web" class="check-icon" src="@/assets/img/true.png" alt="">
                        <img v-if="!presupuestoItem.web" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td>
                        <p v-show="presupuestoItem.web === true">{{ presupuestoItem.pages }}</p>
                        <img v-if="!presupuestoItem.web" class="check-icon" src="@/assets/img/false.png" alt="">
                    </td>
                    <td>
                        <p v-show="presupuestoItem.web === true">{{ presupuestoItem.lang }}</p>
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
            arrayPresupuestos: []
        }
    },
    methods: {
        agregaPresupuesto() {
            const data = {
                id: this.arrayPresupuestos.length,
                presupuesto: document.getElementById("Pressupost").value,
                cliente: document.getElementById("Client").value,
                web: this.servicios[0].checked,
                pages: this.servicios[0].pages,
                lang: this.servicios[0].lang,
                seo: this.servicios[1].checked,
                publi: this.servicios[2].checked,
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

            console.log(this.arrayPresupuestos)

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