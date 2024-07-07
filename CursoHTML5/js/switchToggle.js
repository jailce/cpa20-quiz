$(document).ready(function(){
    $('#textoTeste01, #textoTeste02').hide()

    $('#switch-shadow').click(function(){
        $('#textoTeste01').slideToggle()
        $('#textoTeste01').css('background', '#63cc33')
        $('#textoTeste01 p').css('color', '#fff')
    })

    $('#switch-shadow2').click(function(){
        $('#textoTeste02').slideToggle()
        $('#textoTeste02').css('background', '#63cc33')
        $('#textoTeste02 p').css('color', '#fff')
    })

})