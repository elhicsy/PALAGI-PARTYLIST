function toggleSettings() {
    const settingsMenu = document.getElementById('settings-menu');
    if (settingsMenu.style.display === 'block') {
        settingsMenu.style.display = 'none';
    } else {
        settingsMenu.style.display = 'block';
    }
}

// Hide the settings menu if clicked outside of it
document.addEventListener('click', function(event) {
    const settingsMenu = document.getElementById('settings-menu');
    const settingsIcon = document.querySelector('.settings-icon');

    if (!settingsMenu.contains(event.target) && !settingsIcon.contains(event.target)) {
        settingsMenu.style.display = 'none';
    }
});
