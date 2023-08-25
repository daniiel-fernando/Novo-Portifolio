$(document).ready(function(){
  $(".navbar-nav li").click(function(){
    $(".navbar-nav li").removeClass("active");
    $(this).addClass("active");
  });

  $('.navbar-nav a').click(function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });
});
    function redirectToPage(page) {
      window.location.href = page;
    }
    document.addEventListener("DOMContentLoaded", function () {
      // Selecione todos os links da barra de navegação
      var links = document.querySelectorAll(".navbar-nav a.nav-link");
  
      // Adicione um ouvinte de evento de clique a cada link
      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          // Verifique se o link possui um atributo href válido
          if (this.getAttribute("href") && this.getAttribute("href") !== "#") {
            // Redirecione para a URL especificada no atributo href
            window.location.href = this.getAttribute("href");
          }
        });
      });
    });
  