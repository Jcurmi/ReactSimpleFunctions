class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reels: this.props.reels,
      reelWinners: [0, 0, 0],
      isWinner: false
    };
  }

  handleClick() {
    this.setState(state => ({
      reelWinners = getReelWinners(state.reels),
      isWinner = isAWinner(state.reelWinners)
    }));
  }

  render() {
    return (
      <div>
        <h1>Slot Machine</h1>
        <ul>
          {this.state.reels.map((reelOptions, index) => {
            return (
              <Reel
                reelOptions={reelOptions}
                winner={this.state.reelWinners[index]}
              />
            );
          })}
        </ul>
        <button onClick={this.handleSubmit}>Lever</button>
      </div>
    );
  }
  
}
const REELS = [
  [
    { obj: "cherry" },
    { obj: "lemon" },
    { obj: "apple" },
    { obj: "lemon" },
    { obj: "banana" },
    { obj: "banana" },
    { obj: "lemon" },
    { obj: "lemon" }
  ],
  [
    { obj: "lemon" },
    { obj: "apple" },
    { obj: "lemon" },
    { obj: "lemon" },
    { obj: "cherry" },
    { obj: "apple" },
    { obj: "banana" },
    { obj: "lemon" }
  ],
  [
    { obj: "lemon" },
    { obj: "apple" },
    { obj: "lemon" },
    { obj: "apple" },
    { obj: "cherry" },
    { obj: "apple" },
    { obj: "banana" },
    { obj: "lemon" }
  ]
];

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


const getReelWinners = function(reels) {
  return reels.map(reel => {
    return getRandomInt(0, reel.length);
  });
};

const isAWinner = function(winners) {
  for (var i = 0, l = winners.length; i < l - 1; i++) {
    if (winners[i] !== winners[i + 1]) return false;
  }
  return true;
};

