let obj = new XMLHttpRequest();
obj.open('GET', 'https://restcountries.com/v3.1/all');
obj.responseType = 'json';

obj.send();
obj.onload = function (){
    let a = obj.response;
    // console.log(a);
    let a_countries = a.filter((items)=>{
        return items.continents == "Asia";
    });
    // console.log(a_countries)
    let b_countries = a_countries.map((items)=>{
        //return items.name.common;
        return items['name']['common'];

});
let countries = [];
a.forEach((items) => {
    countries.push(`country: ${items.name.common},capital: ${items.capital},flag: ${items.flag}`)
});
    console.log(countries);
}