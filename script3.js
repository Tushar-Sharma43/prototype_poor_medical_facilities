document.getElementById("view-profile-btn").addEventListener("click", function () {
    const aadhaarInput = document.getElementById("aadhaar-input").value;

    if (aadhaarInput.length === 12 && !isNaN(aadhaarInput)) {
        document.getElementById("profile-display").style.display = "block";
        alert("Profile loaded successfully!");
    } else {
        alert("Please enter a valid 12-digit Aadhaar number.");
    }
});
