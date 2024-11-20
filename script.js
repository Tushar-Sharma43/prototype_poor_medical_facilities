document.addEventListener('DOMContentLoaded', () => {
    console.log("Emergency India site is ready!");
});

// Alert function for buttons
function showAlert(issue) {
    alert(`Learn more about ${issue}. Stay tuned for updates on solutions.`);
}
// Alert function for contacting NGOs
function contactNgo(ngoName) {
    alert(`You can contact ${ngoName} for more details. Thank you for your interest!`);
}
// Search Functionality Placeholder
document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for hospitals near "${query}"...`);
    } else {
        alert('Please enter a location or hospital name to search.');
    }
});

document.getElementById('view-profile-btn').addEventListener('click', function () {
    const aadhaarInput = document.getElementById('aadhaar-input').value;
    const profileContainer = document.getElementById('profile-container');

    if (aadhaarInput.length === 12 && /^\d+$/.test(aadhaarInput)) {
        profileContainer.classList.remove('hidden');
        alert('Profile Loaded Successfully!');
    } else {
        alert('Please enter a valid 12-digit Aadhaar number!');
        profileContainer.classList.add('hidden');
    }
});

