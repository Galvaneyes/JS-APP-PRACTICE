window.onload = function() {
   
    function printText() {
        let user = $('#search').val();
        console.log(user);

        let promise = new Promise();

        
        $.get('registred/' + user);

        $('#search').val('');        

    }

    $('#go').on('click', printText);
};  

function printUser(user) {
    console.log('This is ' + user);
}

function printError() {
    console.log('Fail!');
}