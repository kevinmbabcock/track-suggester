

$(document).ready(function() {
  $("#basic").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var dob = $("#born").val();
    var why = $("input:radio[name=why]:checked").val();
    var what = $("input:radio[name=what]:checked").val();

    if (!firstName || !lastName || !dob || !why || !what) {
      debugger;
      alert("Please fill out all requested information");
    } else if (what === "game") {
      $("#game").show();
    } else if (what === "web") {
      $("#web").show();
    } else if (what === "mobile") {
      $("#mobile").show();
    } else if (what === "desktop") {
      $("#desktop").show();
    }
  })
  $("#info").submit(function(event) {
    event.preventDefault();
    var web = $("#web").val();
    var mobile = $("#mobile").val();
    var game = $("#game").val();
    var desktop = $("#desktop").val();


  })

})
