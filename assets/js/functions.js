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

  console.log(promotion_msj.top);
  if (promotion_msj.top <= 190 && promotion_msj.top >= -325) {
    console.log("Tiene que moverse");
    $("#categories-separation").css({ "background-attachment": "fixed" });
  } else {
    console.log("No tiene que moverse");
    console.log($("#categories-separation"));

    $("#categories-separation").css({ "background-attachment": "local" });
  }
}
