const form = document.querySelector('.input-field');
const background = document.querySelector('.main');
const updateBlendMode = () => {
const selection = document.querySelector('.blends').value;
  $("#image2").css("mix-blend-mode",selection);
};
var slider = document.getElementById('slider');
var imageOP = document.getElementById("#image2")

$( document ).ready(function() {
  $("#image2").css("opacity",slider.value + "%")
});
// $('#slider').draggable();

$("#slider").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChange
});



function handleSlideChange(event,slider) {
  $("#image2").css("opacity",slider.value + "%")
  console.log(slider.value);
}

form.addEventListener('submit',(e) => {
  e.preventDefault();
});
 
form.addEventListener('change',() => {
  updateBlendMode();
});
 
updateBlendMode();
  
    
    
    
    


