var getrvar = Array();
$(document).ready(function() {
  var $autocomplete = $('<ul class="autocomplete3"></ul>')
  .insertBefore('#hqstock').hide();
  var selectedItem = null;

  var setSelectedItem = function(item) {
    selectedItem = item;

    if (selectedItem === null) {
      $autocomplete.hide();
      return;
    }

    if (selectedItem < 0) {
      selectedItem = 0;
    }
    if (selectedItem >= $autocomplete.find('li').length) {
      selectedItem = $autocomplete.find('li').length - 1;
    }
    $autocomplete.find('li').removeClass('selected')
      .eq(selectedItem).addClass('selected');
    $autocomplete.show();
  };

  var populateSearchField = function() {
    $('#hqstock').val($autocomplete
    .find('li').eq(selectedItem).text());    
    setSelectedItem(null);
  };

  $('#hqstock')
  .attr('autocomplete', 'off')
  .keyup(function(event) {
    if ((event.keyCode > 40 || event.keyCode == 8 || event.keyCode == 32)) {
		
      // Keys with codes 40 and below are special (enter, arrow keys, escape, etc.).
      // Key code 8 is backspace.
      if($('#hqstock').val().length > 0 && $('#hqstock').val().length < 8){
	      getrvar.length = 0;	
		   //$.getJSON("http://stock.caijing.com.cn/stock/stockkey.jsp?key="+$('#hqstock').val()+"&jsoncallback=?", function(json){
		   $.getJSON("http://news.10jqka.com.cn/public/index_keyboard_caijing.php?type=stock&search-text=" + $('#hqstock').val() + "&jsoncallback=?", function(json){
				if (json!=null&&json.length ) {	          
	            $autocomplete.empty();
	            $.each(json, function(index, term) {
	              getrvar[index] = term.split("||");
	              $('<li></li>').text(getrvar[index][1]).appendTo($autocomplete).mouseover(function() {                
	                setSelectedItem(index);
	              }).click(populateSearchField);
	            });	
	            setSelectedItem(0);
					}
				});        
    	}else {
        setSelectedItem(null);
      }
    }
    else if (event.keyCode == 38 && 
                                 selectedItem !== null) {
      // User pressed up arrow.
      setSelectedItem(selectedItem - 1);
      event.preventDefault();
    }
    else if (event.keyCode == 40 && 
                                 selectedItem !== null) {
      // User pressed down arrow.
      setSelectedItem(selectedItem + 1);
      event.preventDefault();
    }
    
    else if (event.keyCode == 27 && selectedItem !== null) {
      // User pressed escape key.
      setSelectedItem(null);
    }
  }).keypress(function(event) {
    if (event.keyCode == 13 && selectedItem !== null) {
      // User pressed enter key.
      populateSearchField();
      event.preventDefault();
    }
  }).blur(function(event) {
    setTimeout(function() {
      setSelectedItem(null);
    }, 250);
  });
});
$(document).ready(function() {
  var $autocomplete = $('<ul class="autocomplete3"></ul>')
  .insertBefore('#hqstock1').hide();
  var selectedItem = null;

  var setSelectedItem = function(item) {
    selectedItem = item;

    if (selectedItem === null) {
      $autocomplete.hide();
      return;
    }

    if (selectedItem < 0) {
      selectedItem = 0;
    }
    if (selectedItem >= $autocomplete.find('li').length) {
      selectedItem = $autocomplete.find('li').length - 1;
    }
    $autocomplete.find('li').removeClass('selected')
      .eq(selectedItem).addClass('selected');
    $autocomplete.show();
  };

  var populateSearchField = function() {
    $('#hqstock1').val($autocomplete
    .find('li').eq(selectedItem).text());    
    setSelectedItem(null);
  };

  $('#hqstock1')
  .attr('autocomplete', 'off')
  .keyup(function(event) {
    if ((event.keyCode > 40 || event.keyCode == 8 || event.keyCode == 32)) {
		
      // Keys with codes 40 and below are special (enter, arrow keys, escape, etc.).
      // Key code 8 is backspace.
      if($('#hqstock1').val().length > 0 && $('#hqstock1').val().length < 8){
	      getrvar.length = 0;	
		   //$.getJSON("http://stock.caijing.com.cn/stock/stockkey.jsp?key="+$('#hqstock1').val()+"&jsoncallback=?", function(json){
		   $.getJSON("http://news.10jqka.com.cn/public/index_keyboard_caijing.php?type=stock&search-text=" + $('#hqstock1').val() + "&jsoncallback=?", function(json){
				if (json!=null&&json.length) {	          
	            $autocomplete.empty();
	            $.each(json, function(index, term) {
	              getrvar[index] = term.split("||");
	              $('<li></li>').text(getrvar[index][1]).appendTo($autocomplete).mouseover(function() {                
	                setSelectedItem(index);
	              }).click(populateSearchField);
	            });	
	            setSelectedItem(0);
					}
				});        
    	}else {
        setSelectedItem(null);
      }
    }
    else if (event.keyCode == 38 && 
                                 selectedItem !== null) {
      // User pressed up arrow.
      setSelectedItem(selectedItem - 1);
      event.preventDefault();
    }
    else if (event.keyCode == 40 && 
                                 selectedItem !== null) {
      // User pressed down arrow.
      setSelectedItem(selectedItem + 1);
      event.preventDefault();
    }
    
    else if (event.keyCode == 27 && selectedItem !== null) {
      // User pressed escape key.
      setSelectedItem(null);
    }
  }).keypress(function(event) {
    if (event.keyCode == 13 && selectedItem !== null) {
      // User pressed enter key.
      populateSearchField();
      event.preventDefault();
    }
  }).blur(function(event) {
    setTimeout(function() {
      setSelectedItem(null);
    }, 250);
  });
});




