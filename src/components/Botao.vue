<template>



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
  
  ">{{ texto }}</h1>

  <button @click="portugues"
    class="absolute  w-[8.3125rem] h-[3.1875rem] left-[29.375rem] top-[51.3125rem]  bg-gray-500 rounded-lg "> </button>
  <img src="./../assets/flags/brasil.png" class=" absolute w-5 h-5 left-[30.125rem] top-[52.3125rem] ">
  <h1 class="
  absolute
  w-[5.0625rem]
  h-[1.625rem]
  left-[31.875rem]
  top-[52.125rem]
  font-sans
  not-italic
  font-semibold
  text-base
  leading-normal
 text-white-600
   
  
  ">Português</h1>





  <button @click="ingles" class="  
  absolute 
  w-[8.3125rem]
  h-[3.1875rem]
  left-[40.8125rem]
  top-[51.3125rem]

  /* Dark/surface-secondary */
  bg-gray-500
  rounded-lg
  
  "></button>

  <img src="./../assets/flags/usa.png" class=" absolute w-5 h-5 left-[42.625rem] top-[52.3125rem]  ">
  <h1 class=" 
    absolute
    w-[2.9375rem] 
    h-[1.625rem] 
    left-[44.375rem] 
    top-[52.125rem] 
    font-sans not-italic 
    font-semibold 
    text-base 
    leading-normal 
    text-white-600    ">Inglês</h1>




  <Button @click="espanhol" class="  
  absolute 
  w-[8.3125rem]
  h-[3.1875rem]
  left-[52.25rem]
  top-[51.3125rem]

  /* Dark/surface-secondary */
  bg-gray-500
  rounded-lg
  
  "></Button>
  <div>
    <img src="./../assets/flags/spain.png" class="absolute w-5 h-5 left-[53.3125rem] top-[52.3125rem]">
    <h1 class="
    absolute
    w-[4.5rem]
    h-[1.625rem]
    left-[55.0625rem]
    top-[52.125rem]
    font-sans not-italic 
    font-semibold 
    text-base 
    leading-normal 
    text-white-600
    
    
    
    ">Espanhol</h1>
  </div>
</template>
  
<script>




export default {
  name: 'botao-',
  components: {

  },
  data() {
    return {

      texto: ' Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:',

    }
  },

  methods: {
    portugues() {

      this.texto = ' Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:'


    },
    ingles() {

      this.texto = 'Hello, my name is Charlyes Souza Rodrigues and I am a Front-end developer, Technologies that I have experiences:'
    },
    espanhol() {

      this.texto = 'Hola, mi nombre es Charlyes Souza Rodrigues y soy desarrollador Front-end, Tecnologías que tengo experiencias:'
    },


  }
}
</script>