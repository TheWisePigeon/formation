const personne = {
    nom:"",
    age:10
}

const stringg = JSON.stringify(personne)
console.log(stringg)
//envoie par http
{
    const personne = JSON.parse(stringg)
    console.log(personne)
}