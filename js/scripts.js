$(document).ready(function() {

  $("#intro .clickable").click(function() {
    $("#intro .content").slideToggle();
  })
  $("#cSharp .clickable").click(function() {
    $("#cSharp .content").slideToggle();
  })
  $("#java .clickable").click(function() {
    $("#java .content").slideToggle();
  })
  $("#php .clickable").click(function() {
    $("#php .content").slideToggle();
  })
  $("#ruby .clickable").click(function() {
    $("#ruby .content").slideToggle();
  })

  $("#basic").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var dob = $("#born").val();
    var why = $("input:radio[name=why]:checked").val();
    var kind = $("input:radio[name=kind]:checked").val();

    if (!firstName || !lastName || !why || !kind) {
      alert("Please fill out all requested information");
    } else if (kind === "game") {
      $("#game").show();
      $(".submit").show();
    } else if (kind === "web") {
      $("#web").show();
      $(".submit").show();
    } else if (kind === "mobile") {
      $("#mobile").show();
      $(".submit").show();
    } else if (kind === "desktop") {
      $("#desktop").show();
      $(".submit").show();
    }

    $("#info").submit(function(event) {
      event.preventDefault();
      var web = $("#web").val();
      var mobile = $("#mobile").val();
      var game = $("#game").val();
      var desktop = $("#desktop").val();

      if (!web && !mobile && !game && !desktop) {
        alert("Please select an option");
      } else {
        // $("#intro .content").show();
        $("#tracks h5").show();
        $(".firstName").text(firstName);
        $("#tracks h4").hide();
      }


      if (web === "ux" || web === "design") {
        $("#java .recommend").show();
        $(".result").text("Java");
      } else if (web === "logic") {
        $("#ruby .recommend").show();
        $(".result").text("Ruby");
      } else if (mobile === "android") {
        $("#java .recommend").show();
        $(".result").text("Java");
      } else if (mobile === "windows") {
        $("#cSharp .recommend").show();
        $(".result").text("C Sharp");
      } else if (mobile === "ios") {
        $("#php .recommend").show();
        $(".result").text("PHP");
      } else if (game === "vr" || game === "mobile" || game === "pc") {
        $("#cSharp .recommend").show();
        $(".result").text("C Sharp");
      } else if (game === "web") {
        $("#php .recommend").show();
        $(".result").text("PHP");
      } else if (desktop === "windows") {
        $("#cSharp .recommend").show();
        $(".result").text("C Sharp");
      } else if (desktop === "mac") {
        $("#php .recommend").show();
        $(".result").text("PHP");
      } else if (desktop === "cross") {
        $("#java .recommend").show();
        $(".result").text("Java");
      }

    })
  })
})
