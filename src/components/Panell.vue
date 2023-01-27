<template>
    <div class="opc-web">
        <table>
            <tr>
                <!-- v-model envia el valor del input -->
                <td>Número de pàgines</td>
                <td><input type="text" v-model.number="pages"></td>
            </tr>
            <tr>
                <td>Número d'idiomes</td>
                <td><input type="text" v-model.number="lang"></td>
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
        watch: { // cuando cambia el valor de los inputs se envía al array de servicios
            pages: function(value){
                this.servicio.pages=value
            },
            lang: function(value){
                this.servicio.lang=value
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
</style>