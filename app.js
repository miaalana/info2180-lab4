$(document).ready(function() {
  var xmlBtn = $('#sbtn');
  var res = $('#result');
  
  xmlBtn.on('click', function() {
    event.preventDefault();
    res.html('');

    let src= document.getElementById("search");
    let srch = DOMPurify.sanitize(src.value);
    
    let txt = "";
    if (srch == ''){
      $.ajax('http://localhost:8888/info2180-lab4/superheroes.php?query=', {
        method: "GET",
        success: function (data) {
          for (let m of data) { 
            txt+= '<li>'+m.alias+'</li>';
          }
          res.html('<p>'+txt+'</p>');
      },
      error: function (xhr, status, error) {
        alert('There was a problem with the request.');
    }});
    }

    else{
      url = 'http://localhost:8888/info2180-lab4/superheroes.php?query=' + srch;
    $.ajax(url, {
      method: "GET",
      dataType: "json", 
      success: function (data) {
        if (data) {
          res.html('<h3>' + data.alias.toUpperCase() + '</h3>' +
          '<h4>' + "A.K.A " +data.name.toUpperCase() + '</h4>' +
          '<p>' + data.biography + '</p>');
        } else {
          res.html('SUPERHERO NOT FOUND');
        }
      },
      error: function (error) {
        console.error('Error:', error);
      } });
    } 
    src.value= "";
  });

});

