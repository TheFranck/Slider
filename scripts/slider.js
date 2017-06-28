$(document).ready(function() {
  initializeSlider();



  function initializeSlider()
  {
    var sliderData = $('#slider-container img');
    // Load html hook
    if (sliderData.length == 0) {
      // if the hook is broken, throw error to stop script
      throw "ERREUR de SELECTION";
    }
    $('#slider-container').remove();
  }



});
