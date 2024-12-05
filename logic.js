// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Add click event to toggle dark mode
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text based on the theme
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = 'Switch to Light Theme';
  } else {
    themeToggleButton.textContent = 'Switch to Dark Theme';
  }
});
