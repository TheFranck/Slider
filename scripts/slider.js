$(document).ready(function() {

  var sliderHtml = " "; // variable qui va stocker le html de notre slider
  var sliderData;
  var height = "500";


  initializeSlider();
  createSlider();
  render();


  function left()
  {
    var previousImage = $('#selected').prev()[0];


    if (previousImage == undefined) {
      previousImage = $('#slider-container div ').last();
    }
      $('#selected').css('display', 'none');
      $('#selected').removeAttr('id');

      $(previousImage).css('display', 'flex').css('justify-content','center');
      $(previousImage).attr('id', 'selected');
  }


  function right()
  {
    var nextImage = $('#selected').next()[0];

    if (nextImage == undefined) {
      nextImage = $('#slider-container div ').first();
    }
    $('#selected').css('display', 'none');
    $('#selected').removeAttr('id');

    $(nextImage).css('display', 'flex').css('justify-content','center');
    $(nextImage).attr('id', 'selected');

    console.log('right');
  }


  function initializeSlider()
  {
    sliderData = $('#slider-container img');
    // Load html hook
    if (sliderData.length == 0) {
      // if the hook is broken, throw error to stop script
      throw "ERREUR de SELECTION";
    }
    $('#slider-container').remove();

  }


  function render()
  {
    $('body').append(sliderHtml);
  }


  function createSlider()
  {

    sliderHtml += "<div id='slider-container' style='display:flex; flex-direction:row; overflow:hidden; background-color: #333;position: relative;'>";


    $('body').on('click', "button[data-action='left']", left);


      for (var i = 0; i < sliderData.length; i++) {
        var display = " ";
        var id = " ";

          if (i == 0) {
            display = "display:flex; justify-content:center;";
            id = "selected";
          } else {
            display = "display:none;";
          }

        sliderHtml += "<div id='" + id + "'style='width:100%; height:500px;" + display + "'>";
        sliderHtml += "<img src='" + $(sliderData[i])[0].src + "' style='height:" + height + "px;width:auto'>";

        sliderHtml += "</div>";
      }



    sliderHtml += "</div>";

    sliderHtml += "<div style='display: flex;flex-direction: row;width: 99%;justify-content: space-between;position: absolute;top: 21%; z-index: 1111;'>";

    sliderHtml += "<button data-action='left' style='background-color:transparent; border:none; color: white;font-size: 50px;'><</button>";
    sliderHtml += "<button data-action='right' style='background-color:transparent; border:none; color:white; font-size:50px;'>></button>";

    sliderHtml += "</div>";

    sliderHtml += "</div>";
    $('body').on('click', "button[data-action='left']", left);
    $('body').on('click', "button[data-action='right']", right);

  }

});
