// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const chatRooms = document.querySelector('.chat-rooms');


// add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chat.addChat(message).then(data => newChatForm.reset() )
});

// upadate username
newName.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newname = newName.name.value.trim();
    chat.updateName(newname);
    newName.reset();
    // show then hide the message
    updateMsg.innerText = `Your name was updated to ${newname}`;
    setTimeout(() => {
        updateMsg.innerText = '';
    }, 3000);
});

// update chat room
chatRooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chat.updateRoom(e.target.getAttribute('id'));
        chat.getChats(data => chatUI.render(data));
    }
});

// check localstorage for name
const username = localStorage.username ? localStorage.username : 'anon' ;


// class instances
const chat = new ChatRoom('gaming', username);
const chatUI = new ChatUI(chatList);

// get the chat and render
chat.getChats(data => {
    chatUI.render(data);
});






