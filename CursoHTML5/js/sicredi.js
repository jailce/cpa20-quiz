$(document).ready(function(){
    //tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })


    //função de animação para os conteudos
    var $target = $('.anime'), animacao = 'animeStart'
    var offsett = $(window).height() * 3 / 4

    function animeScroll() {
      var documentoTop = $(document).scrollTop()
      $target.each(function () {
        var itemTop = $(this).offset().top;
        if (documentoTop > itemTop - offsett) {
          $(this).addClass(animacao)
        } else {
          $(this).removeClass(animacao)
        }
      })
    }
    $(document).scroll(function () {
      animeScroll();
    })


    var paginaAtual
 
    //var tst = fl_getLessonLocation()
    //var urlAtual = location.href
  
        //funções SCORM a ser utilizada
        ////fl_gravaSoLessonLocation(paginaAtual)
        //fl_finaliza();
        //fl_finaliza(); //finaliza o scorm
  
    $('#index').click(function(){
      location.href="cap01.html"
    })
  
    $('#capNext01').click(function(){
      paginaAtual = "#cap02"
      location.href="cap02.html"
      //fl_gravaSoLessonLocation(paginaAtual)
    })
  
    $('#capNext02').click(function(){
      paginaAtual = "#cap03"
      location.href="cap03.html"
      //fl_gravaSoLessonLocation(paginaAtual)
    })
  
    $('#capNext03').click(function(){
      paginaAtual = "#cap04"
      location.href="cap04.html"
      //fl_gravaSoLessonLocation(paginaAtual)
    })
  
    $('#capNext04').click(function(){
      paginaAtual = "#cap05"
      location.href="cap05.html"
      ////fl_gravaSoLessonLocation(paginaAtual)
      //fl_finaliza();
    })
  
})