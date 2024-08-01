document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.rotate');
    projects.forEach(project => {
        const randomRotation = Math.floor(Math.random() * 11) - 5; // Random number between -5 and 5
        project.style.transform = `rotate(${randomRotation}deg)`;
    });
});