/*change this top bit to add remove sponsors*/

var sponsorList =
  [
    {name: "Craftbrewer", logo: "logos/craftbrewer.jpg", url: "http://craftbrewer.com.au/"},
    {name: "Brewers Choice", logo: "logos/brewerschoice.jpg", url: "http://brewerschoice.com.au/"},
    {name: "Little Creatures", logo: "logos/little_creatures.jpeg", url: "https://littlecreatures.com.au/"},
    {name: "Cryer Malt", logo: "logos/cryermalt.jpg", url: "http://cryermalt.com.au/"},
    {name: "Wyeast", logo: "logos/wyeast.jpg", url: "http://www.wyeastlab.com/"},
    {name: "Australian National Homebrew Conference", logo: "logos/ANHC.jpg", url: "http://anhc.com.au/"},
    {name: "Craft", logo: "logos/craft.png", url: "http://craftwinestore.com/"},
    {name: "The Charming Squire", logo: "logos/squires.png", url: "http://www.jamessquire.com.au/brewbars/the-charming-squire-queensland/"}
  ];


/*don't touch the bit below here if you're just editing sponsors*/
/* helper function from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function SponsorsViewModel() {
  var self = this;
  self.sponsors = shuffle(sponsorList);
}
