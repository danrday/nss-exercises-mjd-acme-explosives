"use strict";

var acmeExplosives = (function(acme) {

var $mainContent = $("#mainContent");

var htmlHolder = "";


acme.printToDom = function (selectedID, finalObject) {
  var htmlHolder = "";
  console.log("finalObject DOMHandler", finalObject);
  var allCategories = finalObject.first.categories;
  var allTypes = finalObject.second.types;
  var allProducts = finalObject.third.products;

  var selectedTypes = [];
  var selectedProducts = [];

  for (var x in allTypes) {
    if (allTypes[x].category === selectedID) {
      
      console.log("product type", allTypes[x].name);
      console.log("description", allTypes[x].description)

      selectedTypes.push(allTypes[x]);
      selectedProducts = [];
      for (var y in allProducts) {
        if(allTypes[x].id === allProducts[y].type) {
          // console.log("products", allProducts[y]);
          selectedProducts.push(allProducts[y]);
          console.log("product Name: ", allProducts[y].name)
          console.log("product Description: ", allProducts[y].description)
        }
      }

      console.log(allTypes[x], ": ", selectedProducts)
      $mainContent.html(htmlHolder) 
    }
  };

htmlHolder += '<div class="row">'

for(var x in selectedTypes) {
  htmlHolder +=  `<div class="col-md-4">${selectedTypes[x].description}</div>`
}

htmlHolder += '</div>'

$mainContent.html(htmlHolder);

  // $mainContent.html(`<p>YO</p>`)

};


return acme;

  }
)(acmeExplosives || {});
