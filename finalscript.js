document.addEventListener('DOMContentLoaded', function() {
    let counter = 1;
    let interval;

    function startAutoSlide() {
        interval = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 8) {
                counter = 1;
            }
        }, 5000);
    }

    startAutoSlide();

    document.querySelectorAll('.manual-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(interval);
        });
    });
});