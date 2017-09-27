$(document).ready(function () {

    $('#username').keyup(function (e) {
        e.preventDefault();
         var username = e.target.value;
        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client_id:'00f36185968bbb14f31d',
                client_secret:'e8130a21427362d95616fa13a21b493aa23ba471'
            }
        }).done(function (user) {
            $('#profile').html(`
           
               <div class="result">
  
                   <div class="row">
                        <div class="col-md-4">
                            <img  src="${user.avatar_url}">
                        </div> 
                        <div class="col-md-8">
                            <h1>Name: ${user.name}</h1>
                            <span class="label label-warning">Followers: ${user.followers}</span>
                            <span class="label label-primary">Following: ${user.following}</span>
                            <span class="label label-success">Public Repos: ${user.public_repos}</span>
                            <span class="label label-info">Public Gists: ${user.public_gists}</span><br><br>
                            <p class="lead">Company: ${user.company} </p>
                            <p class="lead">Location: ${user.location} </p>
                             <p class="lead">Bio: ${user.bio} </p>
                            <a target="_blank" href="${user.html_url}" class="btn btn-danger btn-lg">View Profile</a>
                          
                        </div>
                    </div>
                             
                </div>
           
            `);
        })

        // console.log(e.target.value);
    })

});