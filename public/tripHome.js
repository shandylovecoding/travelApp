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
})