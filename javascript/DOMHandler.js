"use strict";

var acmeExplosives = (function(acme) {

var $mainContent = $("#mainContent");

var $htmlHolder;


acme.printToDom = function (selectedID, finalObject) {
  console.log("finalObject DOMHandler", finalObject);
  var allCategories = finalObject.first.categories;
  var allTypes = finalObject.second.types;
  var allProducts = finalObject.third.products;

  var selectedTypes = [];
  var selectedProducts = [];

  for (var x in allTypes) {
    if (allTypes[x].category === selectedID) {
      // console.log("HI", allTypes[x])
      selectedTypes.push(allTypes[x]);
      selectedProducts = [];
      for (var y in allProducts) {
        if(allTypes[x].id === allProducts[y].type) {
          // console.log("products", allProducts[y]);
          selectedProducts.push(allProducts[y]);
        }
      }

      console.log(allTypes[x], ": ", selectedProducts)

    }
  };
    console.log("selectedTypes", selectedTypes);

  // for (var x in selectedTypes) {
  //   // console.log("HI selected types id", selectedTypes[x].id);
  //     for (var y in allProducts) {
  //       if(selectedTypes[x].id === allProducts[y].type) {
  //         // console.log("products", allProducts[y]);
  //         selectedProducts.push(allProducts[y]);
  //       }
  //     }
  // };

  console.log("selectedProducts", selectedProducts);

  $mainContent.html(`<p>YO</p>`)

};


return acme;

  }
)(acmeExplosives || {});
