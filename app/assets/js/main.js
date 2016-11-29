$(document).ready(function () {

    var wallLeft = $('#wallLeft');
    var wallRight = $('#wallRight');
    var wallFront = $('#wallFront');
    var wallBack = $('#wallBack');

    var wp1 = document.getElementById('wp1');
    var wp2 = document.getElementById('wp2');
    var wp3 = document.getElementById('wp3');

    addWall(wp1, '#wallpaper1');
    addWall(wp2, '#wallpaper2');
    addWall(wp3, '#wallpaper3');


    function addWall(id, texture) {
        id.addEventListener('mouseenter', function () {
            console.log('test');
            wallLeft.attr('material', 'src :' + texture +'');
            wallRight.attr('material', 'src :' + texture +'');
            wallFront.attr('material', 'src :' + texture +'');
            wallBack.attr('material', 'src :' + texture +'');
        });
    }




});
