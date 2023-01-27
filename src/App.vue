<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view/>
  </div> 
</template>

<style>
#app{
  text-align: center;
  margin-top: 10px;
}
</style>