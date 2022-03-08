var button = documet.queryselector('.button')
var inputvalue = documet.queryselector('.inputvalue')
var name = document.queryselector('.name');
var desc = document.queryselector('.desc');
var temp =document.queryselector('.temp');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=97c6be3c684736623c0943d8d966644b')
.then(response => response.json())
.then(data => {
    var namevalue = data['name'];
    var tempvalue =data['main']['temp'];
    var descvalue =data['weather'][0]['description'];

    name.innerHTML =namevalue;
    temp.innerHTML =tempvalue;
    desc.innerHTML =descvalue;
})

.catch(err => alert("wrong city name!"))
})
