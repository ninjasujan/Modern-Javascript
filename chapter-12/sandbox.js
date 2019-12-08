const list = document.querySelector('ul');
const form = document.querySelector('form');
const unsub = document.querySelector('.unsub');

const addRecipes = (recipes, id) => {
    let time = recipes.created_at.toDate()
    let html = 
        `<li data-id="${id}">
                <div>${recipes.title}</div>
                <div>${time}</div>
                <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>`;
        console.log(html);
    list.innerHTML += html;
}

// get document from firestore

/* db.collection('recipies').get().then(snapshot => {
    // when we have data
    // console.log(snapshot.docs[1].data());
    snapshot.docs.forEach(doc => {
        addRecipes(doc.data(), doc.id);
    });
}).catch(err => {
    console.log(err);
}); */


// 

const deleteRecipes = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id) recipe.remove();
    });
}


const unsubsc = db.collection('recipies').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added') addRecipes(doc.data(), doc.id);
        else if(change.type === 'removed') deleteRecipes(doc.id);
    });
});

// add document 

form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const recipes = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    db.collection('recipies').add(recipes)
        .then(() => console.log('recipes added'))
        .catch(err => console.log(err));
        form.recipe.value = "";
});

// delete document
list.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('recipies').doc(id).delete()
            .then(() => console.log('recipes deleted'))
            .catch(err => console.log(err));
    }
});

// unsubscribe from database changes

unsub.addEventListener('click', () => {
    unsubsc();
    console.log('unsubscribed from changes');
});
