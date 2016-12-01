$(document).ready(function () {

    //variabele voor cursor en camera
    var cursor = document.getElementById("cursor");
    var camera = document.getElementById("camera");

    // behang muren
    var walltexture = $('.walltexture');

    // bank onderdelen
    var couchtexture = $('.couchtexture');

    // variabelen voor de dropvlaktes
    var drop1 = document.getElementById("dropvlak1");
    var drop2 = document.getElementById("dropvlak2");

    // variabelen van hele banken
    var bank = document.getElementById("couch");
    var bank2 = document.getElementById("couch3");

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

    //aanmaken verschillende banken + functie
    takeBank(bank);
    takeBank(bank2);

    //functie voor oppakken bank
    function takeBank(id) {
        id.addEventListener('mouseenter', function () {
            //hieronder staat code waarbij in de cursor nu een box komt, dit moet de bank zelf worden
            $(cursor).append("<a-entity id='bankRepresentation' position='0 -0.2 -0.03' geometry='depth:0.2;height:0.2;width:0.2'></a-entity>");
            $(id).remove();
        });
    }

    //aanmaken droppen bank + functie
    dropBank(drop1);
    dropBank(drop2);

    //functie voor droppen bank
    function dropBank(id) {
        id.addEventListener('mouseenter', function () {
            $(bankRepresentation).remove();
            //hier moet nog code komen om bank weer neer te zetten
        });
    }

});
