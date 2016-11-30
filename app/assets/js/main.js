$(document).ready(function () {

    // behang muren
    var wallLeft = $('#wallLeft');
    var wallRight = $('#wallRight');
    var wallFront = $('#wallFront');
    var wallBack = $('#wallBack');

    // bank onderdelen
    var couchpart1 = $('#couchp1');
    var couchpart2 = $('#couchp2');
    var couchpart3 = $('#couchp3');
    var couchpart4 = $('#couchp4');
    var couchpart5 = $('#couchp5');
    var couchpart6 = $('#couchp6');
    var couchpart7 = $('#couchp7');
    var couchpart8 = $('#couchp8');
    var couchpart9 = $('#couchp9');
    var couchpart10 = $('#couchp10');
    var couchpart11 = $('#couchp11');
    var couchpart12 = $('#couchp12');


    // texture muren vakjes
    var wp1 = document.getElementById('wp1');
    var wp2 = document.getElementById('wp2');
    var wp3 = document.getElementById('wp3');

    // texture bank vakjes
    var ct1 = document.getElementById('ct1');
    var ct2 = document.getElementById('ct2');
    var ct3 = document.getElementById('ct3');

    // textures toevoegen aan de muren
    addTexture(wp1, '#wallpaper1', wallLeft, wallRight, wallFront, wallBack);
    addTexture(wp2, '#wallpaper2', wallLeft, wallRight, wallFront, wallBack);
    addTexture(wp3, '#wallpaper3', wallLeft, wallRight, wallFront, wallBack);

    // texures toevegen aan de banken
    addTexture(ct1, '#couchtexture1', couchpart1, couchpart2, couchpart3, couchpart4);
    addTexture(ct2, '#couchtexture2', couchpart1, couchpart2, couchpart3, couchpart4);
    addTexture(ct3, '#couchtexture3', couchpart1, couchpart2, couchpart3, couchpart4);

    addTexture(ct1, '#couchtexture1', couchpart5, couchpart6, couchpart7, couchpart8);
    addTexture(ct2, '#couchtexture2', couchpart5, couchpart6, couchpart7, couchpart8);
    addTexture(ct3, '#couchtexture3', couchpart5, couchpart6, couchpart7, couchpart8);

    addTexture(ct1, '#couchtexture1', couchpart9, couchpart10, couchpart11, couchpart12);
    addTexture(ct2, '#couchtexture2', couchpart9, couchpart10, couchpart11, couchpart12);
    addTexture(ct3, '#couchtexture3', couchpart9, couchpart10, couchpart11, couchpart12);

    // functie voor texture toevoegen op mouseenter
    function addTexture(id, texture, mat1, mat2, mat3, mat4) {
        id.addEventListener('mouseenter', function () {
            mat1.attr('material', 'src :' + texture + '');
            mat2.attr('material', 'src :' + texture + '');
            mat3.attr('material', 'src :' + texture + '');
            mat4.attr('material', 'src :' + texture + '');
        });
    }

});
