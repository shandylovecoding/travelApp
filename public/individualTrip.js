$(() => {
    $(".removeAttraction ").on("click", (event) => {
        console.log($(event.currentTarget).data("id"))
        console.log(typeof $(event.currentTarget).data("id"))

        axios.delete("/tripsHome/attraction/" + $(event.currentTarget).data("id")[0] + "/" + $(event.currentTarget).data("id")[2] )
            .then((res) => {
                console.log("this is deleting attraction")
                console.log(res);
                window.location = '/tripsHome/attraction/' + $(event.currentTarget).data("id")[0];
            })
            .catch((e) => {
                console.log(e);
            });
    });
})