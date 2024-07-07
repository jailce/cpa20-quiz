//OCULTA OS FEEDBACKS DAS RESPOSTAS    
$('#feedBackResp01, #feedBackResp02, #respCorreta01, #respCorreta02, #pergunta02').hide()
$('#txt02').hide()

//funçõe aplicadas ao quiz de fixação =============================================================>
    //funções aplicada para quiz01 do exercício =============================>
    $('#respA_quis01').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#fc6372')
        $(this).css('padding','10px')
        
        //desabilita as outras respostas...
        $('#respB_quis01').off()
        $('#respD_quis01').off()
        $('#respC_quis01').off()

        $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp01').show()
        $('#feedBackResp01').css('background', '#fc6372')
        $('#feedBackResp01').css('color', '#fff')
        $('#feedBackResp01').css('padding', '10px')
         $('#feedBackResp01').css('border-radius', '16px')
        
    })

    $('#respB_quis01').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#fc6372')
        $(this).css('padding','10px')
           $('#feedBackResp01').css('border-radius', '16px')
        
        //desabilita as outras respostas...
        $('#respA_quis01').off()
        $('#respC_quis01').off()
        $('#respD_quis01').off()

        $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp01').show()
        $('#feedBackResp01').css('background', '#fc6372')
        $('#feedBackResp01').css('color', '#fff')
        $('#feedBackResp01').css('padding', '10px')
           $('#feedBackResp01').css('border-radius', '16px')
    })

    $('#respC_quis01').click(function(){
    //Destaca a resposta
    $(this).css('color', 'white')
    $(this).css('background','#fc6372')
    $(this).css('padding','10px')
       $('#feedBackResp01').css('border-radius', '16px')
    
    //desabilita as outras respostas...
    $('#respB_quis01').off()
    $('#respA_quis01').off()
    $('#respD_quis01').off()

    $('#respB_quis01, #respC_quis01, #respD_quis01, #respA_quis01').css('cursor', 'no-drop')

    //habilita o feedBack
    $('#feedBackResp01').show()
    $('#feedBackResp01').css('background', '#fc6372')
    $('#feedBackResp01').css('color', '#fff')
    $('#feedBackResp01').css('padding', '10px')
       $('#feedBackResp01').css('border-radius', '16px')
    })


    //*************** RESPOSTA SELECIONADA COMO CORRETA ***************
    $('#respD_quis01').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#006633')
        $(this).css('padding','10px')
           $('#feedBackResp01').css('border-radius', '16px')
        
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
           $('#feedBackResp01').css('border-radius', '16px')
        $('#txt01').hide()
    })

    //--------------------------------------------------------------------------

    $('#btnQUIZ_01').click(function(){
        $('#pergunta01').hide()
        $('#pergunta02').show()
    })
//funções aplicada para quiz01 do exercício (FIM DO CÓDIGO) ====================================>

//funções aplicada para quiz02 do exercício exercício CAP02 
    $('#respA_quis02').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#fc6372')
        $(this).css('padding','10px')
           $('#feedBackResp01').css('border-radius', '16px')
        $('#txt02').show()
        
        //desabilita as outras respostas...
        $('#respB_quis02').off()
        $('#respC_quis02').off()
        $('#respD_quis02').off()

        $('#respB_quis02, #respC_quis02, #respD_quis02').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp02').show()
        $('#feedBackResp02').css('background', '#fc6372')
        $('#feedBackResp02').css('color', '#fff')
        $('#feedBackResp02').css('padding', '10px')
           $('#feedBackResp01').css('border-radius', '16px')
        
    })

    $('#respD_quis02').click(function(){
        //Destaca a resposta
        $('#feedBackResp01').show()
        $('#feedBackResp01').css('background', '#fc6372')
        $('#feedBackResp01').css('color', '#fff')
        $('#feedBackResp01').css('padding', '10px')
           $('#feedBackResp01').css('border-radius', '16px')
        $('#txt02').show()
        
        //desabilita as outras respostas...
        $('#respA_quis02').off()
        $('#respC_quis02').off()
        $('#respB_quis02').off()

        $('#respA_quis02, #respC_quis02, #respB_quis02').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp02').show()
        $('#feedBackResp02').css('background', '#fc6372')
        $('#feedBackResp02').css('color', '#fff')
        $('#feedBackResp02').css('padding', '10px')
           $('#feedBackResp01').css('border-radius', '16px')
    })

    $('#respB_quis02').click(function(){
    //Destaca a resposta
        $('#feedBackResp01').show()
        $('#feedBackResp01').css('background', '#fc6372')
        $('#feedBackResp01').css('color', '#fff')
        $('#feedBackResp01').css('padding', '10px')
           $('#feedBackResp01').css('border-radius', '16px')
    $('#txt02').show()
    
    //desabilita as outras respostas...
    $('#respD_quis02').off()
    $('#respA_quis02').off()
    $('#respC_quis02').off()

    $('#respB_quis02, #respA_quis02, #respD_quis02').css('cursor', 'no-drop')

    //habilita o feedBack
        $('#feedBackResp01').show()
        $('#feedBackResp01').css('background', '#fc6372')
        $('#feedBackResp01').css('color', '#fff')
        $('#feedBackResp01').css('padding', '10px')
    $('#feedBackResp02').css('padding', '10px')
       $('#feedBackResp01').css('border-radius', '16px')
    })

    //*************** RESPOSTA SELECIONADA COMO CORRETA ***************
    $('#respC_quis02').click(function(){
        //Destaca a resposta
        $(this).css('color', 'white')
        $(this).css('background','#006633')
        $(this).css('padding','10px')
           $('#feedBackResp01').css('border-radius', '16px')
        
        //desabilita as outras respostas...
        $('#respD_quis02').off()
        $('#respB_quis02').off()
        $('#respA_quis02').off()

        $('#respD_quis02, #respB_quis02, #respA_quis02').css('cursor', 'no-drop')

        //habilita o feedBack
        $('#feedBackResp02').show()
        $('#feedBackResp02').css('background','#006633')
        $('#feedBackResp02').css('color','#fff')
        $('#feedBackResp02').css('padding','10px')
           $('#feedBackResp01').css('border-radius', '16px')
        $('#respCorreta02').show()
        $('#respCorreta02').css('color','#fff')
        $('#txt02').hide()
    })