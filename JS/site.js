let btn = document.querySelector('#copy');
btn.addEventListener('click', function(e) {
  let textarea = document.querySelector('.text');
  textarea.select();
  document.execCommand('copy');
  
});
let btn1 = document.querySelector('#copy1');
btn1.addEventListener('click', function(s) {
  let textarea1 = document.querySelector('.text1');
  textarea1.select();
  document.execCommand('copy');
  
});