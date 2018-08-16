define(['jquery'], () => {

    let headerHeight = $("#floating-nav").height()

    $(function () {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $('.smoothScroll').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                let target = $(this.hash)
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                let scrollToPosition = $(target).offset().top - headerHeight
                if (target.length) {
                    $('html').animate({ 'scrollTop': scrollToPosition }, 1000, function(){
                        window.location.hash = "" + target
                        // This hash change will jump the page to the top of the div with the same id
                        // so we need to force the page to back to the end of the animation
                        $('html').animate({ 'scrollTop': scrollToPosition }, 0)
                    }) // The number here represents the speed of the scroll in milliseconds
                    return false
                }
            }
        })
    })
})