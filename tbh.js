function postThought() {
    var input = document.getElementById('thoughtInput');
    var thoughtsContainer = document.getElementById('thoughtsContainer');
    var thought = input.value.trim();

    if (thought) {
        var thoughtDiv = document.createElement('div');
        thoughtDiv.className = 'thought';
        thoughtDiv.textContent = thought;
        thoughtsContainer.appendChild(thoughtDiv);
        input.value = '';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker');
    const tickerItems = document.querySelectorAll('.ticker-item');

    ticker.innerHTML += ticker.innerHTML;

    function startTicker() {
        let tickerWidth = ticker.scrollWidth / 2;
        let scrollAmount = 0;

        function scrollTicker() {
            if (scrollAmount >= tickerWidth) {
                scrollAmount = 0;
            }
            ticker.style.transform = `translateX(${-scrollAmount}px)`;
            scrollAmount += 1;
            requestAnimationFrame(scrollTicker);
        }

        scrollTicker();
    }

    startTicker();
});
