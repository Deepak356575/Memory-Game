const griddisplay = document.querySelector("#grid");
const resultdisplay = document.querySelector("#score");

const cardarray = [
  {
    name: "1",
    img: "assets/1.jpg",
  },
  {
    name: "2",
    img: "assets/2.jpg",
  },
  {
    name: "3",
    img: "assets/3.jpg",
  },
  {
    name: "4",
    img: "assets/4.jpg",
  },
  {
    name: "5",
    img: "assets/5.jpg",
  },
  {
    name: "6",
    img: "assets/6.jpg",
  },
  {
    name: "7",
    img: "assets/7.jpg",
  },
  {
    name: "8",
    img: "assets/8.jpg",
  },
  {
    name: "1",
    img: "assets/1.jpg",
  },
  {
    name: "2",
    img: "assets/2.jpg",
  },
  {
    name: "3",
    img: "assets/3.jpg",
  },
  {
    name: "4",
    img: "assets/4.jpg",
  },
  {
    name: "5",
    img: "assets/5.jpg",
  },
  {
    name: "6",
    img: "assets/6.jpg",
  },
  {
    name: "7",
    img: "assets/7.jpg",
  },
  {
    name: "8",
    img: "assets/8.jpg",
  },
];

cardarray.sort(() => 0.5 - Math.random());

function createboard() {
  for (let i = 0; i < cardarray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "assets/bg.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    griddisplay.appendChild(card);
  }
}

cardchosen = [];
cardchosenid = [];

function flipcard() {
  const cardid = this.getAttribute("data-id");
  this.setAttribute("src", cardarray[cardid].img);
  cardchosenid.push(cardid);
  cardchosen.push(cardarray[cardid].name);
  
  if(cardchosen.length===2){
    setTimeout(checkmatch, 500);
  }
  
}

cardswon = [];

function checkmatch() {
  const cards = document.querySelectorAll("img");

  if (cardchosen[0] == cardchosen[1]) {
    cards[cardchosenid[0]].setAttribute("src","assets/done.png");
    cards[cardchosenid[1]].setAttribute("src","assets/done.png ");
    cards[cardchosenid[0]].removeEventListener("click", flipcard);
    cards[cardchosenid[1]].removeEventListener("click", flipcard);
    cardswon.push(cardchosen) 
    resultdisplay.innerHTML= cardswon.length  
  }
    

  else {
    cards[cardchosenid[0]].setAttribute("src", "assets/bg.jpg");
    cards[cardchosenid[1]].setAttribute("src", "assets/bg.jpg");
  }
  cardchosen =[];
    cardchosenid = [];

  if(cardswon.length == cardarray.length/2){
    
    alert("Congratulations , you won!");
  }
  }


createboard();
