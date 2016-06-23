"use strict";

var acmeExplosives = (function(acme) {
var $elSelectType = $('#selectType');

$elSelectType.change(function() {
  acme.clickHandler();
});

acme.clickHandler = function () {
  var selectedItem = $elSelectType.val();
  acme.jsonLoadChain(selectedItem);
};


acme.jsonLoadChain = function (selected) {
  acme.loadMessagesOne("json/categories.json")
  .then(
    function(json_data) {
      return json_data;
    },
    // The second callback function will be invoked when you reject
    function(json_data) {
      console.log("API call not successful");
    }).then(
      function(jsonObj) {
        console.log("second promise:", jsonObj)
        return acme.loadMessagesTwo(jsonObj)
      },
      function(fail) {
        console.log("failed to load")
      }).then(
      function(jsonObj) {
        console.log("third promise:", jsonObj)
        return acme.loadMessagesThree(jsonObj)
      },
      function(fail) {
        console.log("failed to load")
      }).then(
      function(finalObject) {

        console.log("FINAL OBJECT", finalObject);

        console.log("finalObject.first",finalObject.first.categories);

        var categories = finalObject.first.categories;

        for (var x in categories) {
          if (selected === categories[x].name) {
            console.log("match_id", categories[x].id)

             var selectedID = categories[x].id; 
          }
        }
        console.log("selected", selected)
        console.log("selectedID", selectedID)

        // printToDom(selectedID);

      },
      function(fail) {
        console.log("failed to load")
      })
};



//3 AJAX JSON LOAD FUNCTIONS

acme.loadMessagesOne = function () {
  return new Promise((resolve, reject) => {
    $.ajax("json/categories.json")

      .done(function(jsonData) {
        console.log("JSON LOADED")
            resolve(jsonData);
          })
          
      .fail(function() {
         alert("jqhxr request 1 failed to load");
    })
      // .always();
  });
} 

acme.loadMessagesTwo = function (firstJSON) {
  return new Promise((resolve, reject) => {
    $.ajax("json/types.json")
      .done(function(jsonData) {
        console.log("JSON LOADED")
            var jsonObj = {
              first: firstJSON,
              second: jsonData
            }
            resolve(jsonObj);
          })
          
      .fail(function() {
         alert("jqhxr request 1 failed to load");
    })
      // .always();
  });
} 

acme.loadMessagesThree = function (secondJSON) {
  return new Promise((resolve, reject) => {
    $.ajax("json/products.json")
      .done(function(finalObj) {
        console.log("JSON LOADED")
        console.log("finalObj", finalObj)
        secondJSON.third = finalObj;
        console.log("secondJSON", secondJSON)
            resolve(secondJSON);
          })
          
      .fail(function() {
         alert("jqhxr request 1 failed to load");
    })
      // .always();
  });
} 


return acme;

  }
)(acmeExplosives || {});










