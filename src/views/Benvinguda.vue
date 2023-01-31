<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-11 bg-white mt-5 p-5 border border-5 border-dark-subtle rounded-4">
                <h1>Benvingut/da a Pressupost App</h1>
                <h4>Ens encanta tenir-te amb nosaltres!</h4>
                <p>Aquí podràs calcular el pressupost de la teva web en línia d'una forma còmoda i sense cap mena de
                    compromís.</p>
                <p>Per a començar pressiona el botó</p>
                <button class="btn btn-outline-warning m-1 border border-3 border-warning" @click="$router.push('home')">Home</button>
            </div>
        </div>
    </div>
</template>