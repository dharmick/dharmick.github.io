$(function(){
    $('.slick-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });


    var shadow_elem = Array.from(document.getElementsByClassName('section-subtitle'));
    shadow_elem.forEach(elem => {
        var shadow = document.createElement('h6');
        shadow.className = 'shadow';
        shadow.textContent = elem.innerHTML;
        elem.parentNode.insertBefore(shadow,elem);
    });

    var section = Array.from(document.getElementsByTagName('section'));
    for(i=0;i<section.length;i++) {
        var side_elem = document.createElement('img');
        if(i%2==0)  {
            side_elem.src = "img/side-element-right.png"
        }
        else {
            side_elem.src = "img/side-element-left.png"
        }
        side_elem.className = "side-element";
        section[i].appendChild(side_elem);
    }


    $('.vertical-strip').each(function(){
        var content = document.getElementsByClassName('fixed-vertical-strip');
        var waypoint = new Waypoint({
            element: this,
            handler: function() {
                content[0].innerHTML = this.element.innerHTML;
            },
            offset: 400
        })
    });

});
