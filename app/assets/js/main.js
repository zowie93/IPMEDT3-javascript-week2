var count = 0;

AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('visible','false');
            count++;
            if(count == 6){
                document.getElementById( 'overlay' ).style.display = 'block';
            }
        });

    }
});