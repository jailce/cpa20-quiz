//Integração SCORM
  var paginaAtual
  var contagem = 0
  //var tst = fl_getLessonLocation()
  var urlAtual = location.href

      //funções SCORM a ser utilizada
      //fl_gravaSoLessonLocation(paginaAtual)
      //fl_finaliza();
      //fl_finaliza(); //finaliza o scorm

  $('#capNext02').click(function(){
    paginaAtual = "#cap03"
    location.href="cap03.html"
    fl_gravaSoLessonLocation(paginaAtual)
  })

  $('#capNext03').click(function(){
    paginaAtual = "#cap04"
    location.href="cap04.html"
    fl_gravaSoLessonLocation(paginaAtual)
  })

  $('#capNext04').click(function(){
    paginaAtual = "#cap05"
    //location.href="cap05.html"
    fl_gravaSoLessonLocation(paginaAtual)
    fl_finaliza();
    window.close()
  })





  //logica para carregamento das paginas...
  /*if(tst == '#cap02'){
    setTimeout(function(){     
      location.href="cap02.html"
    }, 100)
    
    
  if(tst == '#cap03'){
    location.href="cap03.html"
    console.log('carregando pagina do cap03')
  }

  else if(tst == '#cap04'){
    location.href="cap04.html"
    console.log('carregando pagina do cap04')
  }
    
    
    */



//OCULTA OS FEEDBACKS DAS RESPOSTAS    
$('#feedBackResp01, #feedBackResp02, #respCorreta01, #respCorreta02, #pergunta02').hide()
$('#txt02').hide()

    //funções aplicada para quiz01 do exercício...
        $('#respA_quis01').click(function(){
            //Destaca a resposta
            $(this).css('color', 'white')
            $(this).css('background','#c23616')
            $(this).css('padding','10px')
            
            //desabilita as outras respostas...
            $('#respB_quis01').off()
            $('#respC_quis01').off()
            $('#respD_quis01').off()

            $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

            //habilita o feedBack
            $('#feedBackResp01').show()
            $('#feedBackResp01').css('background', '#c23616')
            $('#feedBackResp01').css('color', '#fff')
            $('#feedBackResp01').css('padding', '10px')
            
        })

        $('#respB_quis01').click(function(){
            //Destaca a resposta
            $(this).css('color', 'white')
            $(this).css('background','#c23616')
            $(this).css('padding','10px')
            
            //desabilita as outras respostas...
            $('#respA_quis01').off()
            $('#respC_quis01').off()
            $('#respD_quis01').off()

            $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

            //habilita o feedBack
            $('#feedBackResp01').show()
            $('#feedBackResp01').css('background', '#c23616')
            $('#feedBackResp01').css('color', '#fff')
            $('#feedBackResp01').css('padding', '10px')
        })

        $('#respC_quis01').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#c23616')
        $(this).css('padding','10px')
        
        //desabilita as outras respostas...
        $('#respB_quis01').off()
        $('#respA_quis01').off()
        $('#respD_quis01').off()

        $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp01').show()
        $('#feedBackResp01').css('background', '#c23616')
        $('#feedBackResp01').css('color', '#fff')
        $('#feedBackResp01').css('padding', '10px')
        })

        $('#respD_quis01').click(function(){
            //Destaca a resposta
            $(this).css('color', 'white')
            $(this).css('background','#006633')
            $(this).css('padding','10px')
            
            //desabilita as outras respostas...
            $('#respB_quis01').off()
            $('#respC_quis01').off()
            $('#respA_quis01').off()

            $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

            //habilita o feedBack
            $('#feedBackResp01').show()
            $('#feedBackResp01').css('background','#006633')
            $('#feedBackResp01').css('color','#fff')
            $('#feedBackResp01').css('padding','10px')
            $('#respCorreta01').show()
            $('#respCorreta01').css('color','#fff')
            $('#txt01').hide()
        })


        $('#btnQUIZ_01').click(function(){
            $('#pergunta01').hide()
            $('#pergunta02').show()
        })


    //funções aplicada para quiz02 do exercício...
        $('#respA_quis02').click(function(){
            //Destaca a resposta
            $(this).css('color', 'white')
            $(this).css('background','#c23616')
            $(this).css('padding','10px')
            $('#txt02').show()
            
            //desabilita as outras respostas...
            $('#respB_quis02').off()
            $('#respC_quis02').off()
            $('#respD_quis02').off()

            $('#respB_quis02, #respC_quis02, #respD_quis02').css('cursor', 'no-drop')

            //habilita o feedBack
            $('#feedBackResp02').show()
            $('#feedBackResp02').css('background', '#c23616')
            $('#feedBackResp02').css('color', '#fff')
            $('#feedBackResp02').css('padding', '10px')
            
        })

        $('#respD_quis02').click(function(){
            //Destaca a resposta
            $(this).css('color', 'white')
            $(this).css('background','#c23616')
            $(this).css('padding','10px')
            $('#txt02').show()
            
            //desabilita as outras respostas...
            $('#respA_quis02').off()
            $('#respC_quis02').off()
            $('#respB_quis02').off()

            $('#respD_quis02, #respC_quis02, #respD_quis02').css('cursor', 'no-drop')

            //habilita o feedBack
            $('#feedBackResp02').show()
            $('#feedBackResp02').css('background', '#c23616')
            $('#feedBackResp02').css('color', '#fff')
            $('#feedBackResp02').css('padding', '10px')
        })

        $('#respC_quis02').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#c23616')
        $(this).css('padding','10px')
        $('#txt02').show()
        
        //desabilita as outras respostas...
        $('#respB_quis02').off()
        $('#respA_quis02').off()
        $('#respD_quis02').off()

        $('#respB_quis02, #respC_quis02, #respD_quis02').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp02').show()
        $('#feedBackResp02').css('background', '#c23616')
        $('#feedBackResp02').css('color', '#fff')
        $('#feedBackResp02').css('padding', '10px')
        })

        $('#respB_quis02').click(function(){
            //Destaca a resposta
            $(this).css('color', 'white')
            $(this).css('background','#006633')
            $(this).css('padding','10px')
            
            //desabilita as outras respostas...
            $('#respD_quis02').off()
            $('#respC_quis02').off()
            $('#respA_quis02').off()

            $('#respD_quis02, #respC_quis02, #respA_quis02').css('cursor', 'no-drop')

            //habilita o feedBack
            $('#feedBackResp02').show()
            $('#feedBackResp02').css('background','#006633')
            $('#feedBackResp02').css('color','#fff')
            $('#feedBackResp02').css('padding','10px')
            $('#respCorreta02').show()
            $('#respCorreta02').css('color','#fff')
            $('#txt02').hide()
        })