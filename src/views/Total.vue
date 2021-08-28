<template>
  <div>
    <div class="font-weight-bold">Juegos comprados</div>
    <div>
      <ul>
        <li v-for="juego in $store.state.carritoDeCompras" :key="juego.codigo">
          codigo: {{ juego.codigo }} | {{ juego.nombre }} | Cantidad: {{ juego.stock }} | Precio:${{ juego.precio }}
        </li>
      </ul>
    </div>
    <div class="font-weight-bold">
      TOTAL A PAGAR : <span>${{ $store.state.totalVentas }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Total'
}
</script>

<style></style>
