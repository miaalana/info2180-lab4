$(document).ready(function() {
  var xmlBtn = $('#sbtn');

  xmlBtn.on('click', function() {
    $.ajax('http://localhost:8888/info2180-lab4/superheroes.php', {
      method: "GET",
      success: function (data) {
        alert(data);
    },
    error: function (xhr, status, error) {
      alert('There was a problem with the request.');
  }
});
});
});