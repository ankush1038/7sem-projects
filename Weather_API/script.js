document.getElementById("weather").addEventListener("submit", function(e) {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "86eb05c19970426096a81001242307";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (!data.location) {
            alert("City Not Found");
            return;
        }
        document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
    })
    .catch(error => {
        console.log('Error fetching the weather data:', error);
    });
}); 
