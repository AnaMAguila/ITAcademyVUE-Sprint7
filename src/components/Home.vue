<template>
    <div class="form">
        <p>¿Què vols fer?</p>
        <p v-for="servicio in servicios" :key="servicio">
          <input type="checkbox" :id="servicio.title" v-model="servicio.checked" @click="isChecked(servicio)">
          {{ servicio.title }}
        </p>
        Preu: {{ total }}€   
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      servicios: [
        {
          title: "Obtenir el pressupost d'una pàgina web (500 €)",
          price: 500,
          checked: false
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
    isChecked(servicio) {
      servicio.checked ? this.total -= servicio.price : this.total += servicio.price
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

  .form {
    margin: 10px;
  }
</style>