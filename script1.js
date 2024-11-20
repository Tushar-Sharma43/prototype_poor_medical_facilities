// Search Functionality Placeholder
document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for hospitals near "${query}"...`);
    } else {
        alert('Please enter a location or hospital name to search.');
    }
});
