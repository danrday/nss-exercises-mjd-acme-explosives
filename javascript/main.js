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
  acme.loadMessages("json/categories.json")
  .then(
    function(json_data) {
      console.log("API call successful and responded with", json_data);
      for (var x in json_data) {
        console.log(json_data[x])
        console.log(selected);
        if (selected === json_data[x].name) {
          console.log("match_id", json_data[x].id)
        };
      }
    },
    // The second callback function will be invoked when you reject
    function(json_data) {
      console.log("API call not successful");
    }
  );

};


acme.loadMessages = function (jsonFile) {
  return new Promise((resolve, reject) => {
    $.ajax(jsonFile)

      .done(function(jsonData) {
        console.log("JSON LOADED")
        for (var x in jsonData) {
            console.log("x", x);
            console.log("jsonData[x]", jsonData[x]);
            resolve(jsonData[x]);
          }
          
    })
      .fail(function() {
         alert("jqhxr request failed to load");
    })
    //   .always(function(jsonData) {
    // });
  });
}



acme.loadMessages("json/products.json")
  .then(
    function(json_data) {
      console.log("API call successful and responded with", json_data);
    },
    // The second callback function will be invoked when you reject
    function(json_data) {
      console.log("API call not successful");
    }
  );



return acme;

  }
)(acmeExplosives || {});










