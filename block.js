// O'ng tugmachani bloklash
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('O\'ng tugmani bosish bloklangan!');
});

// F12, Ctrl+Shift+I, Ctrl+Shift+C yoki Ctrl+Shift+J tugmachalarini bloklash
document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        alert('F12 bloklangan!');
    }
    // Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        alert('Developer Tools bloklangan!');
    }
});
