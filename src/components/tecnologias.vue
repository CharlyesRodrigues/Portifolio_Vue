<template>

<div class=" absolute  w-[49.5625rem] h-[10.8125rem] left-[20.25rem]  top-[19.0625rem] bg-gray-500   
outline outline-offset-1 outline-dourado
 rounded-lg   

/* Dark/surface-secondary */
" >


        
        
             
        
       

</div>



<div  class=" absolute w-[9.8125rem] h-32 left-[23.75rem] top-[20.4375rem] font-sans not-italic  font-semibold text-xl leading-8   text-white-600 ">

 <ul v-for=" coluna1 in lista1" v-bind:key="coluna1.id " ><li>{{coluna1}}</li></ul>  
 
</div>

<div  class=" absolute w-[13.875rem] h-32 left-[39.6875rem] top-[20.4375rem] font-sans not-italic  font-semibold text-xl leading-8   text-white-600 ">

<ul v-for=" coluna2 in lista2" v-bind:key="coluna2.id " ><li>{{coluna2}}</li></ul>  

</div>



<div  class=" absolute w-[6.625rem] h-16 left-[59.6875rem] top-[20.4375rem] font-sans not-italic  font-semibold text-xl leading-8  text-white-600 ">

<ul v-for=" coluna3 in lista3" v-bind:key="coluna3.id " ><li>{{coluna3}}</li></ul>  

</div>

















      
        
</template>

<script>

 
  

export default {
 name: 'tecnologias-',
 components: { 
   
 },

 data(){

return{

lista1: ["JavaScript","React","Vue Js", "Tailwind CSS"],
lista2 : ["Styled Components", "Saas", "Node", "TypeScript"],
lista3: ["Angular", "Java"]
}



 }


}
</script>