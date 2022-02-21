"use strict";

$(function () {

  calc_price();

  $(".size").on("change", function () {
    calc_price();
  });


  $(".checkbox").on("change", function () {
    calc_price();
  });

  $("#pizanum").on("change", function () {
    calc_price();
  });

});

  function calc_price() {

    let size = $(".size:checked").val();
    let topping_count = $("#topping input:checkbox:checked").length;
    let piza_num = $("#pizanum").val();
    let size_price = 0;
    let topping_price = 0;

    if (size === "M") {
      size_price = 1380;
      topping_price = 200 * topping_count;
    } else {
      size_price = 2380;
      topping_price = 300 * topping_count;
    }

    let price = (size_price + topping_price) * piza_num;
    $("#totalprice").text(price.toString());
  }

