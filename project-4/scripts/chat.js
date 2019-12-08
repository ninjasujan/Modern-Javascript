
class ChatRoom {
    constructor(room, userName) {
        this.room = room;
        this.username = userName;
        this.chats = db.collection('chat');
        this.unsub;
    }

    async addChat(message) {
        // format a chat
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        // save the document
        const response  = await this.chats.add(chat);
        return response;
    }

    getChats(callback) {
        // fires when each time when changes made to database
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                console.log('state changed');
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added') callback(change.doc.data());
                });
            });
    }

    updateName(userName) {
        this.username = userName;
        localStorage.setItem('username', userName);
    }

    updateRoom(room) {
        this.room = room;
        console.log('developer room updated');
        if(this.unsub)
            this.unsub();
    }
}



