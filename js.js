function listAll() {
  document.querySelector('.prikaz').innerHTML = "";

      let xhr = new XMLHttpRequest();

      xhr.open('GET', 'https://restcountries.com/v3.1/all');

      xhr.responseType = 'json';

      xhr.send();

      xhr.onload = function() {
        let responseObj = xhr.response;
      
        //sorting the countries alphabetically
        responseObj.sort(function(a, b) {
          return a.name.common.localeCompare(b.name.common);
      });

        responseObj.forEach(element => { 
          console.log(element);
          var elmnts = document.createElement("div");
          elmnts.classList.add("col-sm-3");
          
          elmnts.innerHTML = "<div class='fw-light card mb-2 mt-2 ' style='width: 18rem;'>" + 
          "<img src='" + element.flags.png + "' class='card-img-top' alt=''>" +
          "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.name.common + "</h5>" +
          " <p class='card-text'>Capital: " + element.capital + "</p>"
          + "<p class='card-text'>Population: " + element.population + "</p>" +
          "<p class='card-text'>Continent: " + element.continents + "</p>" +
        " </div>"+
        "</div>";
                              document.querySelector('.prikaz').appendChild(elmnts);  });

          
      };
}

function detailed() {
  
  var detailed = document.querySelector('.detailedInput').value;
  console.log(detailed);
  if(detailed == ''){
    listAll();
  }
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://restcountries.com/v3.1/name/' + detailed);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function() {
    let responseObj = xhr.response;
  
    //sorting the countries alphabetically
    responseObj.sort(function(a, b) {
      return a.name.common.localeCompare(b.name.common);
  });
// 
    responseObj.forEach(element => { 
      var elmnts = document.createElement("div");
    
      elmnts.innerHTML = "<div style='font-weight: 500;' class=' row rounded mt-3 bg-white shadow mb-5'><div class='card col-sm-6 '><img src='" + element.flags.png + "'>"
       + "</div><div class='col-sm-6 mb-2 bg-white text-center'><div style='font-size: 1.7em;' class='text-dark fw-bold''><p class='mb-2'></p>" + element.name.official + "</div>"
       + "<div class='m-2' style='text-align: left; font-size: 1.3em; font-weight: 400;'><strong class='text-dark'>Capital: </strong>" + element.capital 
       + "<br><strong class='text-dark'>Population: </strong>" + element.population 
       + "<br><strong class='text-dark'>Languages: </strong>" + Object.values(element.languages)[0]
       + "<br><strong class='text-dark'>Currency: </strong>" + Object.values(element.currencies)[0].name
       + "<br><strong class='text-dark'>Continent: </strong>" + element.continents 
       + "<br><strong class='text-dark'>Subregion: </strong>" + element.subregion
       + "<br><strong class='text-dark'>Timezones: </strong><p style='word-wrap: break-word;'>" + element.timezones + "</p></div>"  
       + "</div></div>";
    
    var prikaz = document.querySelector('.prikaz') 
    prikaz.replaceChild(elmnts, prikaz.childNodes[0])
    
    });

      
  };
}

function lessThan() {
  document.querySelector('.prikaz').innerHTML = "";

  var lessInput = document.querySelector('.lessInput').value;
  if(lessInput == ''){
    listAll();
  }
  console.log(lessInput);
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://restcountries.com/v3.1/all');

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function() {
    let responseObj = xhr.response;
  
    //sorting the countries alphabetically
    responseObj.sort(function(a, b) {
      return a.name.common.localeCompare(b.name.common);
  });

    responseObj.forEach(element => 
        { 
      if(element.population < lessInput){
        
     console.log(element);
      var elmnts = document.createElement("div");
      elmnts.classList.add("col-sm-3");
      
      elmnts.innerHTML = "<div class='fw-light card mb-2 mt-2 ' style='width: 18rem;'>" + 
      "<img src='" + element.flags.png + "' class='card-img-top' alt=''>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>" + element.name.common + "</h5>" +
      " <p class='card-text'>Capital: " + element.capital + "</p>"
      + "<p class='card-text'>Population: " + element.population + "</p>" +
      "<p class='card-text'>Continent: " + element.continents + "</p>" +
    " </div>"+
    "</div>";
        
    document.querySelector('.prikaz').appendChild(elmnts); 
    
                        }
                        });

  };

}


function greaterThan() {
  document.querySelector('.prikaz').innerHTML = "";

  var greaterInput = document.querySelector('.greaterInput').value;
  if(greaterInput == ''){
    listAll();
  }
  console.log(greaterInput);
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://restcountries.com/v3.1/all');

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function() {
    let responseObj = xhr.response;
  
    //sorting the countries alphabetically
    responseObj.sort(function(a, b) {
      return a.name.common.localeCompare(b.name.common);
  });

    responseObj.forEach(element => 
        { 
      if(element.population > greaterInput){
        
     console.log(element);
      var elmnts = document.createElement("div");
      elmnts.classList.add("col-sm-3");
      
      elmnts.innerHTML = "<div class='fw-light card mb-2 mt-2 ' style='width: 18rem;'>" + 
      "<img src='" + element.flags.png + "' class='card-img-top' alt=''>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>" + element.name.common + "</h5>" +
      " <p class='card-text'>Capital: " + element.capital + "</p>"
      + "<p class='card-text'>Population: " + element.population + "</p>" +
      "<p class='card-text'>Continent: " + element.continents + "</p>" +
    " </div>"+
    "</div>";
        
    document.querySelector('.prikaz').appendChild(elmnts); 
    
                        }
                        });
  };

}

function fromContinent() {
  document.querySelector('.prikaz').innerHTML = "";

  var continentInput = document.querySelector('.continentInput').value;
  if(continentInput == ''){
    listAll();
  }
  console.log(continentInput);
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://restcountries.com/v3.1/region/' + continentInput);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function() {
    let responseObj = xhr.response;
  
    //sorting the countries alphabetically
    responseObj.sort(function(a, b) {
      return a.name.common.localeCompare(b.name.common);
  });

    responseObj.forEach(element => 
        { 
      
        
     console.log(element.continents);
      var elmnts = document.createElement("div");
      elmnts.classList.add("col-sm-3");
      
      elmnts.innerHTML = "<div class='fw-light card mb-2 mt-2 ' style='width: 18rem;'>" + 
      "<img src='" + element.flags.png + "' class='card-img-top' alt=''>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>" + element.name.common + "</h5>" +
      " <p class='card-text'>Capital: " + element.capital + "</p>"
      + "<p class='card-text'>Population: " + element.population + "</p>" +
      "<p class='card-text'>Continent: " + element.continents + "</p>" +
    " </div>"+
    "</div>";
        
    document.querySelector('.prikaz').appendChild(elmnts); 
    
        
        });
  };

}

function languages() {
  document.querySelector('.prikaz').innerHTML = "";

  var langInput = document.querySelector('.langInput').value;
  if(langInput == ''){
    listAll();
  }
  console.log(langInput);
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://restcountries.com/v3.1/lang/' + langInput);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function() {
    let responseObj = xhr.response;
  
    //sorting the countries alphabetically
    responseObj.sort(function(a, b) {
      return a.name.common.localeCompare(b.name.common);
  });

    responseObj.forEach(element => 
        { 
      
        
     console.log(element);
      var elmnts = document.createElement("div");
      elmnts.classList.add("col-sm-3");
      
      elmnts.innerHTML = "<div class='fw-light card mb-2 mt-2 ' style='width: 18rem;'>" + 
      "<img src='" + element.flags.png + "' class='card-img-top' alt=''>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>" + element.name.common + "</h5>" +
      " <p class='card-text'>Capital: " + element.capital + "</p>"
      + "<p class='card-text'>Population: " + element.population + "</p>" +
      "<p class='card-text'>Continent: " + element.continents + "</p>" +
    " </div>"+
    "</div>";
        
    document.querySelector('.prikaz').appendChild(elmnts); 
    
                        
                        });
  };

}