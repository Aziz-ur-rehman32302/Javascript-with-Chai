//====================         Extra JavaScript Notes    ====================
// JavaScript object
// const person = {
//   name: "Aziz",
//   age: 25,
//   country: "Pakistan"
// };

// // Convert to JSON string
// const jsonString = JSON.stringify(person);

// console.log("JSON string:", jsonString);
// //----------------------------------------------------------
// // JSON string (usually from API or file)
// const jsonText = '{"name":"Aziz","age":25,"country":"Pakistan"}';

// // Convert to JavaScript object
// const jsObject = JSON.parse(jsonText);

// console.log("JavaScript object:", jsObject);
// console.log("Name:", jsObject.name);
//-------------------------------------------------
//====================         .sort()    method ====================
// The .sort() method sorts the elements of an array in place and returns the sorted array.               
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
// console.log(fruits); 
// Output: ["apple", "banana", "cherry"]
//-------------------------------------------------
// Example 2: Numbers (Beware!)
// The .sort() method sorts numbers as strings by default, which can lead to unexpected results.
// let numbers = [10, 5, 2, 100];
// numbers.sort();
// console.log(numbers); 
// Output: [10, 100, 2, 5] ❌ (galat lag raha hai)
//====================         .reverse()    method ====================
// The .reverse() method reverses the elements of an array in place and returns the reversed array.
// let numbers = [1, 2, 3, 4, 5];  
// numbers.reverse();
// console.log(numbers);
// Output: [5, 4, 3, 2, 1]
//-------------------------------------------------
//----------------                     The padStart() Method
// The padStart() method pads a string from the start.
// It pads the string with another string (multiple times) until it reaches a given length.
          //  <script>
           // let text = "5";
           // text = text.padStart(4,"0");

           // document.getElementById("demo").innerHTML = text;
           // </script>
          // 0005

//====================         Final Project: Timezone Converter    ====================
// This project allows users to select a country from a dropdown menu and displays the current time in that country.


// Country to timezone mapping
        const countryTimezones = {
    "United States": "America/New_York",
    "United Kingdom": "Europe/London",
    "Japan": "Asia/Tokyo",
    "Australia": "Australia/Sydney",
    "India": "Asia/Kolkata",
    "China": "Asia/Shanghai",
    "Brazil": "America/Sao_Paulo",
    "South Africa": "Africa/Johannesburg",
    "Russia": "Europe/Moscow",
    "Germany": "Europe/Berlin",
    "France": "Europe/Paris",
    "Canada": "America/Toronto",
    "Mexico": "America/Mexico_City",
    "Italy": "Europe/Rome",
    "Spain": "Europe/Madrid",
    "Pakistan": "Asia/Karachi" // 👈 added this line
};


// DOM elements
        const currentTimeDisplay = document.getElementById('current-time');
        const countrySelect = document.getElementById('country-select');
        const timeInput = document.getElementById('time-input');
        const countryDisplay = document.getElementById('country-display');

         // Initialize  or Display the Different  countries in dropdown

         function displayCountiesdropdown() {
            Object.keys(countryTimezones).sort().forEach( country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent= country;
                countrySelect.appendChild (option);
            });
         }
            displayCountiesdropdown();

         // Update current time display


         function updatecurrentTime(){
            // const selectedCountry = countrySelect.value;
            // const timezone = countryTimezones[selectedCountry];
            // const currentTime = new Date().toLocaleTimeString("en-US", {
            //      timeZone: timezone
                
            //      });
            // currentTimeDisplay.textContent = `Current time in ${selectedCountry}: ${currentTime}`;
            // countryDisplay.textContent = `Selected Country: ${selectedCountry}`;

        //     //-------------------- second method -------------------
            const currentTime = new Date();
            currentTimeDisplay.textContent = currentTime.toLocaleTimeString('en-US',{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
             });
         }
         updatecurrentTime();
         setInterval(updatecurrentTime, 1000);


        //  // Update time based on selected country

         function updateTimeForCountry() {
            const selectedCountry = countrySelect.value;
            if( !selectedCountry) return;// Agar koi country select nahin ki gayi ho (empty ho),
                                         // function aage kaam na kare — sidha return kar jaye.

          const timezone = countryTimezones[selectedCountry];//use of bracket or square notation to access the value of the selected country
          const currentTime = new Date(); 
            // const currentTime = new Date().toLocaleString("en-US", { timeZone: timezone });
            // timeInput.value = currentTime;
            // countryDisplay.textContent = `Selected Country: ${selectedCountry}`;
        //     // -------------------- second method -------------------
            
            currentTimeDisplay.innerText = currentTime.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
             clearInterval(updatecurrentTime);
            
         }
         updateTimeForCountry();
         setInterval(updateTimeForCountry, 1000);


 //===========================     Second part of the project    =======================

//=====================    Find countries matching the selected time   =========================

         function findCountriesForTime(){
            const timevalue = timeInput.value;
            if (!timevalue){
                countryDisplay.textContent = 'Select a time to find matching countries.';
                return; // Agar time input khali hai, function aage kaam na kare — sidha return kar jaye.   
                 }
                //  console.log('Selected time:', timevalue);
                //  console.log('Type:',typeof timevalue);
                 const [hours, minutes] = timevalue.split( ':').map(Number);
                //  const now = new Date();
                 const CurrentTime = new Date();
                //  const selectedTime = new Date(
                //      now.getFullYear(),
                //       now.getMonth(),
                //        now.getDate(),
                //         hours, 
                //         minutes
                //      );
                 const matchingCountries = [];

                 Object.entries(countryTimezones).forEach( ([country , timezone]) => {
                    // const countryTime = new Intl.DateTimeFormat('en-GB', {
                    const countryTime = CurrentTime.toLocaleTimeString('en-US', {
                        timeZone:timezone,  
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                 });

                 // format user input to match 'HH:mm' (e.g., "14:30")
                //  const formattedInput = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;


                 if (countryTime === timevalue){
                    matchingCountries.push(country);
                 }
                });
                if (matchingCountries.length > 0 ){
                    countryDisplay.textContent  =  matchingCountries.join(" ,");
                }else{
                    countryDisplay.textContent = 'No countries found for the selected time.';
                }
            }
            // timeInput.addEventListener('change', findCountriesForTime); 
            
            // countrySelect.addEventListener('change', updateTimeForCountry);
            timeInput.addEventListener('change', findCountriesForTime);
            findCountriesForTime();