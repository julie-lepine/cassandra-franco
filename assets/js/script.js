/* PAGE ACCUEIL FONDU DU BIENVENUE
CSS :  
.welcomeBanner {
    height: 50vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../img/DALL-E/indexBG.png);
    margin-bottom: 3vh;
    display: none;
} 

JAVASCRIPT :
$(window).on("scroll", function () {
    $(".welcomeBanner").fadeOut("slow");
}); */

/* PAGE TARIFS ET PRESTATIONS - DESCENTE DES DESCRIPTIONS DES PRESTAS */
$('#link1').on('click', function () {
    $('.card1').toggle('slow');
});

$('.cardFooterQuit1').on('click', function () {
    $('.card1').toggle('slow');
})

$('#link2').on('click', function () {
    $('.card2').toggle('slow');
});

$('.cardFooterQuit2').on('click', function () {
    $('.card2').toggle('slow');
})

$('#link3').on('click', function () {
    $('.card3').toggle('slow');
});

$('.cardFooterQuit3').on('click', function () {
    $('.card3').toggle('slow');
})