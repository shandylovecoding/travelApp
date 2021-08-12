
$(() => {
    $(".remove").on("click", (event) => {
        console.log($(event.currentTarget).data("id"))
        axios.delete("/journals/" + $(event.currentTarget).data("id"))
            .then((res) => {
                console.log("this is deleting")
                console.log(res);
                window.location = '/journals';
            })
            .catch((e) => {
                console.log(e);
            });
    });
})

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

