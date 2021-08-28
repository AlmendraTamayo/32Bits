<template>
  <div>
    <h1>Búsquedas</h1>
    <input
      type="text"
      placeholder="Codigo del juego"
      :value="$store.state.busquedaPorCodigo"
      @input="$store.commit('SET_BUSQUEDA', $event.target.value)"
    />
    <ul>
      <li
        v-for="juego in $store.getters.productosFiltrados"
        :key="juego.codigo"
        :style="{ 'background-color': juego.color }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}
      </li>
    </ul>
    <Listado />
  </div>
</template>

<script>
import Listado from '@/components/Listado.vue'
export default {
  name: 'BusquedasView',
  components: {
    Listado
  }
}
</script>

<style></style>
