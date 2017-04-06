<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");

    function ButtonKlik(){
    if(document.getElementById('login'))
    {
      alert("Anda berhasil login");
    }
    else if(document.getElementById('register'))
    {
      alert("Anda berhasil register, silahkan login!");
    }
  }
  });


 
  </script>