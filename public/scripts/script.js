
const render_login = (e) =>{
  e.preventDefault()
  try {
    $('#root').empty() 
    .load('/login #content') 
    
  } catch(e) {
    console.error(e); 
  }
  
  
}

const render_registration = (e) => {
  e.preventDefault()
  $('#root').empty() 


}

const render_index = (e) =>{
  console.log('now rendering index');
}
// init 
$(()=> {
$('#btn-login').on('click', render_login)  
$('.hm-lnk').on('click',render_index)
});