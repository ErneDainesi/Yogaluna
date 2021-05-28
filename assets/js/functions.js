function show_header_content() {
  mobile_icon_transformation();
  $("#header-content").toggle(1000);
}

function mobile_icon_transformation() {
  let line1 = $("#mobile-icon span:first-child");
  let line2 = $("#mobile-icon span:nth-child(2)");
  let line3 = $("#mobile-icon span:last-child");

  if (line1.attr("style") == undefined) {
    line2.attr("style", "width:0;");
    line1.attr("style", "transform:rotate(45deg);");
    line3.attr("style", "transform:rotate(-45deg);");
  } else {
    line1.removeAttr("style");
    line2.removeAttr("style");
    line3.removeAttr("style");
  }
}

function change_web_icon() {
  let promotion_msj = document
    .getElementById("categories-separation")
    .getBoundingClientRect();
  if (promotion_msj.top <= 210 && promotion_msj.top >= -300) {
    $("#categories-separation").css({
      "background-attachment": "fixed",
      "background-position": "center",
    });
  } else {
    $("#categories-separation").css({ "background-attachment": "local" });
    if (promotion_msj.top >= 210) {
      $("#categories-separation").css({ "background-position": "top" });
    } else if (promotion_msj.top <= -300) {
      $("#categories-separation").css({ "background-position": "bottom" });
    }
  }
}
