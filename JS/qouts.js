var Qouts = [
  { qout: "Be yourself everyone else is already taken", name: "-Oscar Wilde-" },
  {
    qout: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.  ",
    name: " -Albert Einstein-",
  },
  { qout: "So many books, so little time.", name: "  -Frank Zappa-" },
  {
    qout: "A room without books is like a body without a soul.",
    name: " -Marcus Tullius Cicero-",
  },
  {
    qout: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ",
    name: "-Bernard Mr.Baruch-",
  },
  {
    qout: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    name: " -William W.Purkey-",
  },
  {
    qout: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    name: "-Dr. Seuss-",
  },
  {
    qout: "You only live once, but if you do it right, once is enough.",
    name: " -Mae West-",
  },
  {
    qout: "In three words I can sum up everything I've learned about life: it goes on.",
    name: " -Robert Frost-",
  },

  {
    qout: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    name: " J.K. Rowling, Harry Potter and the Goblet of Fire",
  },

  {
    qout: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
    name: "Albert Camus",
  },
];
function RandomQouts() {
  var randomqouts = Math.floor(Math.random() * Qouts.length);
  document.getElementById("qout").innerHTML = Qouts[randomqouts].qout;
  document.getElementById("name").innerHTML = Qouts[randomqouts].name;
}
