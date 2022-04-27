console.log('Hello World');

function addComment() {
    var name = document.getElementById('name-text').value;
    var comment = document.getElementById('comment-text').value;
    var commentList = document.getElementById('comment-list');
    var newComment = document.createElement('div');
    
    if (name == "" || comment == "")
        alert("빈칸을 채워주세요);
    
    newComment.id = 'comment';
    newComment.innerHTML = `<div id="title"><b class="name"></b><a class="date"></a></div><br><p class="content"></p>`;
    commentList.appendChild(newComment);
    newComment.getElementsByClassName('name')[0].innerHTML = name;
    newComment.getElementsByClassName('date')[0].innerHTML = new Date().toLocaleString();
    newComment.getElementsByClassName('content')[0].innerHTML = comment;
}
