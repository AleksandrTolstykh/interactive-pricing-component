let slider = $('#slider');
let checkbox = $('#switch');
let discount = false;

updatePage();

slider.mousemove(function() {
  updatePage();
});

checkbox.click(function() {
  discount = !discount;
  updatePage();
});

function updatePage() {
  $('.pageview span').text(slider.val() * 2 + 'K ');
  if (discount) {
    $('.price').html('$' + parseFloat(slider.val() * 0.75).toFixed(2) + '<span> /month</span>');
  } else {
    $('.price').html('$' + parseFloat(slider.val()).toFixed(2) + '<span> /month</span>');
  }
}
