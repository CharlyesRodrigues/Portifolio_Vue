<template>
     <Header />
    
  <h1 class=" 
  text-white-500 
  absolute 
  w-[49.4375rem] 
  h-[4.75rem] 
  left-[20.31rem]
  top-[10.5rem]
  not-italic
  font-medium
  text-2xl
  leading-[160%]
  text-center  
  
  "
  > Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:</h1>
 <Botao />

</template>

<script>




import Botao from './components/Botao.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: { 
  Botao,
  Header
  
 
 
  }

}
</script>


