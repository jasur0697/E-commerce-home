
function remove(el) {
    var element = el;
    element.remove();
  }

var elListViewButton = document.querySelector('.js-list-view-button');
    var elGridViewButton = document.querySelector('.js-grid-view-button');
    var elProducts = document.querySelector('.products');
    var elProductsList = elProducts.querySelector('.categories-right__list');
    var elsProduct = elProductsList.querySelectorAll('.product');

    function switchToProductsListView () {
      elProducts.classList.remove('products--grid');
      elProductsList.classList.remove('products__list--grid');
      elProductsList.classList.add('products__list--list');

      elsProduct.forEach(function (elProduct) {
        elProduct.classList.remove('product--grid');
        elProduct.classList.add('product--list');
      });
    }

    function switchToProductsGridView () {
      elProductsList.classList.remove('products__list--list');
      elProducts.classList.add('products--grid');
      elProductsList.classList.add('products__list--grid');

      elsProduct.forEach(function (elProduct) {
        elProduct.classList.remove('product--list');
        elProduct.classList.add('product--grid');
      });
    }

    if (elListViewButton) {
      elListViewButton.addEventListener('click', switchToProductsListView);
    }

    if (elGridViewButton) {
      elGridViewButton.addEventListener('click', switchToProductsGridView);
    }



    var app = new Vue({
        el: '#app',
        data: {
          books:[
            {
              title: "Harry Potter",
              rating: 4
            }
          ]
        }
      })