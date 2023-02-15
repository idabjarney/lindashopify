 const liveSearchContainer = document.querySelector('.live-search-container');
 const liveSearchInput = document.querySelector('.live-search-input');
 const resultContainer = document.querySelector('.search-result ul');


 liveSearchInput.addEventListener('input', function(e) {
   const inputValue = e.target.value;
   if (inputValue === '') {
    resultContainer.innerHTML = '';
    return;
   } 
   const queryString = `${window.location.origin}/search/suggest?q=${inputValue}&section_id=predictive-search`;
   renderResults(queryString, e.target);
 })

 async function renderResults(query, inputElement) {
  const response = await fetch(query)
  if (response.status === 200) {
    resultContainer.innerHTML = '';
    const responseMarkup = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(responseMarkup, "text/html");
    const products = Array.from(doc.querySelectorAll('.li-product-card'));
    const producth3 = document.createElement('h3');
    producth3.innerText = 'Products';
    producth3.className = 'product-h3';
    if (inputElement.value === '') return;
    if (products.length > 5) {
      resultContainer.appendChild(producth3);
      products.splice(0, 5).forEach(product => {
        resultContainer.appendChild(product);
      });
      
      const inputValue = inputElement.value;
      const anchor = document.createElement('a');
      anchor.href = `/search/?q=${inputValue}`;
      anchor.innerText = 'Show all results';
      resultContainer.appendChild(anchor);
      anchor.className = 'show-more-btn';
      
    } else if ( products.length < 5 && products.length > 0) {
      resultContainer.appendChild(producth3);
      products.forEach(product => {
        resultContainer.appendChild(product);
      });
    } else {
      const noProductsFound = document.createElement('h3');
      noProductsFound.innerText = 'Sorry! No products were found';
      resultContainer.appendChild(noProductsFound);
      noProductsFound.className = 'no-products-found-h3'
    }
  }
 }
