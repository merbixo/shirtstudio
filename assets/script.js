
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function openPrintify(collection){
  // placeholder Printify link — replace with your store product/collection link
  let base = 'https://printify.com/merbixo-anime-shop';
  if(collection) base += '/'+collection;
  window.open(base, '_blank');
}

function openCheckoutInfo(){
  document.getElementById('checkoutInfo').classList.remove('hidden');
  document.getElementById('checkoutInfo').classList.add('flex');
}

function closeCheckoutInfo(){
  document.getElementById('checkoutInfo').classList.add('hidden');
  document.getElementById('checkoutInfo').classList.remove('flex');
}

/* simple mobile menu (demo) */
document.getElementById('mobileMenuBtn')?.addEventListener('click', function(){
  alert('This is a demo static site for GitHub Pages. Use the nav links on desktop or edit the file to add a mobile menu.');
});
