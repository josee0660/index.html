document.getElementById('envelope').addEventListener('click', function() {
    // Animation effect
    this.style.animation = 'bounce 0.5s';
    
    // Redirect after animation
    setTimeout(() => {
        window.location.href = 'https://your-link-here.com'; // Replace with your link
    }, 500);
});

// Keyframes for the bounce animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
`;
document.head.appendChild(style);
