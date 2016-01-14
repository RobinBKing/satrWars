$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var side = $("select#side").val();
    var humanNon = $("select#humanNon").val();
    var gender = $("select#genderPreference").val();
    var force = $("select#force").val();
    
    $(".theForce").hide();
    $(".bruteForce").hide();
    $(".result").hide();

    if (side === "dark") {
      $("#vader").show();
    }
    else {
      if (humanNon === 'human'){
        if (gender === 'male'){
          if (force === 'theForce') {
            $("#luke").show();
            $(".theForce").show();
          }
          else {
            $("#han").show();
          }
        }
        else {
          if(gender === 'female')
            if(force === 'theForce') {
            $("#rey").show();
            $(".theForce").show();
            }
            else {
            $("#leia").show();
            }
          else {
            if (force === 'theForce') {
            $("#luke").show();
            $("#rey").show();
            $(".theForce").show();
            }
          }
        }
      }
      else {
        if(force === 'theForce') {
          $("#yoda").show();
          $(".theForce").show();
        }
        else {
          $("#chewy").show();
          $(".bruteForce").show();
        }
      }
    }
    //
    // $("#result").show();
    event.preventDefault();
  });
});
