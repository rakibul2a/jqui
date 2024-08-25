// jq======
$(document).ready(function(){

	// E1
	$( "#draggable" ).draggable();

	// E2
	$( "#icon" ).draggable();

	// e3
	$( "#accordion" ).accordion({
		collapsible: true
	});

	// e4
	$( "#accord" ).accordion({
		collapsible: true
	});

	// e5
	$( "#dragg" ).draggable();
    $( "#dropp" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // e6
    $( "#resizable" ).resizable({
      animate: true
    });

    // e7
    $( "#selectable" ).selectable();

    // e8
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // e9
    $( "#dialog" ).dialog();

     // e10
   $( "#progressbar" ).progressbar({
      value: 99
    });

   // e11
   $( "#slider" ).slider();

   // e12
     $( "#tabs" ).tabs({
      collapsible: true
    });
    

    
    


	
});