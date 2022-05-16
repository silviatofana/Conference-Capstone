const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100vh';
  mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

/** More Button */
const moreButton = document.querySelector('.show-more');
const dispNone = document.querySelector('.dis-none1');
const lessButton = document.querySelector('.show-less');

function showB() {
  dispNone.style.display = 'block';
  moreButton.style.display = 'none';
}

function hideB() {
  dispNone.style.display = 'none';
  moreButton.style.display = 'block';
}

moreButton.addEventListener('click', showB);
lessButton.addEventListener('click', hideB);

const mainProgram = document.getElementById('mainProgram');

const prog = [{
  id: 1,
  image: './images/lecture.png',
  headingProgram: 'Motivational Speaker',
  paragraphProgram: 'Listen to the speaker from various countries about sharing and opening',
},
{
  id: 2,
  image: './images/exhibition.png',
  headingProgram: 'CC Exhibition',
  paragraphProgram: 'Listen to the speaker from various countries about sharing and opening',
},
{
  id: 3,
  image: './images/forum.png',
  headingProgram: 'Forum',
  paragraphProgram: 'Listen to the speaker from various countries about sharing and opening',
},
{
  id: 4,
  image: './images/workshop.png',
  headingProgram: 'Workshop',
  paragraphProgram: 'Listen to the speaker from various countries about sharing and opening',
},
{
  id: 5,
  image: './images/brain.png',
  headingProgram: 'CC Ignite',
  paragraphProgram: 'Listen to the speaker from various countries about sharing and opening',
},

];

const programCards = prog

  .map(
    (card) => `

        
        <div class="card">
            <img src="${card.image}" alt="lecture">

            <h3>${card.headingProgram}</h3>
            <p>${card.paragraphProgram}</p>
        </div>
  

`,
  )
  .join('');

mainProgram.innerHTML += programCards;

const featuredSpeakers = document.getElementById('featuredSpeakers');

const speakers = [{
  id: 1,
  img: './images/Picture3.png',
  headingThree: 'FirstName LastName',
  headingFive: 'Bickerman Professor of Entreprenurial Legal Studies at Havard Law School',
  speakerParagraph: 'Listen to the speaker from various countries about sharing and opening',
},
{
  id: 2,
  img: './images/Picture3.png',
  headingThree: 'Muhamad Gaddafi',
  headingFive: 'Philanthropist, Creator of the Longest Man Made River',
  speakerParagraph: 'A man who feeds you controls you. Feed yourself and liberate yourself from slavery',
},

];

const featureCards = speakers.map((card) => `

<div class="card-lec">
<img src="${card.img}" alt="lecture">

<div class="feature-card">
    <h3>${card.headingThree}</h3>
    <h5>${card.headingFive}</h5>
    <p>${card.speakerParagraph}</p>
</div>
</div>


`).join('');

featuredSpeakers.innerHTML += featureCards;

const featuredSpeakers1 = document.getElementById('featuredSpeakers1');

const speakers1 = [{
  id: 1,
  img: './images/Picture3.png',
  headingThree: 'David Ger',
  headingFive: 'Bickerman Professor of Entreprenurial Legal Studies at Havard Law School',
  speakerParagraph: 'Every man must marry, no man deserves to go unpunished. Follow for more',
},
{
  id: 2,
  img: './images/Picture3.png',
  headingThree: 'Donald Trump',
  headingFive: 'Business Mogul, Entreprenuer Former United States President',
  speakerParagraph: 'Business is about precision and execution, you have to be ruthless and precise to succeed',
},
{
  id: 2,
  img: './images/Picture3.png',
  headingThree: 'Barrack Obama',
  headingFive: 'First Black President of the United States, ',
  speakerParagraph: 'I could not come to Kisumu the other time as my aircraft couldnt land in Kisumu',
},
{
  id: 2,
  img: './images/Picture3.png',
  headingThree: 'Thomas Sankara',
  headingFive: 'Revolutionist, Former President of the Burkina Faso',
  speakerParagraph: 'I built road, railway lines, ensured children and women were vaccinated and empowered',
},

];

const featureCards1 = speakers1.map((card) => `

<div class="card-lec">
<img src="${card.img}" alt="lecture">

<div class="feature-card">
    <h3>${card.headingThree}</h3>
    <h5>${card.headingFive}</h5>
    <p>${card.speakerParagraph}</p>
</div>
</div>



`).join('');

featuredSpeakers1.innerHTML += featureCards1;
