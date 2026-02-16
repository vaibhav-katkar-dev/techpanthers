document.getElementById("submit-btn").addEventListener("click", function() {
    alert("Search: " + document.getElementById("city-search").value + "\nStore Type: " + document.getElementById("store-type").value);
});

// 🔹 Function to create different types of charts
function createChart(ctx, type, labels, data, backgroundColor, borderColor) {
    new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: "Value",
                data: data,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
                tooltip: { 
                    enabled: true,
                    mode: 'index',
                    intersect: false
                }
            },
            interaction: {
                mode: "nearest",
                intersect: false
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// 🔹 Creating different graphs with improved design
createChart(
    document.getElementById("populationChart"),
    "bar",
    ["High", "Medium", "Low"],
    [50, 35, 15],
    ["#007bff", "#28a745", "#dc3545"],
    ["#0056b3", "#1e7e34", "#c82333"]
);

createChart(
    document.getElementById("revenueChart"),
    "line",
    ["Q1", "Q2", "Q3", "Q4"],
    [5000, 7000, 10000, 15000],
    ["rgba(255, 99, 132, 0.5)"],
    ["rgba(255, 99, 132, 1)"]
);

createChart(
    document.getElementById("growthChart"),
    "doughnut",
    ["Increasing", "Stable", "Declining"],
    [60, 25, 15],
    ["#ffc107", "#17a2b8", "#6c757d"],
    ["#e0a800", "#138496", "#5a6268"]
);

// 🔹 Search Suggestion for Indian Cities using API
const cityInput = document.getElementById("city-search");
const suggestions = document.getElementById("suggestions");
let citiesjs = [];

// 🔹 Fetch Indian Cities from API
async function fetchCities() {
    try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: "India" })
        });
        const data = await response.json();
        citiesjs = data.data;
    } catch (error) {
        console.error("Error fetching cities:", error);
    }
}

// 🔹 Filter and show suggestions
cityInput.addEventListener("input", function () {
    const value = cityInput.value.toLowerCase();
    suggestions.innerHTML = "";
    if (value === "") {
        suggestions.style.display = "none";
        return;
    }

    const filteredCities = citiesjs.filter(city => city.toLowerCase().includes(value));
    filteredCities.forEach(city => {
        const div = document.createElement("div");
        div.textContent = city;
        div.addEventListener("click", function () {
            cityInput.value = city;
            suggestions.style.display = "none";
        });
        suggestions.appendChild(div);
    });
    suggestions.style.display = "block";
});

fetchCities();
