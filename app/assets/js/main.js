$(document).ready(function () {

    // behang muren
    var walltexture = $('.walltexture');

    // bank onderdelen
    var couchtexture = $('.couchtexture');


    // texture muren vakjes
    var wp1 = document.getElementById('wp1');
    var wp2 = document.getElementById('wp2');
    var wp3 = document.getElementById('wp3');

    // texture bank vakjes
    var ct1 = document.getElementById('ct1');
    var ct2 = document.getElementById('ct2');
    var ct3 = document.getElementById('ct3');

    // textures toevoegen aan de muren
    addTexture(wp1, '#wallpaper1', walltexture);
    addTexture(wp2, '#wallpaper2', walltexture);
    addTexture(wp3, '#wallpaper3', walltexture);

    // texures toevegen aan de banken
    addTexture(ct1, '#couchtexture1', couchtexture);
    addTexture(ct2, '#couchtexture2', couchtexture);
    addTexture(ct3, '#couchtexture3', couchtexture);

    // functie voor texture toevoegen op mouseenter
    function addTexture(id, texture, mat1 ) {
        id.addEventListener('mouseenter', function () {
            mat1.attr('material', 'src :' + texture + '');
        });
    }

});
