

///Ajax for typeahead
$(document).ready(function (){
    $('.typeahead').typeahead(
    {
        name: 'title',
        source: function (title, callback) {

            $.getJSON("http://3.139.207.121/search/search?title=" + title, function (data) {
                console.log("here",data);
                return callback(data);
            });
        },
        limit:4
    });
});


var searchsTemplate = Handlebars.compile(
    `
    {{#eachUnique data.content}}

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

                {{#each data.content}}
                <div class="card ">
                    <div id={{att_id}} class="card-title" style=" margin-top: 10px;">
                        <span>
                            <h5>{{att_name}}</h5>
                        </span>
                        <span class="heart"><a data-target="#triplist{{att_id}}" data-toggle="modal"><i
                                    class="fa fa-heart heart"></i></a></span>
                    </div>
                    <img src={{att_photo}} class="card-img-top" width="200px" height="150px" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{att_intro}}</p>
                    </div>
                </div>

                <div id="triplist{{att_id}}" class="modal in" style="display: none; width:400px">
                    <div class="modal-content">
                        <div class="modal-header">

                            <form action="/tripsHome/attraction" method="POST">
                                <input type="text" name="attid" class="form-control" value={{att_id}}></input>
                                <input type="text" name="tripname" class="form-control" required="required"
                                    value={{trip_name}}></input>


                                <input data-dismiss="modal" type="submit" class="btn btn-secondary btn-block btn-lg"
                                    value="Create">
                            </form>

                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">??</button>
                        </div>
                    </div>
                </div>
                {{/each}}
            
            </div>
        </div>

    </section>

    <section class="search_secJour">
        <div class="journal_container">
            <h2>Journals</h2>
            </br>
            <div class="row">
                {{#eachUnique data}}
                <div class="card ">
                    <div class="card-title" style=" margin-top: 10px;">
                        <span>
                            <h5>{{user_name}}</h5>
                        </span>
                        {{#if username}}
                        <span><i class="fa fa-heart heart"></i></span>
                        {{else}}
                        {{/if}}
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{jour_content}}</p>
                    </div>
                </div>
                {{/eachUnique}}
            </div>
    </section>
      `
  );
  



////////



