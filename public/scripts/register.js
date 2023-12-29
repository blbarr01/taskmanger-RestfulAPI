

function RegisterHandler(){
    console.log('you clicked');
}

$(document).ready(function () {
    console.log('register page ready');    
    $('#register').on('click', RegisterHandler)
});
