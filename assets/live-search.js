 const liveSearchContainer = document.querySelector('.live-search-container');
 const liveSearchInput = document.querySelector('.live-search-input');

 liveSearchInput.addEventListener('input', function(e) {
   const inputValue = e.target.value;
   console.log(`${window.location.origin}/search?q=${inputValue}`);
   
 })
