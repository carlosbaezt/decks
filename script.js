document.getElementById('save_deck').addEventListener('click', () => {
    saveDeck(document.getElementById('InputDeck').value);
    renderDecks();
});

function saveDeck(name) {
    // Store data
    var decks = getDecks();
    if(decks == null ) {
        decks = [];
    }
    decks.push(name);
    localStorage.setItem('decks', JSON.stringify(decks));
}

function renderDecks() {
    var content = '';
    var decks = getDecks();
    if( decks != null ){
        for(var i = 0; i < decks.length; i++ ) {
            content += `<div class="col-sm-4 text_deck">
                    <h3>Deck "${decks[i]}"</h3>
                    <medium>24 cards - Last studied: 30 minutes</medium>
                <hr/>
            </div>
            `;
        }
    }
    document.getElementById('content_decks').innerHTML = content;
}

function getDecks() {
    return JSON.parse(window.localStorage.getItem('decks'));
}

renderDecks();