                // PART 2
const cardsAPI = "https://deckofcardsapi.com/api/deck";
const $cardsContainer = $('#cardsContainer');

// Q1
async function getCard() {
  let res = await $.getJSON(`${cardsAPI}/new/draw/`);
  let suit = res.cards[0].suit;
  let value = res.cards[0].value;
  console.log(`${value} OF ${suit}`);
}

getCard()




// Q2
async function drawCards() {
  let firstCard = await $.getJSON(`${cardsAPI}/new/draw/`);
  let deckId = firstCard.deck_id;
  let secondCard = await $.getJSON(`${cardsAPI}/${deckId}/draw/`);
  [firstCard, secondCard].forEach(card => {
    let suit = card.cards[0].suit;
    let value = card.cards[0].value;
    console.log(`${value} OF ${suit}`);
  });
}

drawCards()



// Q3
async function drawACard() {
  let $drawButton = $('#drawButton');
  let $cardArea = $('#cardsContainer');

  let deckData = await $.getJSON(`${cardsAPI}/new/shuffle/`);
  $drawButton.on('click', async function() {
    let cardData = await $.getJSON(`${cardsAPI}/${deckData.deck_id}/draw/`);
    let cardImg = cardData.cards[0].image;
    $cardArea.append(
      $('<img>', {
        src: cardImg,
      })
    );
    if (cardData.remaining === 0) $drawButton.text('DONE!');
  });
}
drawACard();