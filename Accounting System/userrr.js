// Simulate loading participants and completed data
document.addEventListener('DOMContentLoaded', () => {
    const participantsCount = document.getElementById('participants-count');
    const completedPercentage = document.getElementById('completed-percentage');

    // Example data (can be replaced with actual API calls)
    const totalParticipants = 120;
    const completedTasks = 90;

    participantsCount.textContent = `${totalParticipants} Participants`;
    completedPercentage.textContent = `${Math.round((completedTasks / totalParticipants) * 100)}% Completed`;
});

// Logout button functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    alert('Logging out...');
    window.location.href = 'login.html'; // Redirect to login page
});
