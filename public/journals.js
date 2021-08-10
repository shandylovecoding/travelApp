$(() => {
    $(".remove").on("click", (event) => {
        console.log($(event.currentTarget).data("id"))
        axios.delete("/api/journals/" + $(event.currentTarget).data("id"))
            .then((res) => {
                console.log(res);
                window.location = '/api/journals';
            })
            .catch((e) => {
                console.log(e);
            });
    });
})

