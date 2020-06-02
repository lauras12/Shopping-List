
// declare a function
    $(function(){
        // listen for form submission
        $('form#js-shopping-list-form').on('submit', function(event){

            //stops default form submission
            event.preventDefault();

            //get text value for the new item added
            let newItem = $(this).find('input[type="text"]').val();
            $('.js-shopping-list-entry').val('');
            
            // add new shopping list item as a 'li' element
            $('.shopping-list').append(
                `<li>
                    <span class="shopping-item">${newItem}</span>
                    <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                    </div>
                </li>`);
        });

    // listen for click events on delete buttons for shopping list and put the event listener on parent element
        $('.shopping-list').on('click', '.shopping-item-delete', function() {
            //this will look for the cloest parent 'li' element and remove it
            $(this).closest('li').remove();
        });

        //when user clocks on check button, this crosses it off
        $('.shopping-list').on('click', '.shopping-item-toggle', function() {
            //go up to parent li, then find the child '.shopping-item' and toggle
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        });
    });