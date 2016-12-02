$(document).ready(function () {

    $("#couch4").attr('visible', 'false');
    $("#couch5").attr('visible', 'false');
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

            $(cursor).append('<a-entity id="couchCursor" position="0 0 -1" scale="1.77 1.18 1"><a-entity id="couchp1" class="couchtexture" position="0 0.43 -1.46" geometry="depth:0.679;height:0.4;width:1.64" material="src: #couchtexture1; repeat: 3 1"></a-entity><a-entity id="couchp2" class="couchtexture" position="0 0.64 -1.95" geometry="width:1.64;depth:0.3;height:0.8" material="src: #couchtexture1; repeat: 3 1"></a-entity><a-entity id="couchp3" class="couchtexture" position="-0.86 0.73 -1.57" geometry="depth:0.9;height:0.2;width:0.2" material="src: #couchtexture1; repeat: 3 1"></a-entity><a-entity id="couchp4" class="couchtexture" position="0.83 0.73 -1.57" geometry="depth:0.9;height:0.2;width:0.2" material="src: #couchtexture1; repeat: 3 1"></a-entity></a-entity>');
            $(id).attr('visible', 'false');
        });
    }

    //aanmaken droppen bank + functie
    dropBank(drop1);
    dropBank(drop2);

    //functie voor droppen bank
    function dropBank(drop1) {
        drop1.addEventListener('mouseenter', function () {
            $(couchCursor).remove();
            $("#couch4").attr('visibile', 'true');
        });
    }

    function dropBank(drop2) {
        drop2.addEventListener('mouseenter', function () {
            $(couchCursor).remove();
            $("#couch4").attr('visibile', 'true');
        });
    }

});
