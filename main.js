window.onload = function() {
    var baseUrl = 'https://restcountries.eu/';
    var endPoint = 'rest/v1/all';
    var allTowns = [];
    printText();

    function printText() {
        if (allTowns.length === 0) {
            getAllTowns(saveData).done(printTowns);
        }

        printTowns(allTowns);
    }

    function saveData(data) {
        for (var town in data) {
            allTowns.push(data[town].name);
        }        
    }

    function getAllTowns(success) {
        var promise = $.get(baseUrl + endPoint);

        return promise.done(success);
    }

    function printTowns () {
        var startsWith = $('#search').val();

        var townsToDisplay = [];
        for (var i = 0; i < allTowns.length; i++) {
            if (allTowns[i].toLowerCase().substring(0, startsWith.length) == startsWith.toLowerCase()) {
                townsToDisplay.push(allTowns[i]);
            }
        }

        $('#inputText').empty();
        townsToDisplay.forEach(design);
    }

    function design(item) {

        let element = `<div>${item}</div>`;

        $('body').append(element);
        $('div').css('background-color', 'red');

    }

	$('#search').on('input', printText);
};