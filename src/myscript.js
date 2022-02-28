var captcha;

function generate(){
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      document.getElementById('entercaptcha').value ='';
    captcha= chars[Math.floor(Math.random()*chars.length)];
    console.log(captcha);
    for( let i =0 ;i<4 ; i++){
        captcha = captcha+chars[Math.floor(Math.random()*chars.length)];
    }
    document.getElementById('newcaptcha').value = captcha;
}
function check(){
    var check = document.getElementById('entercaptcha').value;
    if (check == captcha){
        alert('captcha macthed');
        generate();
    }
    else {
        alert('try again');
    }
}