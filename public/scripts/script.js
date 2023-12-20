function loginHandler(e){
    console.log('you clicked');
    console.log(e);
}

function RegisterHandler(e){
    console.log('you clicked');
    console.log(e);
}


$(document).ready(() => {

    $('#login').click(loginHandler)
    $('#register').click(loginHandler)

});

