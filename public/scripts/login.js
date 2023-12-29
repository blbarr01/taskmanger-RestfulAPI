async function loginHandler(e){
    e.preventDefault()
    let form_data = new FormData(this)
    console.log(form_data);

    let res = await fetch('/api/auth/login',{
      method:'POST',
      redirect:'follow',
      body: JSON.stringify(form_data),
      headers:{
        "Content-Type": "application/json"
      }
    })

    console.log(res);

  }


$(document).ready(function () {
    console.log('login page ready');    
    $('#login').on("submit",loginHandler)
});