(function () {
  'use strict';

  //use github api token for development purpose
  //will not be present in producion
  var headers = {};
  if (GITHUB_TOKEN) {
      //set the AJAX header to send the token
    headers['Authorization'] = 'token ' + GITHUB_TOKEN;
  }

  // fetch(url, {headers: headers}).then(function(){
  //
  // });

  var myURL = 'https://api.github.com/users/BraxtonHath';
  var repoURL = 'https://api.github.com/users/BraxtonHath/repos?sort=updated'
  var page = document.getElementById('page');
  var info = [];


  fetch(myURL, {headers: headers}).then(function(response){
    console.log('response', response);

    response.json().then(function(bioInfo){
      var formatedDate = moment(bioInfo.created_at).fromNow();
      var user = document.createElement('div');
        user.className = 'container';
        page.appendChild(user);

        console.log('testing', bioInfo);

        var innerDiv = document.createElement('div');
          innerDiv.className = 'user info';
          user.appendChild(innerDiv);
          console.log('testing1', innerDiv);


          var avartarContainer = document.createElement('div');
          avartarContainer.className = 'avatar_url';
          var avatar_url = '<img class="image" src="' + bioInfo.avatar_url + '" width=200px length=200px>';
          avartarContainer.innerHTML = avatar_url;
          innerDiv.appendChild(avartarContainer);
          console.log('testingAVATAR', avartarContainer);


          var realNameContainer = document.createElement('div');
          realNameContainer.className = 'name';
          var name = bioInfo.name;
          realNameContainer.textContent = name;
          innerDiv.appendChild(realNameContainer);
          console.log('testingNAME', realNameContainer);

          var nameContainer = document.createElement('div');
          nameContainer.className = 'login';
          var username = bioInfo.login;
          nameContainer.textContent = username;
          innerDiv.appendChild(nameContainer);
          console.log('testingNAME', nameContainer);

          var biographyContainer = document.createElement('div');
          biographyContainer.className = 'bio';
          var bio = bioInfo.bio;
          biographyContainer.textContent = bio;
          innerDiv.appendChild(biographyContainer);
          console.log('testingBIO', biographyContainer);

          var locationContainer = document.createElement('div');
          locationContainer.className = 'location';
          var location = bioInfo.location;
          locationContainer.textContent = location;
          innerDiv.appendChild(locationContainer);
          console.log('testingLOCATION', locationContainer);

          var emailContainer = document.createElement('a');
          emailContainer.setAttribute('href','mailto://Braxtonhatha@yahoo.com');
          emailContainer.className = 'email';
          var email = bioInfo.email;
          emailContainer.textContent = email;
          innerDiv.appendChild(emailContainer);
          console.log('testingemail', emailContainer);


          var timeContainer = document.createElement('div');
          timeContainer.className = 'formatedDate';
          var created_at = bioInfo.created_at;
          timeContainer.textContent = 'Joined' + ' ' + formatedDate;
          innerDiv.appendChild(timeContainer);
          console.log('testingHTML', timeContainer);
     });
   });

   fetch(repoURL, {headers: headers}).then(function(response){
     console.log('response two', response);

     response.json().then(function(repos){
       for (var i = 0; i < repos.length; i++) {
         let repo = repos[i];
         console.log(repo);
         displayRepo(repo);
       }
     });
   });
   function displayRepo(repo){
     var repoList =document.getElementById('UL');
     var repoItem = document.createElement('li');
     var formatedDate = moment(repo.updated_at).fromNow();

     if(!repo.language){
       repo.language = '';
     }

     repoItem.innerHTML =`
      <a href="${repo.url}">
        <span class="repo-item">
          ${repo.name}
          </span>
      </a>
      <li class='repo-lang'>
        <span class="${repo.language} language">${repo.language}</span> ${formatedDate}
      </li>
    `;

    repoList.appendChild(repoItem);
   }

      //  var Repo = document.createElement('div');
      //    Repo.className = 'repoContainer';
      //    page.appendChild(Repo);
       //
      //    console.log('testingREPOINFO', repoInfo);
       //
      //    var Div = document.createElement('Div');
      //      Div.className = 'RepoInfo';
      //      Repo.appendChild(Div);
      //      console.log('testingREPO', Div);
       //
       //
       //
      //      for (var i = 0; i < repoInfo.length; i++) {
      //        console.log(repoInfo[i].name);
       //
      //        var projectsDiv = document.createElement('div');
      //        projectsDiv.className = 'name';
      //        var name = repoInfo[i].name;
      //        projectsDiv.value = repoInfo[i].name;
      //        Div.appendChild(projectsDiv);
       //
    //
    //        }
    //
    //   });
    // });


//name language




}());
