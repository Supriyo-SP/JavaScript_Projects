const btn = document.getElementById('f11Button');

btn.addEventListener('click', () => {
    const elem = document.documentElement; // Targets the entire page

    if (!document.fullscreenElement) {
        // Enter Fullscreen
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } else {
        // Exit Fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});


 