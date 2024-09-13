window.addEventListener("load", function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&limit=5&appid=13228d9578002ed3c9cd462a7a4b01be&units=metric")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.document.querySelector(".city").textContent = result.name;
        //   온도
        this.document.querySelector(".temp").textContent = `${result.main.temp} \u00B0C`;
        //   경도
        this.document.querySelector("#longitude").textContent = result.coord.lon;
        // 위도
        this.document.querySelector("#latitude").textContent = result.coord.lat;
        
        // 날씨및 시간설정
        let dateTime = new Date(result.dt * 1000);
        // 로컬형식으로 변환
        let DateTime = dateTime.toLocaleString();
  // 도시 ID설정
  this.document.querySelector("#city-id").textContent = result.id
  // 시간
  this.document.querySelector("#datetime").textContent = DateTime
  
      })
      .catch((error) => console.error("Error:", error));
  });
  