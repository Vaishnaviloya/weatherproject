const cityName = document.getElementById("cityName")
const submitbtn = document.getElementById("submitbtn")
const city_name = document.getElementById("city_name")
const temp_realvalue =document.getElementById("temp_realvalue")
const temp_status = document.getElementById("temp_status")

const dataHide = document.querySelector(".middle_layer")

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value
    if(cityVal === ""){
        city_name.innerText = "Write before search"
        dataHide.classList.add("data_hide")
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6a789b746a2473a61a9c573cd89315f4`
        const response = await fetch(url)
        const data =await response.json()
        const arrData = [data]
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
        temp_realvalue.innerText = arrData[0].main.temp
        const tempMood = arrData[0].weather[0].main


        //condition to check weather

        if(tempMood == "Clear"){
            temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>"
        }else  if(tempMood == "Clouds"){
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#eccc68;'></i>"
        }else  if(tempMood == "Rain"){
            temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color:#eccc68;'></i>"
        }else{
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#eccc68;'></i>"
        }
        dataHide.classList.remove("data_hide")

        }catch{
            city_name.innerText = "Enter correct city name"
            dataHide.classList.add("data_hide")
        }

    }
}

submitbtn.addEventListener("click", getInfo)