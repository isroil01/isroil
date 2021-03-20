$(document).ready(function(){
    $('#hamburger').click(function(){
        $('nav ul').toggleClass('active');
    })
})
var bt = document.getElementById('top-bt');
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 0){
        bt.style.display = 'block';
        bt.style.transition = '0.3s linear';
    }else{
        bt.style.display = 'none';
    }
    
})
