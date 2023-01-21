// $( function() {
//     $( "#sortable" ).sortable();
//     // $( "#sortable" ).disableSelection();
// } );

$( "#dialog" ).hide();

$('#picBtn').on('click', function(){
    $( function() {
        $( "#dialog" ).dialog({width: 470, modal: true, });
      } );
});

arrayOrder = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

for (i = arrayOrder.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = arrayOrder[i]
    arrayOrder[i] = arrayOrder[j]
    arrayOrder[j] = k
}

for (var i = 0; i <= 15; i++) {
    var tile = $('<li>');
    var j = i + 1;
    tile.attr({'class':'ui-state-palceholder','id':'tile_' + (i + 1)});
    tile.css('background','none');
    tile.appendTo($('#sortable'));
    var tileHolder = $('<div>');
    tileHolder.appendTo(tile);
    tileHolder.attr('class','droppableParent');
    tileHolder.css({'background-image':'url("./assets/images/pp' + arrayOrder[i] + '.png"',
               'background-size':'contain', 'width':'200px','height':'200px'});
}

function dragDrop() {
    var droppableParent;

    $('ul li div').draggable({
        revert: 'invalid',
        revertDuration: 200,
        start: function () {
            droppableParent = $(this).parent();

            $(this).addClass('being-dragged');
        },
        stop: function () {
            $(this).removeClass('being-dragged');
        }
    });

    $('ul li div').droppable({
        hoverClass: 'drop-hover',
        drop: function (event, ui) {
            var draggable = $(ui.draggable[0]),
                container = $(event.target.parentElement),
                container2 = $(event.target);

            $(event.target).appendTo(droppableParent).css({opacity: 0}).animate({opacity: 1}, 200);
			
			draggable.appendTo(container).animate({left: 0, top: 0}, 200);
        }
    });
}

dragDrop();