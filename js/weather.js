window.addEventListener("load", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Daegu&limit=5&appid=4585f9a141685838477c3d755916c17b&units=metric"
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      this.document.querySelector(".city").textContent = result.name;
      // 온도
      this.document.querySelector(".temp").textContent = `${result.main.temp} \u00B0C`;
      // 경도
      this.document.querySelector("#longitude").textContent = result.coord.lon;
      // 위도
      this.document.querySelector("#latitude").textContent = result.coord.lat;
      // 구름
      this.document.querySelector("#city-clouds").textContent = result.clouds.all;
      // 바람 속도
      this.document.querySelector("#city-wind").textContent = result.wind.speed;
      // 날씨 및 시간 설정
      let dateTime = new Date(result.dt * 1000);
      // 로컬 형식으로 변환
      let DateTime = dateTime.toLocaleString();
      // 도시 ID 설정
      this.document.querySelector("#city-id").textContent = result.id;
      // 시간
      this.document.querySelector("#datetime").textContent = DateTime;
      // 날씨에 따른 배경 이미지 변경 아이콘 추가
      // 현재 날씨 아이콘
      let wiconUrl = `<img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="${result.weather[0].description}">`;
      this.document.querySelector(".today-icon").innerHTML = wiconUrl;
      // 날씨에 따른 배경 변경
      let wCondition = result.weather[0].main;
      let backgroundUrl = "";
      switch (wCondition) {
        case "Clouds":
          backgroundUrl = "images/weather.jpg";
          break;
        case "Clear":
          backgroundUrl = "images/clear.jpg";
          break;
        case "Thunderstorm":
          backgroundUrl = "images/Thunderstorm.jpg";
          break;
        case "Drizzle":
          backgroundUrl = "images/Drizzle.jpg";
          break;
        case "Rain":
          backgroundUrl = "images/rain.jpg";
          break;
        case "Snow":
          backgroundUrl = "images/snow.jpg";
          break;
        case "Atmosphere":
          backgroundUrl = "images/angae.jpg";
          break;
        default:
          backgroundUrl = "images/Atmosphere.jpg";

      }
      this.document.body.style.backgroundImage = `url('${backgroundUrl}')`;
      this.document.body.style.backgroundRepeat = "no-repeat";
      this.document.body.style.backgroundSize = "cover";
      this.document.body.style.height = "100vh";
    })
    .catch((error) => console.error("Error:", error));
});
