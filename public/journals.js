<<<<<<< HEAD
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
<<<<<<< HEAD
=======
// var photo = document.getElementById('photo')
// var myForm = document.getElementById('postjournals');
// var formData = new FormData(myForm);
// console.log(formData)

// $("#postjournals").on("submit", (event) => {
//     event.preventDefault();
//     console.log(photo.files)
//     formData.append("photo", photo.files[0])
//     console.log(formData)
//     fetch('/api/journals',{
//         method: "post",
//         body: formData
//     })
// })

// })
>>>>>>> origin/main
=======
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

>>>>>>> b2b817bed03f7a7e64148149201401c2b44a98bb
