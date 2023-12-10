let obj = new XMLHttpRequest();
obj.open('GET', 'https://restcountries.com/v3.1/all');
obj.responseType = 'json';

obj.send();
obj.onload = function (){
    let res = obj.response;
     //console.log(a);
    let resp = res.filter((items)=>{
        return items.currencies.USD.name == "United States dollar";
    })
    console.log(resp)
    let countries = resp.map((items)=>{
        // return items.name.common;
        return (`country: ${items.name.common}`);

});
    console.log(countries);
}