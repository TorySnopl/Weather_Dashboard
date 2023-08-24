$( function() {
    var availableCities = [
      "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"
    ];
    $( "#tags" ).autocomplete({
      source: availableCities
    });
  } );

  const apiKey = "215c1ef3d4e8886662b4ff8cdb187a51";
  const submitBtn = document.querySelector('.submitBtn');
  let userInput = document.querySelector('#tags');
  let showCurrent = document.getElementById('current-conditions');
  let showFuture = document.getElementById('forecast');
  let city = '';
  let cityList = document.getElementById('sortable');
  let savedCity = document.createElement('li')
  
  

    
  
 



  


  submitBtn.addEventListener('click', function(){
    
    city = userInput.value;
    savedCity.textContent = city;
    savedCity.classList.add('ui-state-default', 'custom-text');
    const newCityEl = savedCity.cloneNode(true);
    cityList.appendChild(newCityEl);
    getWeather()
    
    const locations = Array.from(cityList.querySelectorAll('li'));
    console.log(locations)

    locations.forEach(function(li){
      li.addEventListener('click', function(){
        console.log(li.textContent)
      })
    })
     
  
  });

  



  

  

    function getWeather(city){

      while (showCurrent.firstChild){
        showCurrent.removeChild(showCurrent.firstChild);
      }
     
      city = userInput.value;

    
  
    
    
   
    let geoCode = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid="+apiKey;
    fetch (geoCode)
    .then(Response => Response.json())
    .then(latLon => {
        
        let latCoordinates = JSON.stringify(latLon[0].lat);
        let lonCoordinates = JSON.stringify(latLon[0].lon);
        console.log(latCoordinates, lonCoordinates);
        let weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?lat='+latCoordinates+'&lon='+lonCoordinates+'&appid='+apiKey+'&units=imperial';
       
        fetch(weatherAPI)
        .then(response => response.json())
        .then(currentWeather => {
          

          let curCity = currentWeather.city.name;
          let curDate = currentWeather.list[0].dt_txt;
          let curIcon = currentWeather.list[0].weather[0].icon;
          let curTemp = currentWeather.list[0].main.temp;
          let curWind = currentWeather.list[0].wind.speed;
          let curHumid = currentWeather.list[0].main.humidity;
          let disIcon = document.createElement('img');
          let disCity = document.createElement('h2');
          let disTemp = document.createElement('p');
          let disWind = document.createElement('p');
          let disHumid = document.createElement('p');
          disIcon.src = "http://openweathermap.org/img/w/" + curIcon + ".png";
          disIcon.alt = "weather Icon";
          disCity.textContent = 'City of '+ curCity + ' on ' + curDate;
          disTemp.textContent = 'Current Temp: '+curTemp+ ' degrees';
          disWind.textContent = 'Wind Speed: '+curWind+' mph';
          disHumid.textContent = 'Humidity: '+curHumid+ ' %';
          disCity.classList.add('custom-text');
          disTemp.classList.add('custom-text');
          disWind.classList.add('custom-text');
          disHumid.classList.add('custom-text');

          showCurrent.append(disCity, disIcon, disTemp, disWind, disHumid);

         
          let fI1 = currentWeather.list[7].weather[0].icon;
          let fI2 = currentWeather.list[15].weather[0].icon;
          let fI3 = currentWeather.list[23].weather[0].icon;
          let fI4 = currentWeather.list[31].weather[0].icon;
          let fI5 = currentWeather.list[39].weather[0].icon;

          let i1El = document.getElementById('icon1');
          let i2El = document.getElementById('icon2');
          let i3El = document.getElementById('icon3');
          let i4El = document.getElementById('icon4');
          let i5El = document.getElementById('icon5');

          i1El.src = "http://openweathermap.org/img/w/" + fI1 + ".png";
          i2El.src = "http://openweathermap.org/img/w/" + fI2 + ".png";
          i3El.src = "http://openweathermap.org/img/w/" + fI3 + ".png";
          i4El.src = "http://openweathermap.org/img/w/" + fI4 + ".png";
          i5El.src = "http://openweathermap.org/img/w/" + fI5 + ".png";

          let fT1 = document.getElementById('title1');
          let fT2 = document.getElementById('title2');
          let fT3 = document.getElementById('title3');
          let fT4 = document.getElementById('title4');
          let fT5 = document.getElementById('title5');

          fT1.textContent = currentWeather.list[7].dt_txt;
          fT2.textContent = currentWeather.list[15].dt_txt;
          fT3.textContent = currentWeather.list[23].dt_txt;
          fT4.textContent = currentWeather.list[31].dt_txt;
          fT5.textContent = currentWeather.list[39].dt_txt;

          let fTp1 = document.getElementById('temp1');
          let fTp2 = document.getElementById('temp2');
          let fTp3 = document.getElementById('temp3');
          let fTp4 = document.getElementById('temp4');
          let fTp5 = document.getElementById('temp5');

          fTp1.textContent = 'Temp: ' + currentWeather.list[7].main.temp + '\u2109';
          fTp2.textContent = 'Temp: ' + currentWeather.list[15].main.temp + '\u2109';
          fTp3.textContent = 'Temp: ' + currentWeather.list[23].main.temp + '\u2109';
          fTp4.textContent = 'Temp: ' + currentWeather.list[31].main.temp + '\u2109';
          fTp5.textContent = 'Temp: ' + currentWeather.list[39].main.temp + '\u2109';

          let fW1 = document.getElementById('wind1');
          let fW2 = document.getElementById('wind2');
          let fW3 = document.getElementById('wind3');
          let fW4 = document.getElementById('wind4');
          let fW5 = document.getElementById('wind5');

          fW1.textContent = 'Wind: '+ currentWeather.list[7].wind.speed + ' MPH';
          fW2.textContent = 'Wind: '+ currentWeather.list[15].wind.speed + ' MPH';
          fW3.textContent = 'Wind: '+ currentWeather.list[23].wind.speed + ' MPH';
          fW4.textContent = 'Wind: '+ currentWeather.list[31].wind.speed + ' MPH';
          fW5.textContent = 'Wind: '+ currentWeather.list[39].wind.speed + ' MPH';

          let fH1 = document.getElementById('humid1');
          let fH2 = document.getElementById('humid2');
          let fH3 = document.getElementById('humid3');
          let fH4 = document.getElementById('humid4');
          let fH5 = document.getElementById('humid5');

          fH1.textContent = 'Humidity '+ currentWeather.list[7].main.humidity + '\u0025';
          fH2.textContent = 'Humidity '+ currentWeather.list[15].main.humidity + '\u0025';
          fH3.textContent = 'Humidity '+ currentWeather.list[23].main.humidity + '\u0025';
          fH4.textContent = 'Humidity '+ currentWeather.list[31].main.humidity + '\u0025';
          fH5.textContent = 'Humidity '+ currentWeather.list[39].main.humidity + '\u0025';
          
         
          

          
          
          
          
          
        

      

         

          
          
        
        })
        .catch(error => {
          console.log(error);
        })
    })
    .catch (error => {
        console.log(error);
    })
   
  
  };

$( function() {
  $( "#sortable" ).sortable({
    placeholder: "ui-state-highlight"
  });
  $( "#sortable" ).disableSelection();
} );













  

  


