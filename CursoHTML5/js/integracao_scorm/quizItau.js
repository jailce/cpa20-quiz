$(document).ready(function(){
  loadPage();
  
  var paginaAtual = '0'
  var tst = fl_getLessonLocation()
  var x = 0
      //funções SCORM a ser utilizada
      fl_gravaSoLessonLocation(paginaAtual)
      //fl_finaliza();

  $('#btnQUIZ_02').click(function(){
    paginaAtual = 3
    fl_gravaSoLessonLocation(paginaAtual)
  })

  if(tst == '0'){
    setTimeout(function(){     
      window.open('http://prismafs.com.br/clientes/bayer/pmesti/preview/20190704/pg01.html')
    }, 100)

  }else if(tst == '1'){
    setTimeout(function(){
      $('#start, #pergunta2, #pergunta3, #pergunta4, #telaResultado, #quizOK').hide();
      $('#pergunta1').show();
      window.open('http://prismafs.com.br/clientes/bayer/pmesti/preview/20190704/pg02.html')
    }, 100)
  }

  else if(tst == '2'){
    setTimeout(function(){
     
      window.open('http://prismafs.com.br/clientes/bayer/pmesti/preview/20190704/pg03.html')
    }, 100)
  }

  else if(tst == '3'){
    setTimeout(function(){
      location.href="cap03.html"
    }, 100)
  }
})
