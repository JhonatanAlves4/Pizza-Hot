let quantidade = $('div#testemunhos ul').length
let limite = (quantidade * 336) * -1
let largura = limite + 336
let view_largura = $('div#testemunha-centro').width()
$('div#testemunhos').css('width', limite * -1)


/*BOTAO DIREITA*/ 

$('div#testemunha-direita').click(function () {

    posicao_atual = $('div#testemunhos').position().left
    nova_posicao = posicao_atual - view_largura

    

    if (limite < nova_posicao - view_largura) {
        $('div#testemunhos').animate({left: nova_posicao}, 1000)
    }

    if(limite > (nova_posicao - view_largura)) {
        $('div#testemunha-direita ion-icon').css({opacity: 0.5})
    }

    $('div#testemunha-esquerda ion-icon').css({opacity: 1})
    
})

/*BOTAO ESQUERDA*/ 

$('div#testemunha-esquerda').click(function () {

    posicao_atual = $('div#testemunhos').position().left

    if (posicao_atual + view_largura <= 1) {
        nova_posicao = posicao_atual + view_largura
        $('div#testemunhos').animate({left: nova_posicao}, 1000)
    }

    if (nova_posicao <= -2831) {
        $('div#testemunha-esquerda ion-icon').css({opacity: 0.5})
    }
    $('div#testemunha-direita ion-icon').css({opacity: 1})
})

/*codigo click para assinar*/

$('div.plano-baixo').click(function () {
    alert('Você adquiriu!!')
})

/*codigo link redes sociais*/

$('ion-icon#instagram').click(function () {
    window.open('https://www.instagram.com/jonataap_/', '_blank');
})

$('ion-icon#youtube').click(function () {
    window.open('https://www.youtube.com/watch?v=kEc7pBlpZlg&ab_channel=BarstoolSports', '_blank');
})

$('ion-icon#whatsapp').click(function () {
    window.open('https://web.whatsapp.com/', '_blank');
})

$('ion-icon#facebook').click(function () {
    window.open('https://www.facebook.com/frontenddevelopers', '_blank');
})

$('ion-icon#linkedin').click(function () {
    window.open('https://www.linkedin.com/in/jhonatan-alves-pereira-32486a19a/', '_blank');
})

/*Códigos de Animações*/

$('div#testemunhos ul:eq(0)').css('opacity',0)
$('div#testemunhos ul:eq(1)').css('opacity',0)
$('div#testemunhos ul:eq(2)').css('opacity',0)

$('section#domingo-perfeito').waypoint(function(direcao) {
    if (direcao == 'down'){
        $('div.folha1').addClass('animate__animated animate__fadeInUp')
        $('div.folha3').addClass('animate__animated animate__fadeInUp')
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower')
    }
    if (direcao == 'up') {
        $('div.folha1').removeClass('animate__animated animate__fadeInUp')
        $('div.folha3').removeClass('animate__animated animate__fadeInUp')
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower')
    }
},{
    offset: '300px;'
})

$('section#pizza').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated animate__fadeInUp')
        $('div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow')
    }

    if (direcao == 'up') {
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp')
        $('div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow')
    }
},{
    offset: '350px;'
})

$('section#testemunha').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate_slow')
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower')
    }

    if (direcao == 'up') {
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate_slow')
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower')
    }
},{
    offset: '150px;'
})

$('div#transicao').waypoint(function(direcao) {
    if (direcao == 'down') {

        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow')

        $('div div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('div div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow')
        $('div div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow')
    }

    if (direcao == 'up') {
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow')
    }
},{
    offset: '430px;'
})

$('section#plano-principal-2').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('div.plano-medio:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('div.plano-medio:eq(1)').addClass('animate__animated animate__fadeIn animate__slower')
        $('div.plano-medio:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow')
    }

    if (direcao == 'up') {
        $('div.plano-medio:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slow')
        $('div.plano-medio:eq(1)').removeClass('animate__animated animate__fadeIn animate__slow')
        $('div.plano-medio:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slow')
    }
},{
    offset: '200px;'
})

/*Código Nav Fixed*/

$('header h1').waypoint(function(direcao){
    if (direcao == 'down') {
        $('nav').addClass('estatico')
        $('nav div').addClass('logoEstatico')
        $('nav ul').addClass('menuEstatico')
        $('nav ul li a').addClass('itemEstatico')
        $('nav ion-icon').addClass('iconeEstatico')
        $('nav ul#icone-menu-mobile ion-icon').css('color','#404040')
        $('nav ul#icone-menu-mobile').css('margin-top','6px')
        $('nav ul#icone-menu-mobile').css('margin-right','-15px')
    } else {
        $('nav').removeClass('estatico')
        $('nav div').removeClass('logoEstatico')
        $('nav ul').removeClass('menuEstatico')
        $('nav ul li a').removeClass('itemEstatico')
        $('nav ion-icon').removeClass('iconeEstatico')
        $('nav ul#icone-menu-mobile ion-icon').css('color','white')
        $('nav ul#icone-menu-mobile').css('margin-top','70px')
        $('nav ul#icone-menu-mobile').css('margin-right','20px')
    }
},{
    offset: '120px;'
})

/*Código Navegação*/

$('nav div').click(function () {
    $('html, body').animate({scrollTop:$('header').offset().top},500, function() {
        if( $(window).width() < 812) {
        esconderMenu()
        controle = true
        }
    });
})

$('nav ul li:eq(0)').click(function () {
    $('html, body').animate({scrollTop:$('section#domingo-perfeito').offset().top},500, function() {
        if( $(window).width() < 812) {
        esconderMenu()
        controle = true
        }
    });
})

$('nav ul li:eq(1)').click(function () {
    $('html, body').animate({scrollTop:$('section#pizza').offset().top},500, function() {
        if($(window).width() < 812) {
        esconderMenu()
        controle = true
        }
    });
})

$('nav ul li:eq(2)').click(function () {
    $('html, body').animate({scrollTop:$('section#testemunha').offset().top},500, function() {
        if($(window).width() < 812) {
        esconderMenu()
        controle = true
        }
    });
})

$('nav ul li:eq(3)').click(function () {
    $('html, body').animate({scrollTop:$('section#plano-principal-2').offset().top},500, function() {
        if($(window).width() < 812) {
            esconderMenu()
            controle = true
            }
    });
})

// NAV

function mostrarMenu () {
    $('nav ul#left').css('display','flex');
    $('nav ul#right').css('display','flex');
}
function esconderMenu () {
    $('nav ul#left').css('display','none');
    $('nav ul#right').css('display','none');
}

let controle = true;

$('nav ul#icone-menu-mobile').click(function() {
    if( controle == true) {
    mostrarMenu();
    controle = false
    } else {
        esconderMenu();
        controle = true
    }
})

$(window).resize(function() {
    if( $(window).width() > 812) {
        mostrarMenu()
    } else{
        esconderMenu()
    }
})