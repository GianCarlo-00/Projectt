// Function to dynamically generate report links
function generateReportLinks() {
    const reportLinks = document.getElementById('report-links');

    // Example links for different reports
    const reports = [
        { name: 'Daily Reports', url: '#' },
        { name: 'Monthly Report', url: '#' },
    ];

    reports.forEach(report => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = report.url;
        link.textContent = report.name;
        listItem.appendChild(link);
        reportLinks.appendChild(listItem);
    });
}

// Function to fetch and display report data
async function fetchReportData() {
    try {
        // Fetch data from the backend API (replace the URL with your actual API endpoint)
        const response = await fetch('http://localhost:5000/reports');
        
        if (!response.ok) {
            throw new Error('Failed to fetch reports');
        }

        const data = await response.json();

        // Populate the table with fetched data
        const tableBody = document.getElementById('report-table-body');
        tableBody.innerHTML = ''; // Clear any existing rows

        if (data.length === 0) {
            // Display a "no data" message if no reports are available
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 4;
            cell.textContent = 'No data available';
            row.appendChild(cell);
            tableBody.appendChild(row);
            return;
        }

        data.forEach(report => {
            const row = document.createElement('tr');

            const schoolNameCell = document.createElement('td');
            schoolNameCell.textContent = report.school_name;
            row.appendChild(schoolNameCell);

            const timeCell = document.createElement('td');
            timeCell.textContent = report.time;
            row.appendChild(timeCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = report.date;
            row.appendChild(dateCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = report.status;
            row.appendChild(statusCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching report data:', error);
    }
}

// Event listener for logout button
document.getElementById('logout-btn').addEventListener('click', () => {
    // Clear any stored session data (if applicable)
    localStorage.removeItem('token'); // Example: clearing token from localStorage
    alert('You have been logged out!');
    window.location.href = 'index.html'; // Redirect to login page
});

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateReportLinks(); // Populate the sidebar links
    fetchReportData(); // Fetch and display report data
});
