//Window resize content
//-
$(document).ready(loadContent);
$(window).resize(loadContent);

function loadContent() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12; /*Use 1200px as 100%, 6x6grid*/

   //misc text positions
   $(".container__img-scroll").css({"width": gridUnit*6 + "%",
                                    "height": "100%",
                                    "top": "0%"});
   $(".grid__col-scroll").css({"width": gridUnit*6 + "%" });
   $(".grid__col-title-scroll").css({"padding": "0"});
   $(".text__nav-topleft").css({"left": gridUnit/8 + "%"});
   $(".text__nav-topright").css({"right": gridUnit/8 + "%"});
   $(".text__nav-bottomleft").css({"left": gridUnit/8 + "%"});
   $(".text__nav-bottomright").css({"right": gridUnit/8 + "%"});
   $(".text__title-scroll").css({"margin-top": gridUnit*1.5 + "%" });
   $(".container__img-scroll ").css({"opacity": "1"});

   setTimeout(position, 1500);
}

function position(){
  $(".text__title").css({"opacity": "1"});
  $(".text__nav").css({"opacity": "1"});
  $(".text__nav-topleft").css({"top": 100/12/4 + "%"});
  $(".text__nav-topright").css({"top": 100/12/4 + "%"});
  $(".text__nav-bottomleft").css({"bottom": 100/12/4 + "%"});
  $(".text__nav-bottomright").css({"bottom": 100/12/4 + "%"});
}

//Scroll-through code for slideshow-ish transitions
//-
$(document).ready(function() {
  var counter = 1,
      //prevent scrolling+transitions from going too fast
      switchScrollUp = true,
      switchScrollDown = true;

  for( var i = 0; i < 6; i++) {
     $(".img-scroll--"+ i ).css({"z-index": i * -1});
  }

  $(document).bind('mousewheel', function(e){
    // console.log(counter);
    // console.log(e.originalEvent.wheelDelta + " " + switchScroll);
      if (e.originalEvent.wheelDelta < -50) {
        $(".text__title-scroll").css({"font-size": "50px",
                                      "margin-top": -100/8.5 +"%"
                                    });
        $(".grid__col-title-scroll").css({"padding": "0 " + 100/6 + "%"});
      }

      if (e.originalEvent.wheelDelta > 50 && switchScrollUp && (counter>0)) {
          switchScrollUp = false;
          setTimeout(function(){
            switchScrollUp = true;
            counter--;
          }, 1000);

          $(".img-scroll--"+ (counter)).css({"top" :  0 + "px" });
      }

      if (e.originalEvent.wheelDelta < -50 && switchScrollDown && (counter<5)) {
        switchScrollDown = false;
        setTimeout(function(){
          switchScrollDown = true;
          counter++;
        }, 1000);

        $(".img-scroll--"+ (counter)).css({"top" : -1 * ($(".img-scroll--" + counter).innerHeight()) + "px" });
      }
  });
});
