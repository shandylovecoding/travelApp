$(document).ready(function() {
    $('.heart').on('click', function(e) {
        $(e.currentTarget).toggleClass("red");
    });
})


///Ajax for typeahead
$(document).ready(function ()
{
    $('.typeahead').typeahead(
    {
        name: 'title',
        source: function (title, callback) {
            $.getJSON("http://localhost:8000/search/search?title=" + title, function (data) {
                console.log("here",data);
                return callback(data);
            });
        },
        limit:1
    });
});


var searchsTemplate = Handlebars.compile(
    `
    
    {{#eachUnique content}}



    <section class="search_secOne" style="background: url({{photo}}) no-repeat center center;background-size: cover;">
    
    
    </section>
    <div id={{id}} class="district_title">
        <h1><span style="color:#ff5d5d;">Explore</span><span>{{name}}</span></h1>
    </div>
    <div class="district_intro">
        <h3><span>{{introduction}}</span></h3>
    </div>
    <section class="search_secAtt">
        {{/eachUnique}}
        <div class="attraction_container">
            <h2>Attractions</h2>
            </br>
            <div class="row">
    
                {{#each content}}
                <div class="card ">
                    <div class="card-title" style=" margin-top: 10px;">
                        <span>
                            <h5>{{att_name}}</h5>
                        </span>
                        <span><i class="fa fa-heart heart"></i></span>
                    </div>
                    <img src={{att_photo}} class="card-img-top" width="200px" height="150px" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{att_intro}}</p>
                    </div>
                </div>
                {{/each}}
            </div>
        </div>
    </section>
      `
  );
  
  // This function is responsible of re-rendering the page every time we update our notes. It recieves the array of notes and then forces each note (each element within the array) into the notes template, which iterates through the array rendering all the notes to the DOM in the same format.
  const reload = (content) => {
    // console.log(8);
    $("#searchs").html(searchsTemplate({content: content}));
  };
  
  $(".heart").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/gettriplist",
        
        success: function(result) {
            alert('ok');
        },
        error: function(result) {
            alert('error');
        }
    });
});

