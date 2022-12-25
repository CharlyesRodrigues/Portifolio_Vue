<template>
  <header />
  <tecnologias />
  <botao />

</template>

<script>




import Botao from './components/botao.vue';
import Header from './components/header.vue';
import tecnologias from './components/tecnologias.vue';

export default {
  name: 'App',
  components: {
    botao,
    header,
    tecnologias



  }

}
</script>


