function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            header = document.getElementsByClassName('header-of-header');
            console.log(header);
        if (distanceY > shrinkOn) {
            $(".header-of-header").addClass("smaller");
        } else {
            if ($(".header-of-header").hasClass("smaller")) {
                $(".header-of-header").removeClass("smaller");
            }
        }
        $("body").load(function(){
            $(".header-of-header").removeClass("smaller");
        });
    });

}
window.onload = init();
