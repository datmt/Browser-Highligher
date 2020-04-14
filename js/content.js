
$(function(){
    
    var delta = 500; //500ms
    var clickCount = 0;
    $(document).on('keydown', function(e){
        if (e.ctrlKey || e.metaKey)
        {
            clickCount++;

            if (clickCount < 2)
            {
                console.log('command clicked', clickCount);
                
                return;
            }

            console.log('command key cliekced');
            var node = window.getSelection();

            //get the selected text
            var selectedText = node.toString();

            if (node.rangeCount == 0)
                return;

            var range = node.getRangeAt(0);
            range.deleteContents();
            // var range = document.createRange();

            //create the highlighted text
            var textNode = document.createElement('span');
            textNode.setAttribute('class', 'high-note');
            selectedText = selectedText.replace(/^\n|\n$/g, '');
            textNode.appendChild(document.createTextNode(selectedText));
            range.insertNode(textNode);


            // window.getSelection().deleteFromDocument()
            //delete(node);
            // console.log('my selection is: ', window.getSelection());
            // console.log('my selection node is: ', window.getSelection().anchorNode);
        }
    });

    setInterval(function(){
        clickCount = 0;
    }, delta);

});