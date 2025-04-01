const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const originalText = toggleBtn.textContent; // Store the original button text

toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
        toggleBtn.textContent = 'Close Menu'; // Change text when menu opens
    } else {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        toggleBtn.textContent = originalText; // Reset to original text when menu closes
    }
});
