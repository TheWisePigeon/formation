let nombres = [1, 2, 3, 10, 20, 7, 13, 50]

//map, filter, reduce

//MAP
const map = nombres.map( function(element){
  return element*2
} )
//console.log(map)

//FILTER
const nombres_pairs = nombres.filter(function(element){
  return element%2!==0  
})
const personnes = [
  {
    nom:"joseh",
    age:500
  },
  {
    nom:"koliko",
    age:98,
  },
  {
    nom:"zedeon",
    age:10000
  }
]

const jeunes = personnes.filter(function(e){
  return e.age<=500&&(e.nom.startsWith("j"))
})

console.log(jeunes)

const jeunes2 = personnes.filter( (element)=>{
  return element.age>500
} )

const jeunes22 = personnes.filter( element=>element.age>500 )

console.log(jeunes2, jeunes22)

