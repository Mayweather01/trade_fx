// Get current date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();

    // Day, Week, Month, Year
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, options);

    // 12-hour format with leading zeros for hours and minutes
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the HTML element
    dateTimeElement.textContent = `${dateStr}, ${hours}:${minutes}:${seconds} ${ampm}`;

    // Update every second
    setTimeout(updateDateTime, 1000);
}

// Run the function when the page loads
updateDateTime();
