//Window resize content
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth,
      gridUnit = 100/12; /*Use 1200px as 100%, 6x6grid*/

    $(".container__grid").css({"margin": gridUnit + "% 0" });
    $(".grid__row").css({"margin": gridUnit/20 + "% auto"
                         // "padding": "0 " + gridUnit/2 + "%",
                         });
    $(".grid__col").css({"padding": "0 " + gridUnit + "%" });
    $("hr").css({"max-width": IW + "px",
                 "margin": gridUnit/12 + "% " + gridUnit/4 + "%"});

   for( var i = 0; i < 13; i++) {
      $(".grid__col--"+ i ).css({"width": (IW/12)*i + "px"});
   }
}
