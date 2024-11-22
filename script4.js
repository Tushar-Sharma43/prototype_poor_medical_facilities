function openDashboard() {
    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
}
function viewPage(pageName) {
    // Construct the target URL based on the page name
    const targetURL = `${pageName}.html`;

    // Redirect to the target URL
    window.location.href = targetURL;
}
