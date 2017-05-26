$(document).ready(function(){

var calculateTotal = function() {
    var total = 0;
    $('.item-subtotal').each(function(index, subtotal) {
      total += Number($(subtotal).text().trim().substring(1));
    });

    $('#total-price').text('$' + total.toFixed(2));
  };

var createItem = function () {
	//var productRow=$(e.target).parent().parent();
    var itemName = $('#new-item-name').val();
    var itemPrice = $('#new-item-unit-price').val();
   	//itemPrice = Number(itemPrice).toFixed(2);
   	console.log("create connected");
   	if($.isEmptyObject(itemName)===true||itemName===false)
    if($.isNumeric(itemPrice) === false){
       console.log("a");
      alert('Unit price must be a number');
    } else if (itemName === ''){
      alert('Item name cannot be empty');
      console.log("b");
    } else {
    	console.log("c");
      itemPrice = Number(itemPrice).toFixed(2);
      var newItem = '' +
      '<div class="item row">' +
        '<div class="item-name col-md-4">'+ itemName + '</div>' +
        '<div class="item-price col-md-4">$'+ itemPrice + '</div>' +
        '<div class="item-qty col-md-3">' +
          '<label>QTY</label>' +
          '<input class="quantity" value="0">' +
          '<button class="cancel">Cancel</button>' +
        '</div>' +
        '<div class="item-subtotal col-md-2"> $0.00 </div>' +
      '</div>';
      console.log(newItem);

     
      $(newItem).prependTo($('#items-list'));
      $('#new-item-name').val('');
      $('#new-item-unit-price').val('');

      $('input.quantity').off().on('keyup', updateQuantity);
      $('.cancel').off().on('click', removeItem);
    }
  };


var removeItem =function(e) {
	 $(e.delegateTarget).parents('.item').remove();
	    
};

  var updateQuantity = function(event) {
    var $target = $(event.target);
    var quantity = $target.val();
    if ($.isNumeric(quantity)) {
      var $item = $target.parents('.item');
      var $subtotal = $item.find('.item-subtotal');
      var price = $item.find('.item-price').text().trim().substring(1);
      $subtotal.text('$' + (Number(quantity) * Number(price)).toFixed(2));

      calculateTotal();
    }
  };


var init = function() {
	// Adds on click to and calls addListItem function
	// Uses document so that we can remove items that have been created.
	// Adds on click class removeItem and runs function removeItems when clicked
    $('#new-item-create').on('click', createItem);
    $('.cancel').on('click', removeItem);
   
     $('#calc-price-button').on('click', calculateTotal);
    $('input.quantity').on('keyup', updateQuantity);

}
	init();

});