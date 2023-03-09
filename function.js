window.print()
document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
})
