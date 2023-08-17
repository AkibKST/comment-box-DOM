    // step-1: add event listener to the poswt button
    document.getElementById('btn-post').addEventListener('click', function(){
        // step-2: get the comment inside the text area
        const commentBox = document.getElementById('new-comment');
        const newComment = commentBox.value;
        
        // step-3: set the comment inside the comment container
        // 1. get the comment container
        const commentContainer = document.getElementById('comment-container');
        // 2. create a new element (p tag)
        const p = document.createElement('p');
        // 3. set the text of the comment as inner text of the p tag
        p.innerText = newComment;
        // 4. add the p tag using appendChild
        commentContainer.appendChild(p);

        // step-4: clear the comment box
        commentBox.value = '';
    })