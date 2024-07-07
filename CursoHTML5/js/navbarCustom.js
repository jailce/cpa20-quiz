$(document).ready(function () {
        $('.topicos01, .topicos02, .topicos03, .topicos04, .topicos05').hide()
        $('.second-button').on('click', function () {
            $('.animated-icon2').toggleClass('open');
        });

        $('.dropdown-item').on('click', function(){
            $('.animated-icon2').toggleClass('open');
        })

        $('#cap01').click(function(){
            $('.topicos01').slideToggle()
            $(this).toggleClass('bordarCaps')         
        })

        $('#cap02').click(function(){
            $('.topicos02').slideToggle()
            $(this).toggleClass('bordarCaps')
        })
        
        $('#cap03').click(function(){
            $('.topicos03').slideToggle()
            $(this).toggleClass('bordarCaps')
          
        })

        $('#cap04').click(function(){
            $('.topicos04').slideToggle()
            $(this).toggleClass('bordarCaps')
        })

        $('#cap05').click(function(){
            $('.topicos05').slideToggle()
            $(this).toggleClass('bordarCaps')
        })

       /*
        $('.navbar-collapse').mouseleave(function(){
            $(this).slideUp()
        })
       
       */
    });