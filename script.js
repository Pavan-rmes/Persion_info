var img = document.querySelector(".persion_img")
var Persion_info = document.querySelector(".persion_info")

function fun()
{
    fetch("https://randomuser.me/api/")
    .then(response=>response.json())
    .then(data=>{
        var info = data.results[0]
        var name = info.name.first+" " +info.name.last
        var Age = info.dob.age
        var city = info.location.city
        Persion_info.innerHTML = `name : ${name} <br> Age : ${Age} <br> city : ${city}`
        img.src =  info.picture.large
    })
    .catch(err=>{
        console.log(err)
    })
}
