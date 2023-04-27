document.getElementById('removeButton').addEventListener('click', function() {
    var selectElement = document.getElementById('selectElement');
    var selectedOption = selectElement.selectedOptions[0];

    if (selectedOption) {
        selectElement.removeChild(selectedOption);
    } else {
        alert('Please select an option to remove');
    }
});