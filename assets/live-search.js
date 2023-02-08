 const liveSearchContainer = document.querySelector('.live-search-container');
 const liveSearchInput = document.querySelector('.live-search-input');
 const resultContainer = document.querySelector('.result');

 liveSearchInput.addEventListener('input', function(e) {
   const inputValue = e.target.value;
   if (inputValue === '') return;
   const queryString = `${window.location.origin}/search/suggest?q=${inputValue}&section_id=predictive-search`;
   renderResults(queryString);
 })

 async function renderResults(query) {
  const response = await fetch(query)
  if (response.status === 200) {
    const responseMarkup = await response.text();
    resultContainer.innerHTML = responseMarkup;
  }
 }