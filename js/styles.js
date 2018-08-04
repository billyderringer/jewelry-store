define(['jquery'], () => {

    //nav scroll bg effect
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $("#floating-nav").css({
                "background-color": "#151011",
                "transition": "1s"
            }); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $("#floating-nav").css({
                "background-color": "transparent",
                "transition": "1s"
            }); // if not, change it back to transparent
        }
    })
})