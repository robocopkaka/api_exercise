require('dotenv').config();
var readlineSync = require('readline-sync');
var request = require('request')
var option = readlineSync.question("If you want to retrieve all best-sellers, type all. If you want to retrieve best-sellers from a particular author, type author: ");

if(option == "author"){
   var author = readlineSync.question("Enter an author's name: ");
   //Use the request method to fetch 
   request.get({
   url: "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json",
   qs:{
    'api-key':process.env.API_KEY,
    author:"" + author  
   }}, function(err, response, body) {
   body = JSON.parse(body);
   console.log(body);
  })
}
else if (option === "all") {
      //Use the request method to fetch 
      request.get({
        url: "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json",
      qs:{
          'api-key':process.env.API_KEY
      }}, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
      })
}

else{
      console.log("You didn't type a valid answer, please try again");
}
