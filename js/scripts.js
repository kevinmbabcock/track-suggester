

$(document).ready(function() {
  $("#basic").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var dob = $("#born").val();
    var why = $("input:radio[name=why]:checked").val();
    var what = $("input:radio[name=what]:checked").val();

    if (!firstName || !lastName || !dob || !why || !what) {
      // alert("Please fill out all requested information");
    } else if (what === "game") {
      $("#game").show();
      $(".submit").show();
    } else if (what === "web") {
      $("#web").show();
      $(".submit").show();
    } else if (what === "mobile") {
      $("#mobile").show();
      $(".submit").show();
    } else if (what === "desktop") {
      $("#desktop").show();
      $(".submit").show();
    }
  })
  $("#info").submit(function(event) {
    event.preventDefault();
    var web = $("#web").val();
    var mobile = $("#mobile").val();
    var game = $("#game").val();
    var desktop = $("#desktop").val();

    if (web || mobile || game || desktop) {
      $("#intro").show();
    }

    if (web === "ux" || web === "design") {
      $("#java").show();
    } else if (web === "logic") {
      $("#ruby").show();
    } else if (mobile === "android") {
      $("#java").show();
    } else if (mobile === "windows") {
      $("#cSharp").show();
    } else if (mobile === "ios") {
      $("#php").show();
    } else if (game === "vr" || game === "mobile" || game === "pc") {
      $("#cSharp").show();
    } else if (game === "web") {
      $("#php").show();
    } else if (desktop === "windows") {
      $("#cSharp").show();
    } else if (desktop === "mac") {
      $("#php").show();
    } else if (desktop === "cross") {
      $("#java").show();
    }


  })
})
