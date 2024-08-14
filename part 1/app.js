                // PART 1

const favNum = 143;
const favNums = [11, 88, 143];
const newFavNum = 888
const numbersApi = "http://numbersapi.com";
const $factsContainer = $('#factsHere')

// Q1
async function getFact(){
  let res = await $.getJSON(`${numbersApi}/${favNum}?json`);
  console.log(res);
}

getFact()

// Q2
async function getFacts(){
  let res = await $.getJSON(`${numbersApi}/${favNums}?json`);
  console.log(res);
}

getFacts()


// Q3
async function getMultFacts(){
  let res = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${numbersApi}/${newFavNum}?json`))
  );
  res.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}

getMultFacts()



  

              