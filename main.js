window.onload = function() {
   
    function printText() {
        console.log($('#search').val());          
    }

    $('#go').on('click', printText);
};  