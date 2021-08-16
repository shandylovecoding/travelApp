$(() => {
    $(".removeTrip").on("click", (event) => {
        console.log($(event.currentTarget).data("id"))
        axios.delete("/tripsHome/" + $(event.currentTarget).data("id"))
            .then((res) => {
                console.log("this is deleting trip")
                console.log(res);
                window.location = '/tripsHome';
            })
            .catch((e) => {
                console.log(e);
            });
    });


    // $('.tripplans').css("margin") = margin();
    $('.tripplans').each(function(){
        console.log($(this));
        $(this).css('margin',  margin() )
        $(this).css('transform',  rotate() );
        $(this).css('background-color',  color() );

    }
    )
    

    function margin() {
        var random_margin = ["-5px", "1px", "5px", "10px", "15px"];
        return random_margin[Math.floor(Math.random() * random_margin.length)];
    }

    function rotate() {
        var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)",
            "rotate(-5deg)", "rotate(-10deg)"]
        return random_rotate[Math.floor(Math.random() * random_rotate.length)];
    }
    function color() {
        var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6","#ebb328"];
        return random_color[Math.floor(Math.random() * random_color.length)];
    }
})


