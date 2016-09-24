window.onload = function() {
	var url = "https://restcountries.eu/rest/v1/all";

	function printText() {
		getAllTowns(printTowns);
	}

    function getAllTowns(success) {
        $.ajax({
            method: "GET",
            url: url,
            success: success
        });
    }

	function printTowns (data) {
		var startsWith = $('#search').val();
		var towns = [];

		for (var town in data) {
			towns.push(data[town].name);
		}
		var townsToDisplay = [];
		for (var i = 0; i < towns.length; i++) {
			if (town.toLowerCase().substring(0, startsWith.length) == startsWith.toLowerCase()) {
				townsToDisplay.push(towns[i]);
			}
		}

		console.log(townsToDisplay);

		townsToDisplay.forEach((x) => $('#inputText').append(x));
	}

	function getData(data) {
		$.get(url, data, success);
	}

	$('#search').on('input', printText);
};