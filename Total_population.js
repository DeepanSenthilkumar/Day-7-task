let obj = new XMLHttpRequest();
obj.open('GET', 'https://restcountries.com/v3.1/all');
obj.responseType = 'json';

obj.send();
obj.onload = function (){
    let a = obj.response;
    //console.log(a);
     let population = a.map((items)=>{
        return items.population
     });
    //console.log(population);
    let res = population.reduce((a,b)=>{
        return a+b;
    });
    console.log(res);
}