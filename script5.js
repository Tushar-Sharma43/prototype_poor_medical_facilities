// JavaScript to enhance schemes page functionality

// Sample data for health schemes
const schemesData = {
    "Pradhan Mantri Jan Arogya Yojana (PMJAY)": "Provides financial protection up to ₹5 lakhs per family for secondary and tertiary care.",
    "Ayushman Bharat Scheme": "Focuses on preventive care and wellness through Health and Wellness Centers.",
    "Universal Health Coverage": "Aims to ensure that all people receive the health services they need without financial hardship."
};

// Add event listeners to list items
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list li");

    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            toggleDetails(item);
        });
    });
});

// Toggle details for a scheme
function toggleDetails(item) {
    const schemeName = item.textContent.trim();
    const existingDetails = item.querySelector(".details");

    if (existingDetails) {
        // Remove details if already present
        item.removeChild(existingDetails);
    } else {
        // Add details if not present
        const details = document.createElement("div");
        details.className = "details";
        details.textContent = schemesData[schemeName] || "Details not available.";
        item.appendChild(details);
    }
}
