




$(document).ready(() => {
  console.log('index page');
  let obj = {
    title:'halo',
    characters:[
      'arbitar',
      'chief',
      'cortona',
      'johnson'
    ],
    release: 2001
  }

  let str = JSON.stringify(obj)

  console.log(obj);
  console.log(str);

});

