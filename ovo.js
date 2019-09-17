const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu1');
    const navLinks = document.querySelectorAll('.menu1 li');

burger.addEventListener('click', () => { 
     nav.classList.toggle('nav-active');
});
navLinks.forEach((link, index) =>{
    // aranc ifi
    // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 3}s`;
    if(link.style.animatioan) {
        link.style.animatioan = '';  
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;  
    }

    //  burger.classList.toggle('toggle');
    });
};

 navSlide();


  let mek = document.getElementById('input2');
  let ereq = document.getElementById('input3');
  
  mek.onkeypress = function keyPress(event) {
    if(event.charCode == 13){
      let x = mek.value;
      let a = /^[a-zA-Z]+$/;
      if(x.length >=2 && x.match(a)){
        u1.style.display = 'block';
        ereq.focus();
        console.log(x)
      }else{
        alert('false')
      }
      
      }
    }



let unet =  document.getElementById('input3');
let hing = document.getElementById('input4');
  unet.onkeypress = function keyPress(event) {
    if(event.charCode == 13) {
      let x = unet.value;
      let a = /^[a-zA-Z]+$/;
      if(x.length >=2 && x.match(a)){
        u2.style.display = 'block';
        hing.focus();
        console.log(x)
      } else{
        alert('false')
      }
      
    }
  }


  let vec = document.getElementById('input4');
  let yot = document.getElementById('input5');
  vec.onkeypress = function keyPress(event) {
    if(event.charCode == 13) {
      let spr5 = vec.value;
      if(spr5.length >= 8) {
      let x = spr5.length - 10
      let y = spr5.length - 8
      let gmail = spr5.slice(x )
      let mail = spr5.slice(y )
      if (gmail == '@gmail.com' || mail == '@mail.ru' ) {
        console.log(spr5)
        u3.style.display = 'block';
       yot.focus(); 
      } else {
        alert('Wrong')
      }
    
    } else {
      alert('Wrong')
    }
  }
}

let ut = document.getElementById('input5');
let inn = document.getElementById('input6')

ut.onkeypress = function keyPress(event) {
  if(event.charCode == 13) {
    let x = ut.value;
    let a = /^[0-9]+$/;
    if(x.length ==9 &&  x.match(a)) {
      u4.style.display = 'block'
      inn.focus();
  }else {
    alert('false')
  }
}
}

let tas = document.getElementById('input6');
let erku = document.getElementById('input7');
 tas.onkeypress = function keyPress(event){
   if(event.charCode == 13) {
     let spr9 = tas.value;
     if(spr9.length >= 8 ) {
       console.log(spr9)
       u5.style.display = 'block';
       erku.focus()
     } else {
       alert('Wrong')
     }
   }
 }

 erku.onkeypress = function keyPress(event) {
   if(event.charCode == 13) {
     let x = tas.value;
     let y = erku.value;
     if(x === y) {
       alert('true')
     } else{
       alert('false')
     }
   }
 }

 

 

     
   
 
