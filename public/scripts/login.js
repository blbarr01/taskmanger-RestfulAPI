async function loginHandler(e){
    e.preventDefault()
    let form_data = new FormData(this)
    console.log(form_data);

    let test_entry = {
      email:'test@test.mail',
      password:'test1234'
    }
    try {
      let res = await fetch('/api/auth/login',{
        method:'POST',
        redirect:'follow',
        body: JSON.stringify(test_entry), // sub w/ form data for production
        headers:{
          "Content-Type": "application/json"
        }
      })
      
      let msg = await res.json()
      console.log(msg);
      if(res.status == 200){
        window.location.href='/tasks'
      }
    } catch (error) {
        console.error(error);
    }


  }


$(document).ready(function () {
    console.log('login page ready');    
    $('#login').on("submit",loginHandler)
});