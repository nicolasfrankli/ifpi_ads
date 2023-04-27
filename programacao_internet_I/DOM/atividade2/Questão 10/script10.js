document.addEventListener('DOMContentLoaded', function() {
    var btnAdd = document.getElementById('btnAdd');
    var btnRemove = document.getElementById('btnRemove');
    var select1 = document.getElementById('select1');
    var select2 = document.getElementById('select2');

    btnAdd.addEventListener('click', function() {
        var selectedOptions = Array.from(select1.selectedOptions);

        selectedOptions.forEach(function(option) {
            if (!select2.querySelector('option[value="' + option.value + '"]')) {
                var newOption = document.createElement('option');
                newOption.value = option.value;
                newOption.text = option.text;
                select2.add(newOption);
            }
        });
    });

    btnRemove.addEventListener('click', function() {
        var selectedOption = select2.options[select2.selectedIndex];
        if (selectedOption) {
            select2.removeChild(selectedOption);
        }
    });
});