<template>

  <cabecalho />
  <tecnologias />
  <botao />

</template>

<script>




import botao from './components/botao.vue';
import cabecalho from './components/header.vue';
import tecnologias from './components/tecnologias.vue';

export default {
  name: 'App',
  components: {
    botao,
    cabecalho,
    tecnologias,
    


  }

}
</script>


