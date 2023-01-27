<template>
    <div class="opc-web">
        <table>
            <tr>
                <td>Número de pàgines</td>
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
                    </div>
                </td>
            </tr>
            <tr>
                <td>Número d'idiomes</td>
                <td>
                    <div class="input-group input-number-group">
                        <div class="input-group-button">
                            <span class="input-number-increment" @click="addLang">+</span>
                        </div>
                        <input class="input-number" type="number" v-model.number="this.servicio.lang" min="1">
                        <div class="input-group-button">
                            <span class="input-number-decrement" @click="removeLang">-</span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
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
.opc-web {
    margin-top: 20px;
    width: fit-content;
    border: 4px solid #000;
    padding: 20px 10px 20px 10px;
    border-radius: 20px;
}

td {
    padding: 10px;
}

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
</style>