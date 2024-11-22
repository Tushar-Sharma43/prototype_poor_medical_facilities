// JavaScript for hospitals page

// Sample hospital data
const hospitals = [
    { name: "Apollo Hospitals", location: "New Delhi", specialty: "Cardiology" },
    { name: "Fortis Healthcare", location: "Mumbai", specialty: "Neurology" },
    { name: "AIIMS", location: "New Delhi", specialty: "General Medicine" },
    { name: "Narayana Health", location: "Bangalore", specialty: "Orthopedics" },
    { name: "Max Healthcare", location: "Chennai", specialty: "Pediatrics" }
];

// Load hospitals on page load
document.addEventListener("DOMContentLoaded", () => {
    displayHospitals(hospitals);

    const searchBar = document.getElementById("search");
    searchBar.addEventListener("input", filterHospitals);
});

// Function to display hospitals
function displayHospitals(hospitalList) {
    const hospitalContainer = document.getElementById("hospital-list");
    hospitalContainer.innerHTML = "";

    if (hospitalList.length === 0) {
        hospitalContainer.innerHTML = "<p>No hospitals found.</p>";
        return;
    }

    hospitalList.forEach(hospital => {
        const hospitalCard = document.createElement("div");
        hospitalCard.className = "hospital-card";

        hospitalCard.innerHTML = `
            <h3>${hospital.name}</h3>
            <p class="hospital-details"><strong>Location:</strong> ${hospital.location}</p>
            <p class="hospital-details"><strong>Specialty:</strong> ${hospital.specialty}</p>
        `;

        hospitalContainer.appendChild(hospitalCard);
    });
}

// Function to filter hospitals based on search input
function filterHospitals() {
    const query = document.getElementById("search").value.toLowerCase();

    const filteredHospitals = hospitals.filter(hospital => {
        return (
            hospital.name.toLowerCase().includes(query) ||
            hospital.location.toLowerCase().includes(query) ||
            hospital.specialty.toLowerCase().includes(query)
        );
    });

    displayHospitals(filteredHospitals);
}
