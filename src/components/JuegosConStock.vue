<template>
  <div>
    Juegos con stock: {{ $store.getters.cantidadDeProductosConStock }}

    <ul>
      <li v-for="(juego, index) in $store.state.juegos" :key="index">
        {{ juego.codigo }} |{{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}
        <button type="button" @click="agregarProducto(juego, index)">Vender</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JuegosConStock',
  components: {},
  methods: {
    agregarProducto(juego, index) {
      this.$store.dispatch('agregarProductosAlCarritoDeCompras', { juego, index })
    }
  }
}
</script>

<style></style>
