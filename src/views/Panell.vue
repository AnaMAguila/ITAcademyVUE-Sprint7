<template>
    <div class="col-11 col-lg-9 bg-white mt-3 p-1 pt-4 pb-4 border border-5 border-dark rounded-4 text-start">
        <table>
            <tr>
                <td  class="p-2 m-2">Número de pàgines</td>
                <td>
                    <div class="input-group input-number-group">
                        <div class="input-group-button">
                            <!-- Span en lugar de button para controlar más el css -->
                            <span class="input-number-increment" @click="addPages">+</span>
                        </div>
                        <!-- v-model se comunica con el array para enviar y recibir el valor -->
                        <input class="input-number" type="number" v-model.number="this.servicio.pages" min="1">
                        <div class="input-group-button">
                            <span class="input-number-decrement" @click="removePages">-</span>
                        </div>
                        <div>
                            <button type="button" class="btn-info" data-bs-toggle="modal" data-bs-target="#infoPages"></button>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td  class="p-2 m-2">Número d'idiomes</td>
                <td>
                    <div class="input-group input-number-group">
                        <div class="input-group-button">
                            <span class="input-number-increment" @click="addLang">+</span>
                        </div>
                        <input class="input-number" type="number" v-model.number="this.servicio.lang" min="1">
                        <div class="input-group-button">
                            <span class="input-number-decrement" @click="removeLang">-</span>
                        </div>
                        <div>
                            <button type="button" class="btn-info" data-bs-toggle="modal" data-bs-target="#infoLang"></button>
                        </div>
                    </div>
                </td>
            </tr>
        </table>

        <!-- Modal pages -->
        <div class="modal fade" id="infoPages" tabindex="-1" aria-labelledby="infoPagesLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        En aquest component ha d'indicar el nombre de pàgines que tindrà el seu lloc web
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal languages -->
        <div class="modal fade" id="infoLang" tabindex="-1" aria-labelledby="infoLangLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        En aquest component ha d'indicar el nombre d'idiomes que tindrà el seu lloc web
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Panell',
        props: ['servicio'],
        data (){
            return {
                pages: this.servicio.pages,
                lang: this.servicio.lang
            }
        },
        // ya no hace falta un observador porque he añadido los botones que controlan los valores de los inputs 
        // watch: { // cuando cambia el valor de los inputs se envía al array de servicios
        //     pages: function(value){
        //         this.servicio.pages=value
        //     },
        //     lang: function(value){
        //         this.servicio.lang=value
        //     }
        // }
        methods: {
        addPages() {
            this.servicio.pages += 1;
        },
        removePages() {
            if (this.servicio.pages > 1) this.servicio.pages -= 1;
        },
        addLang() {
            this.servicio.lang += 1;
        },
        removeLang() {
            // En rubrica dice no menor de una unidad, en el enunciado muestra 0 en el vídeo
            // Dejo valor mínimo 1
            if (this.servicio.lang > 1) this.servicio.lang -= 1;
        }
    }
    }
</script>

<style>

.input-number-group input[type=number]::-webkit-inner-spin-button,
.input-number-group input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
}

.input-number-group .input-group-button {
    line-height: calc(60px/2 - 5px);
    margin: 1px;
}

.input-number-group .input-number {
    width: 40px;
    border: none;
}

.input-number-group .input-number,
.input-number-group .input-number-decrement,
.input-number-group .input-number-increment {
    border: none;
    height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
}

.input-number-group .input-number-decrement,
.input-number-group .input-number-increment {
    display: inline-block;
    width: 30px;
    color: #fff;
    background-color: #f77554;
    border-radius: 7px;
    text-align: center;
    cursor: pointer;
    font-size: 2rem;
    margin: 0 3px 0 3px;
}

.btn-info {
    background-image: url('../assets/img/info.svg');
    background-color: #fff;
    background-size: contain;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    vertical-align: middle;
    margin-left: 5px;
}

.btn-info:hover {
    background-color: #fff;
    border: none;
    outline: none;
}

.btn-info:focus {
    background-color: #fff;
    border: none;
    outline: none;
}

.modal-dialog {
    position: fixed;
    bottom: 0;
    left: 0%;
    right: 0%;
}

.modal-content {
    border: none;
    border-radius: 20px;
}

.modal-body {
    border-radius: 20px;
    border: 4px solid #000;
    padding: 30px;
}


</style>