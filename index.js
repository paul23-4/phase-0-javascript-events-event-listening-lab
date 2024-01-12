function addingEventListener() {
    const input = document.getElementById('input');

    // Add an event listener
    input.addEventListener('click', function() {
        console.log('Input clicked!');
    });
}

// Export addingEventListener for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addingEventListener
    };
}
