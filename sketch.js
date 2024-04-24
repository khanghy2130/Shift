const CELL_SCALE = 260;
const OUTLINE_THICKNESS = 4;
const BO = [360, 300]; // BOARD OFFSET
const SLIDE_SPEED = 0.08;
const COLORS = {};

const LEVELS = [
  // [0,1,2,3][24]
  // 1
  [
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
  ],
  // 2
  [
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
  ],
  // 3
  [
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
  ],
  // 4
  [
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
  ],
  // 5
  [
    [4, 4, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [4, 4, 4, 4],
    [5, 5, 5, 5],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [5, 5, 5, 5],
    [1, 1, 1, 1],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [1, 1, 1, 1],
    [5, 5, 5, 5],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [5, 5, 5, 5],
    [1, 1, 1, 1],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [1, 1, 1, 1],
    [5, 5, 5, 5],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [5, 5, 5, 5],
  ],
  // 6
  [
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
  ],

  // 7
  [
    [4, 0, 0, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 4, 4, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 0, 0, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 4, 4, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 0, 0, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 4, 4, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // 8
  [
    [5, 5, 5, 5],
    [4, 4, 5, 5],
    [5, 5, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [4, 4, 5, 5],
    [5, 5, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [4, 4, 5, 5],
    [5, 5, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [4, 4, 5, 5],
    [5, 5, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [4, 4, 5, 5],
    [5, 5, 4, 4],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [4, 4, 5, 5],
    [5, 5, 4, 4],
    [5, 5, 5, 5],
  ],
  // 9
  [
    [3, 2, 2, 1],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [1, 2, 2, 1],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [1, 2, 2, 0],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [0, 2, 2, 0],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [0, 2, 2, 3],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [3, 2, 2, 3],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
  ],
  // 10
  [
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 4],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 3],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
  ],
  // 11
  [
    [1, 1, 1, 1],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [1, 1, 1, 1],
    [3, 3, 3, 1],
    [3, 3, 3, 3],
    [3, 3, 3, 1],
    [3, 3, 3, 3],
    [1, 3, 3, 3],
    [1, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [1, 1, 1, 1],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [1, 1, 1, 1],
    [3, 3, 3, 1],
    [3, 3, 3, 3],
    [3, 3, 3, 1],
    [3, 3, 3, 3],
    [1, 3, 3, 3],
    [1, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
  ],
  // 12
  [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 5, 5],
    [2, 2, 2, 2],
    [5, 5, 5, 5],
    [2, 2, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 3, 3],
    [5, 5, 5, 5],
    [3, 3, 3, 3],
    [5, 5, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 2, 2],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [3, 3, 2, 2],
  ],
  // 13
  [
    [5, 2, 0, 0],
    [2, 3, 3, 2],
    [0, 0, 0, 0],
    [3, 3, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [5, 2, 0, 0],
    [2, 3, 3, 2],
    [0, 0, 0, 0],
    [3, 3, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [5, 2, 0, 0],
    [2, 3, 3, 2],
    [0, 0, 0, 0],
    [3, 3, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // 14
  [
    [5, 1, 1, 5],
    [1, 5, 5, 1],
    [1, 5, 5, 1],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [1, 1, 5, 5],
    [5, 5, 1, 1],
    [5, 5, 5, 5],
    [5, 1, 1, 5],
    [1, 5, 5, 1],
    [1, 5, 5, 1],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [1, 1, 5, 5],
    [5, 5, 1, 1],
    [5, 5, 5, 5],
    [5, 1, 1, 5],
    [1, 5, 5, 1],
    [1, 5, 5, 1],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [1, 1, 5, 5],
    [5, 5, 1, 1],
    [5, 5, 5, 5],
  ],
  // 15
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [3, 3, 3, 3],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 3, 3],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [3, 3, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [3, 3, 3, 3],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 3, 3],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [3, 3, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
  ],
  // 16
  [
    [4, 0, 4, 0],
    [4, 4, 4, 0],
    [4, 0, 0, 0],
    [4, 4, 0, 0],
    [0, 2, 0, 2],
    [0, 0, 0, 2],
    [0, 2, 2, 2],
    [0, 0, 2, 2],
    [2, 3, 2, 3],
    [2, 2, 2, 3],
    [2, 3, 3, 3],
    [2, 2, 3, 3],
    [3, 1, 3, 1],
    [3, 3, 3, 1],
    [3, 1, 1, 1],
    [3, 3, 1, 1],
    [1, 5, 1, 5],
    [1, 1, 1, 5],
    [1, 5, 5, 5],
    [1, 1, 5, 5],
    [5, 4, 5, 4],
    [5, 5, 5, 4],
    [5, 4, 4, 4],
    [5, 5, 4, 4],
  ],
];

const LEVELS_DIFF = [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 2, 2, 2];

let bestTimes = [];
for (let i = 0; i < LEVELS.length; i++) {
  bestTimes.push(null);
}

let goalImg;
let transitionSquares = []; // {pos, vel, r, img}
let scene = "TITLE"; // TITLE, MENU, PLAY
let titleImg;

let level = 0;
let playIntroProgress = 0;
const WIN_TEXT = "COMPLETED".split("").map(function (le, i) {
  return {
    char: le,
    progress: 0,
  };
});

let cellsMap = {}; // key: planeNum + "," + cellNum
let cellKeys = [];
let allRows = [];

let startTime = 0;
let timeElapsed = 0;
let gameEnded = false;

let shifting = {
  active: false,
  cellKey: null,
  display: {
    slideProgress: 0,
    step: 0,
    row: null,
  },
};

class BTN {
  constructor(x, y, w, h, customRender, clicked, noBg) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.noBg = noBg;
    this.customRender = customRender;
    this.clicked = function () {
      this.hoverProgress = 0.5;
      clicked();
    };
    this.isHovered = false;
    this.hoverProgress = 0;
  }

  render() {
    // frame
    noFill();
    stroke(COLORS.LIGHT);
    strokeWeight(this.hoverProgress * 2);
    const sizeFactor = this.hoverProgress * 20;
    rect(this.x, this.y, this.w + sizeFactor, this.h + sizeFactor);

    // static border
    if (!this.noBg) {
      strokeWeight(2);
      rect(this.x, this.y, this.w, this.h);
    }
    this.customRender();

    // check hover
    if (
      _mouseX < this.x + this.w / 2 &&
      _mouseX > this.x - this.w / 2 &&
      _mouseY < this.y + this.h / 2 &&
      _mouseY > this.y - this.h / 2
    ) {
      this.isHovered = true;
      cursor(HAND);
      this.hoverProgress = min(1, this.hoverProgress + 0.1);
    } else {
      this.isHovered = false;
      this.hoverProgress = max(0, this.hoverProgress - 0.1);
    }
  }
}

const MENU_LV_BTN_DELAY = -0.5;
const LBPOS = [
  [185, 120],
  [415, 120],
  [185, 350],
  [415, 350],
];
// {btn, animateProgress (0 to 1), levelData {goalImg, bestTime, difficulty} }
const levelButtons = [];
LBPOS.forEach(function (pos, i) {
  levelButtons[i] = {
    animateProgress: 0, // 0 to 1 only
    levelData: null,
    difficulty: 0, // 0, 1, 2
    btn: new BTN(
      pos[0],
      pos[1],
      180,
      180,
      function () {
        const lvbtn = levelButtons[i];
        lvbtn.animateProgress = min(1, lvbtn.animateProgress + 0.1);
        if (lvbtn.animateProgress < 0) return;
        if (lvbtn.levelData === null) {
          const lvIndex = i + menuPageIndex * 4;
          lvbtn.levelData = {
            goalImg: getGoalImg(lvIndex),
            difficulty: LEVELS_DIFF[lvIndex],
            bestTime: bestTimes[lvIndex],
          };
        } else {
          image(
            lvbtn.levelData.goalImg,
            this.x,
            this.y,
            this.w * lvbtn.animateProgress,
            this.h
          );

          // render difficulty
          noStroke();
          let c, t;
          if (lvbtn.levelData.difficulty === 0) {
            c = color(0, 255, 0);
            t = "easy";
          } else if (lvbtn.levelData.difficulty === 1) {
            c = color(255, 255, 0);
            t = "medium";
          } else if (lvbtn.levelData.difficulty === 2) {
            c = color(255, 100, 100);
            t = "hard";
          }
          fill(c);
          textSize(18 * lvbtn.animateProgress);
          text(t, this.x - 70, this.y - 70);

          // render best time
          if (lvbtn.levelData.bestTime) {
            let minute = floor(lvbtn.levelData.bestTime / 60000);
            let sec = floor((lvbtn.levelData.bestTime % 60000) / 1000) + "";
            if (sec.length === 1) {
              sec = "0" + sec;
            }
            push();
            translate(this.x, this.y);
            rotate(-20 * lvbtn.animateProgress);
            fill(COLORS.BG);
            rect(0, 0, 120 * lvbtn.animateProgress, 40 * lvbtn.animateProgress);
            fill(COLORS.LIGHT);
            textSize(32 * lvbtn.animateProgress);
            text(`${minute}:${sec}`, 0, 0);
            pop();
          }
        }
      },
      function () {
        level = i + menuPageIndex * 4;
        loadLevel();
        setupTransition();
        scene = "PLAY";
      },
      true
    ),
  };
});

let menuPageIndex;
let menuLeftBtn = new BTN(
  150,
  550,
  100,
  50,
  function () {
    stroke(COLORS.LIGHT);
    strokeWeight(5);
    line(this.x + 10, this.y - 10, this.x - 10, this.y);
    line(this.x - 10, this.y, this.x + 10, this.y + 10);
  },
  function () {
    if (menuPageIndex <= 0) return;
    refreshMenu(menuPageIndex - 1);
  }
);
let menuRightBtn = new BTN(
  450,
  550,
  100,
  50,
  function () {
    stroke(COLORS.LIGHT);
    strokeWeight(5);
    line(this.x - 10, this.y - 10, this.x + 10, this.y);
    line(this.x + 10, this.y, this.x - 10, this.y + 10);
  },
  function () {
    if (menuPageIndex >= ceil(LEVELS.length / 4) - 1) return;
    refreshMenu(menuPageIndex + 1);
  }
);

let exitBtn = new BTN(
  100,
  520,
  120,
  40,
  function () {
    noStroke();
    textSize(24);
    fill(COLORS.LIGHT);
    text("Menu", this.x, this.y);
  },
  function () {
    scene = "MENU";
    refreshMenu(menuPageIndex);
    setupTransition();
  }
);

function refreshMenu(mpi) {
  menuPageIndex = mpi;

  levelButtons.forEach((lvbtn, i) => {
    lvbtn.levelData = null;
    lvbtn.animateProgress = MENU_LV_BTN_DELAY * i;
    lvbtn.btn.hoverProgress = 0;
  });
}

function getShiftedRow() {
  let csList = [];
  for (let i = 0; i < shifting.display.row.length; i++) {
    csList.push(cellsMap[shifting.display.row[i]].slices.slice(0));
  }
  let step = shifting.display.step;
  while (step !== 0) {
    // apply temporary color shifting
    if (step > 0) {
      // positive
      step--;
      csList = [
        // shift all cs
        csList[3],
        csList[0],
        csList[1],
        csList[2],
      ];
      csList[0] = [
        // first cs
        csList[0][3],
        csList[0][0],
        csList[0][1],
        csList[0][2],
      ];
      csList[2] = [
        // third cs
        csList[2][1],
        csList[2][2],
        csList[2][3],
        csList[2][0],
      ];
    } else if (step < 0) {
      // negative
      step++;
      csList = [
        // shift all cs
        csList[1],
        csList[2],
        csList[3],
        csList[0],
      ];
      csList[1] = [
        // first cs
        csList[1][3],
        csList[1][0],
        csList[1][1],
        csList[1][2],
      ];
      csList[3] = [
        // third cs
        csList[3][1],
        csList[3][2],
        csList[3][3],
        csList[3][0],
      ];
    }
  }
  return csList;
}

function getGoalImg(lvIndex) {
  // set slices data to all cells
  for (let i = 0; i < cellKeys.length; i++) {
    cellsMap[cellKeys[i]].slices = LEVELS[lvIndex][i].slice(0);
  }

  // get goal image
  const grph = createGraphics(600, 600, P2D);
  grph.noStroke();
  for (let i = 0; i < cellKeys.length; i++) {
    let c = cellsMap[cellKeys[i]];
    let cc = c.corners;

    for (let s = 0; s < c.slices.length; s++) {
      grph.fill(COLORS.SLICES[c.slices[s]]);
      grph.triangle(
        c.center[0],
        c.center[1],
        cc[s][0],
        cc[s][1],
        cc[nsi(s + 1)][0],
        cc[nsi(s + 1)][1]
      );
    }
  }
  return grph.get(
    BO[0] - CELL_SCALE,
    BO[1] - CELL_SCALE,
    CELL_SCALE * 2,
    CELL_SCALE * 2
  );
}

function loadLevel() {
  setupTransition();
  isNewBest = false;
  playIntroProgress = 0;
  startTime = Date.now();
  timeElapsed = 0;
  gameEnded = false;
  goalImg = getGoalImg(level);

  // shuffle while isn't shuffled
  let safeBreak = 0;
  do {
    if (safeBreak++ > 5) {
      break;
    }
    for (let i = 0; i < 25; i++) {
      shifting.display.row = getRandomItem(allRows);
      shifting.display.step = randomInt(1, 4);
      let csList = getShiftedRow();
      for (let i = 0; i < csList.length; i++) {
        cellsMap[shifting.display.row[i]].slices = csList[i];
      }
    }
  } while (checkWin());
  shifting.display.row = null;
}

function checkWin() {
  for (let i = 0; i < cellKeys.length; i++) {
    let slices = cellsMap[cellKeys[i]].slices;
    let goalSlices = LEVELS[level][i];
    for (let j = 0; j < slices.length; j++) {
      if (goalSlices[j] !== slices[j]) {
        return false;
      }
    }
  }
  return true;
}

function setupTransition() {
  g = 0;
  transitionSquares = []; // reset
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      transitionSquares.push({
        img: get(x * 150, y * 150, 150, 150),
        pos: [x * 150 + 75, y * 150 + 75],
        vel: [random(-6, 6), random(-50, -40)],
        r: [0, random(-5, 5)],
      });
    }
  }
}

let isNewBest = false;
function triggerWin() {
  gameEnded = true;
  const prevBestTime = bestTimes[level];
  if (!prevBestTime || prevBestTime > timeElapsed) {
    isNewBest = true;
    bestTimes[level] = timeElapsed;
  }
  // set letters progress
  WIN_TEXT.forEach((obj, i) => {
    obj.progress = i * -0.05;
  });
}

function windowResized() {
  viewportWidth = Math.min(window.innerWidth, window.innerHeight);
  scaleFactor = viewportWidth / 600;
  canvas.elt.style.transform = "scale(" + scaleFactor + ")";
}

let scaleFactor = 1;
let canvas;
function setup() {
  canvas = createCanvas(600, 600, document.getElementById("game-canvas"));
  windowResized();

  textFont("monospace");
  pixelDensity(1);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  strokeJoin(ROUND);

  COLORS.BG = 30;
  COLORS.LIGHT = 220;
  COLORS.SLICES = [
    color(115, 170, 255), // blue
    color(115, 255, 75), // green
    color(245, 205, 85), // light orange
    color(245, 95, 135), // bright pink
    color(18, 227, 223), // teal
    color(210, 100, 255), // purple
  ];

  // set up points
  let hexCorners = []; // 6 starting with top
  for (let i = 0; i < 6; i++) {
    hexCorners.push([
      BO[0] + cos(i * 60 - 90) * CELL_SCALE,
      BO[1] + sin(i * 60 - 90) * CELL_SCALE,
    ]);
  }
  let midHexPoints = [];
  for (let i = 0; i < 6; i++) {
    let p1 = hexCorners[i];
    let p2 = hexCorners[nhi(i + 1)];
    midHexPoints.push([(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]);
  }
  let midmidPoints1 = []; // left of midHexPoint
  let midmidPoints2 = []; // right of midHexPoint
  for (let i = 0; i < 6; i++) {
    let midPoint = midHexPoints[i];
    let preMid = hexCorners[i];
    let postMid = hexCorners[nhi(i + 1)];
    midmidPoints1.push([
      (midPoint[0] + preMid[0]) / 2,
      (midPoint[1] + preMid[1]) / 2,
    ]);
    midmidPoints2.push([
      (midPoint[0] + postMid[0]) / 2,
      (midPoint[1] + postMid[1]) / 2,
    ]);
  }
  let innerMidPoints = []; // between center and midHexPoint
  for (let i = 0; i < 6; i++) {
    let midPoint = midHexPoints[i];
    innerMidPoints.push([(midPoint[0] + BO[0]) / 2, (midPoint[1] + BO[1]) / 2]);
  }
  let outerMidPoints = []; // between midmidPoint1 and innerMidPoint
  for (let i = 0; i < 6; i++) {
    let mmp1 = midmidPoints1[i];
    let imp = innerMidPoints[nhi(i - 1)];
    outerMidPoints.push([(mmp1[0] + imp[0]) / 2, (mmp1[1] + imp[1]) / 2]);
  }

  // set up cells
  for (let planeNum = 0; planeNum < 6; planeNum++) {
    for (let cellNum = 0; cellNum < 4; cellNum++) {
      let cellCorners = [];
      switch (cellNum) {
        case 0:
          cellCorners = [
            BO,
            innerMidPoints[nhi(planeNum - 1)],
            outerMidPoints[planeNum],
            innerMidPoints[planeNum],
          ];
          break;
        case 1:
          cellCorners = [
            innerMidPoints[nhi(planeNum - 1)],
            midHexPoints[nhi(planeNum - 1)],
            midmidPoints2[nhi(planeNum - 1)],
            outerMidPoints[planeNum],
          ];
          break;
        case 2:
          cellCorners = [
            innerMidPoints[planeNum],
            outerMidPoints[planeNum],
            midmidPoints1[planeNum],
            midHexPoints[planeNum],
          ];
          break;
        case 3:
          cellCorners = [
            outerMidPoints[planeNum],
            midmidPoints2[nhi(planeNum - 1)],
            hexCorners[planeNum],
            midmidPoints1[planeNum],
          ];
          break;
      }

      cellsMap[planeNum + "," + cellNum] = {
        selfID: [planeNum, cellNum],
        corners: cellCorners,
        center: [
          (cellCorners[0][0] +
            cellCorners[1][0] +
            cellCorners[2][0] +
            cellCorners[3][0]) /
            4,
          (cellCorners[0][1] +
            cellCorners[1][1] +
            cellCorners[2][1] +
            cellCorners[3][1]) /
            4,
        ],
        slices: [0, 0, 0, 0],
        rows: [],
      };
    }
  }
  cellKeys = Object.keys(cellsMap);

  // add .rows to all cells
  for (let planeNum = 0; planeNum < 6; planeNum++) {
    let rowA = [
      planeNum + ",1",
      planeNum + ",0",
      nhi(planeNum + 1) + ",0",
      nhi(planeNum + 1) + ",2",
    ];
    let rowB = [
      planeNum + ",3",
      planeNum + ",2",
      nhi(planeNum + 1) + ",1",
      nhi(planeNum + 1) + ",3",
    ];
    for (let i = 0; i < rowA.length; i++) {
      cellsMap[rowA[i]].rows.push(rowA);
      cellsMap[rowB[i]].rows.push(rowB);
    }
    allRows.push(rowA);
    allRows.push(rowB);
  }
}

function drawTitle() {
  noFill();
  stroke(255);
  strokeWeight(6);

  // I
  quad(372, 70, 348, 70, 228, 430, 252, 430);
  // H
  quad(324, 70, 300, 70, 240, 250, 264, 250);
  quad(264, 70, 240, 70, 180, 250, 204, 250);
  quad(
    // middle
    265.8,
    172,
    229.8,
    172,
    238.2,
    148,
    274.2,
    148
  );
  // S
  quad(216, 70, 132, 70, 123.6, 94, 207.6, 94);
  quad(156, 250, 72, 250, 79.8, 226, 163.8, 226);
  quad(181.8, 172, 97.8, 172, 106.2, 148, 190.2, 148);
  quad(181.8, 172, 163.8, 226, 139.8, 226, 157.8, 172);
  quad(123.6, 94, 106.2, 148, 130.2, 148, 147.6, 94);
  // F
  quad(336, 250, 360, 250, 300, 430, 276, 430);
  quad(360, 250, 420, 250, 412.2, 274, 352.2, 274);
  quad(334.2, 328, 386.4, 328, 378.6, 352, 326.4, 352);
  // T
  quad(444, 250, 528, 250, 520.2, 274, 436.2, 274);
  quad(490.2, 274, 466.2, 274, 414, 430, 438, 430);
}

let touchCountdown = 0;
let _mouseX, _mouseY;
function draw() {
  cursor(ARROW);
  _mouseX = floor(mouseX / scaleFactor);
  _mouseY = floor(mouseY / scaleFactor);
  touchCountdown--;
  if (scene === "PLAY") {
    playIntroProgress = min(1, playIntroProgress + 0.05);
    clear();
    // goal image
    image(goalImg, 90, 95, 180 * playIntroProgress, 180 * playIntroProgress);

    push();
    translate(0, 600 - 600 * playIntroProgress);

    // render cell slices
    noStroke();
    for (let i = 0; i < cellKeys.length; i++) {
      let c = cellsMap[cellKeys[i]];
      let cc = c.corners;

      for (let s = 0; s < c.slices.length; s++) {
        fill(COLORS.SLICES[c.slices[s]]);
        triangle(
          c.center[0],
          c.center[1],
          cc[s][0],
          cc[s][1],
          cc[nsi(s + 1)][0],
          cc[nsi(s + 1)][1]
        );
      }
    }

    // render cell outlines
    strokeWeight(OUTLINE_THICKNESS);
    stroke(COLORS.BG);
    noFill();
    for (let i = 0; i < cellKeys.length; i++) {
      let cc = cellsMap[cellKeys[i]].corners;
      quad(
        cc[0][0],
        cc[0][1],
        cc[1][0],
        cc[1][1],
        cc[2][0],
        cc[2][1],
        cc[3][0],
        cc[3][1]
      );
    }

    pop();

    // render shifting display
    if (shifting.display.row !== null) {
      let sp = shifting.display.slideProgress;
      let csList = getShiftedRow();

      // for each cell in row
      for (let i = 0; i < shifting.display.row.length; i++) {
        let c1 = cellsMap[shifting.display.row[i]];
        let c2 = cellsMap[shifting.display.row[nsi(i + 1)]];
        let cc1 = c1.corners;
        let cc2 = c2.corners;
        let slices = csList[i];
        // correct cc: put the last item to the top of list
        if (i === 1 || i === 2) {
          // correct cc2
          cc2 = [cc2[3], cc2[0], cc2[1], cc2[2]];
        }
        if (i === 2 || i === 3) {
          // correct cc1
          cc1 = [cc1[3], cc1[0], cc1[1], cc1[2]];
        }
        if (i === 2 || i === 3) {
          // correct slices
          slices = [slices[3], slices[0], slices[1], slices[2]];
        }

        // 2 points where a slice is cut
        let cc1Cuts = [
          [
            map(sp, 1, 0, cc1[0][0], cc1[3][0]),
            map(sp, 1, 0, cc1[0][1], cc1[3][1]),
          ],
          [
            map(sp, 0, 1, cc1[0][0], cc1[3][0]),
            map(sp, 0, 1, cc1[0][1], cc1[3][1]),
          ],
        ];
        let cc2Cuts = [
          [
            map(sp, 1, 0, cc2[1][0], cc2[2][0]),
            map(sp, 1, 0, cc2[1][1], cc2[2][1]),
          ],
          [
            map(sp, 0, 1, cc2[1][0], cc2[2][0]),
            map(sp, 0, 1, cc2[1][1], cc2[2][1]),
          ],
        ];

        // render slices (2 different rendering stages)
        noStroke();
        let movingCenter;
        if (sp < 0.5) {
          movingCenter = [
            map(
              sp + 0.5,
              0,
              1,
              (cc1[1][0] + cc1[2][0]) / 2,
              (cc1[0][0] + cc1[3][0]) / 2
            ),
            map(
              sp + 0.5,
              0,
              1,
              (cc1[1][1] + cc1[2][1]) / 2,
              (cc1[0][1] + cc1[3][1]) / 2
            ),
          ];

          // back triangle (index 1)
          fill(COLORS.SLICES[slices[1]]);
          triangle(
            map(sp, 1, 0, cc1[0][0], cc1[1][0]),
            map(sp, 1, 0, cc1[0][1], cc1[1][1]),
            map(sp, 0, 1, cc1[2][0], cc1[3][0]),
            map(sp, 0, 1, cc1[2][1], cc1[3][1]),
            movingCenter[0],
            movingCenter[1]
          );

          // side triangles (index 0)
          fill(COLORS.SLICES[slices[0]]);
          quad(
            cc1[0][0],
            cc1[0][1],
            map(sp, 1, 0, cc1[0][0], cc1[1][0]),
            map(sp, 1, 0, cc1[0][1], cc1[1][1]),
            movingCenter[0],
            movingCenter[1],
            cc1Cuts[1][0],
            cc1Cuts[1][1]
          );
          triangle(
            cc2[1][0],
            cc2[1][1],
            map(sp, 1, 0, cc2[0][0], cc2[1][0]),
            map(sp, 1, 0, cc2[0][1], cc2[1][1]),
            cc2Cuts[1][0],
            cc2Cuts[1][1]
          );

          // side triangles (index 2)
          fill(COLORS.SLICES[slices[2]]);
          quad(
            cc1[3][0],
            cc1[3][1],
            map(sp, 0, 1, cc1[2][0], cc1[3][0]),
            map(sp, 0, 1, cc1[2][1], cc1[3][1]),
            movingCenter[0],
            movingCenter[1],
            cc1Cuts[0][0],
            cc1Cuts[0][1]
          );
          triangle(
            cc2[2][0],
            cc2[2][1],
            map(sp, 0, 1, cc2[2][0], cc2[3][0]),
            map(sp, 0, 1, cc2[2][1], cc2[3][1]),
            cc2Cuts[0][0],
            cc2Cuts[0][1]
          );

          // front triangle (index 3)
          fill(COLORS.SLICES[slices[3]]);
          triangle(
            cc1Cuts[0][0],
            cc1Cuts[0][1],
            cc1Cuts[1][0],
            cc1Cuts[1][1],
            movingCenter[0],
            movingCenter[1]
          );
          quad(
            cc2Cuts[1][0],
            cc2Cuts[1][1],
            cc2Cuts[0][0],
            cc2Cuts[0][1],
            map(sp, 0, 1, cc2[2][0], cc2[3][0]),
            map(sp, 0, 1, cc2[2][1], cc2[3][1]),
            map(sp, 1, 0, cc2[0][0], cc2[1][0]),
            map(sp, 1, 0, cc2[0][1], cc2[1][1])
          );
        } else {
          movingCenter = [
            map(
              sp - 0.5,
              0,
              1,
              (cc2[1][0] + cc2[2][0]) / 2,
              (cc2[0][0] + cc2[3][0]) / 2
            ),
            map(
              sp - 0.5,
              0,
              1,
              (cc2[1][1] + cc2[2][1]) / 2,
              (cc2[0][1] + cc2[3][1]) / 2
            ),
          ];

          // front triangle (index 3)
          fill(COLORS.SLICES[slices[3]]);
          triangle(
            map(sp, 1, 0, cc2[0][0], cc2[1][0]),
            map(sp, 1, 0, cc2[0][1], cc2[1][1]),
            map(sp, 0, 1, cc2[2][0], cc2[3][0]),
            map(sp, 0, 1, cc2[2][1], cc2[3][1]),
            movingCenter[0],
            movingCenter[1]
          );

          // side triangles (index 0)
          fill(COLORS.SLICES[slices[0]]);
          quad(
            cc2[1][0],
            cc2[1][1],
            map(sp, 1, 0, cc2[0][0], cc2[1][0]),
            map(sp, 1, 0, cc2[0][1], cc2[1][1]),
            movingCenter[0],
            movingCenter[1],
            cc2Cuts[0][0],
            cc2Cuts[0][1]
          );
          triangle(
            cc1[0][0],
            cc1[0][1],
            map(sp, 1, 0, cc1[0][0], cc1[1][0]),
            map(sp, 1, 0, cc1[0][1], cc1[1][1]),
            cc1Cuts[0][0],
            cc1Cuts[0][1]
          );

          // side triangles (index 2)
          fill(COLORS.SLICES[slices[2]]);
          quad(
            cc2[2][0],
            cc2[2][1],
            map(sp, 0, 1, cc2[2][0], cc2[3][0]),
            map(sp, 0, 1, cc2[2][1], cc2[3][1]),
            movingCenter[0],
            movingCenter[1],
            cc2Cuts[1][0],
            cc2Cuts[1][1]
          );
          triangle(
            cc1[3][0],
            cc1[3][1],
            map(sp, 0, 1, cc1[2][0], cc1[3][0]),
            map(sp, 0, 1, cc1[2][1], cc1[3][1]),
            cc1Cuts[1][0],
            cc1Cuts[1][1]
          );

          // back triangle (index 1)
          fill(COLORS.SLICES[slices[1]]);
          triangle(
            cc2Cuts[0][0],
            cc2Cuts[0][1],
            cc2Cuts[1][0],
            cc2Cuts[1][1],
            movingCenter[0],
            movingCenter[1]
          );
          quad(
            cc1Cuts[0][0],
            cc1Cuts[0][1],
            cc1Cuts[1][0],
            cc1Cuts[1][1],
            map(sp, 0, 1, cc1[2][0], cc1[3][0]),
            map(sp, 0, 1, cc1[2][1], cc1[3][1]),
            map(sp, 1, 0, cc1[0][0], cc1[1][0]),
            map(sp, 1, 0, cc1[0][1], cc1[1][1])
          );
        }

        // render first outline
        strokeWeight(OUTLINE_THICKNESS);
        stroke(COLORS.BG);
        noFill();
        if (i === 3) {
          quad(
            map(sp, 0, 1, cc2[2][0], cc2[3][0]),
            map(sp, 0, 1, cc2[2][1], cc2[3][1]),
            map(sp, 1, 0, cc2[0][0], cc2[1][0]),
            map(sp, 1, 0, cc2[0][1], cc2[1][1]),
            cc2[1][0],
            cc2[1][1],
            cc2[2][0],
            cc2[2][1]
          );
          quad(
            map(sp, 0, 1, cc1[1][0], cc1[0][0]),
            map(sp, 0, 1, cc1[1][1], cc1[0][1]),
            map(sp, 1, 0, cc1[3][0], cc1[2][0]),
            map(sp, 1, 0, cc1[3][1], cc1[2][1]),
            cc1[3][0],
            cc1[3][1],
            cc1[0][0],
            cc1[0][1]
          );
        } else {
          beginShape();
          vertex(
            map(sp, 0, 1, cc2[2][0], cc2[3][0]),
            map(sp, 0, 1, cc2[2][1], cc2[3][1])
          );
          vertex(
            map(sp, 1, 0, cc2[0][0], cc2[1][0]),
            map(sp, 1, 0, cc2[0][1], cc2[1][1])
          );
          vertex(cc1[0][0], cc1[0][1]);
          vertex(
            map(sp, 0, 1, cc1[1][0], cc1[0][0]),
            map(sp, 0, 1, cc1[1][1], cc1[0][1])
          );
          vertex(
            map(sp, 1, 0, cc1[3][0], cc1[2][0]),
            map(sp, 1, 0, cc1[3][1], cc1[2][1])
          );
          vertex(cc1[3][0], cc1[3][1]);
          endShape(CLOSE);
        }
      }
    }

    // shifting update
    if (shifting.active) {
      let draggedCell = cellsMap[shifting.cellKey];
      let rows = draggedCell.rows;
      let distances = [[], []];
      const mx = _mouseX + offsetMouse[0];
      const my = _mouseY + offsetMouse[1];
      for (let i = 0; i < rows[0].length; i++) {
        let ckA = rows[0][i];
        let ckB = rows[1][i];
        distances[0].push(
          dist(mx, my, cellsMap[ckA].center[0], cellsMap[ckA].center[1])
        );
        distances[1].push(
          dist(mx, my, cellsMap[ckB].center[0], cellsMap[ckB].center[1])
        );
      }
      let targetSlider = { combinedDist: Infinity }; // {isRowA, indices, combinedDist}
      for (let i = 0; i < distances[0].length - 1; i++) {
        if (distances[0][i] + distances[0][i + 1] < targetSlider.combinedDist) {
          targetSlider = {
            rowIndex: 0,
            indices: [i, i + 1],
            combinedDist: distances[0][i] + distances[0][i + 1],
          };
        }
        if (distances[1][i] + distances[1][i + 1] < targetSlider.combinedDist) {
          targetSlider = {
            rowIndex: 1,
            indices: [i, i + 1],
            combinedDist: distances[1][i] + distances[1][i + 1],
          };
        }
      }

      let slideProgress = map(
        distances[targetSlider.rowIndex][targetSlider.indices[0]] -
          distances[targetSlider.rowIndex][targetSlider.indices[1]],
        -CELL_SCALE / 3,
        CELL_SCALE / 3,
        0,
        1
      );
      slideProgress = constrain(slideProgress, 0, 1);
      let row = rows[targetSlider.rowIndex];
      let step = targetSlider.indices[0] - row.indexOf(shifting.cellKey);

      // update shifting display
      // wrong row?
      if (shifting.display.row !== row) {
        // at origin? switch row, else backtrack to origin
        if (shifting.display.step === 0) {
          // still need to decrease sp?
          if (shifting.display.slideProgress > 0) {
            shifting.display.slideProgress = max(
              0,
              shifting.display.slideProgress - SLIDE_SPEED
            );
          }
          // at exact origin? switch row
          else if (shifting.display.slideProgress === 0) {
            shifting.display.row = row; // switch row
            shifting.display.slideProgress = 0;
          }
        } else {
          // is ahead of origin? sp--, else sp++
          if (shifting.display.step > 0) {
            shifting.display.slideProgress -= SLIDE_SPEED;
            if (shifting.display.slideProgress <= 0) {
              shifting.display.slideProgress = 1;
              shifting.display.step--;
            }
          } else {
            // opposite of above
            shifting.display.slideProgress += SLIDE_SPEED;
            if (shifting.display.slideProgress >= 1) {
              shifting.display.slideProgress = 0;
              shifting.display.step++;
            }
          }
        }
      }
      // correct row, catch up
      else {
        // at target step? match target sp
        if (shifting.display.step === step) {
          if (shifting.display.slideProgress < slideProgress) {
            shifting.display.slideProgress = min(
              slideProgress,
              shifting.display.slideProgress + SLIDE_SPEED
            );
          } else {
            shifting.display.slideProgress = max(
              slideProgress,
              shifting.display.slideProgress - SLIDE_SPEED
            );
          }
        } else {
          // is ahead of target? sp--, else sp++
          if (shifting.display.step > step) {
            shifting.display.slideProgress -= SLIDE_SPEED;
            if (shifting.display.slideProgress <= 0) {
              shifting.display.slideProgress = 1;
              shifting.display.step--;
            }
          } else {
            shifting.display.slideProgress += SLIDE_SPEED;
            if (shifting.display.slideProgress >= 1) {
              shifting.display.slideProgress = 0;
              shifting.display.step++;
            }
          }
        }
      }
    }
    // shifting.active is false
    else if (shifting.display.row !== null) {
      // sp goes towards 1 or 0
      if (shifting.display.slideProgress > 0.5) {
        shifting.display.slideProgress += SLIDE_SPEED;
        if (shifting.display.slideProgress >= 1) {
          shifting.display.step++;
          shifting.display.slideProgress = 0;
        }
      } else {
        shifting.display.slideProgress -= SLIDE_SPEED;
        if (shifting.display.slideProgress <= 0) {
          shifting.display.slideProgress = 0;
        }
      }

      // when done: apply shift & set display row to null
      if (shifting.display.slideProgress === 0) {
        let csList = getShiftedRow();
        for (let i = 0; i < csList.length; i++) {
          cellsMap[shifting.display.row[i]].slices = csList[i];
        }
        shifting.display.row = null;
        if (!gameEnded && checkWin()) {
          triggerWin();
        }
      }
    }

    exitBtn.render();

    // timer
    if (!gameEnded) {
      timeElapsed = Date.now() - startTime;
    }
    textSize(36);
    let minute = floor(timeElapsed / 60000);
    let sec = floor((timeElapsed % 60000) / 1000) + "";
    if (sec.length === 1) {
      sec = "0" + sec;
    }
    fill(COLORS.LIGHT);
    text(`${minute}:${sec}`, 535, 50);
    // flash new best text
    if (isNewBest) {
      textSize(24);
      fill(255, 255, 0, 125 + cos(frameCount * 6) * 125);
      text("NEW BEST!", 535, 80);
    }

    // win animation
    if (gameEnded) {
      stroke(COLORS.BG);
      strokeWeight(10);
      fill(COLORS.LIGHT);
      textSize(60);
      const defaultY = BO[1] - 100;
      for (let i = 0; i < WIN_TEXT.length; i++) {
        let n = WIN_TEXT[i];
        const f = easeOutBounce(constrain(n.progress, 0, 1));
        let yValue = defaultY + 100 * f;

        if (f > 0) {
          text(n.char, BO[0] + (i - 4) * 40, yValue);
        }

        n.progress += 0.015;
      }
    }
  }

  // TITLE SCENE
  else if (scene === "TITLE") {
    clear();
    drawTitle();
    titleButton.render();
  }

  // MENU SCENE
  else if (scene === "MENU") {
    clear();

    // render lv buttons
    for (let i = 0; i < levelButtons.length; i++) {
      levelButtons[i].btn.render();
    }

    // page buttons
    menuLeftBtn.render();
    menuRightBtn.render();
    fill(COLORS.LIGHT);
    noStroke();
    textSize(32);
    text(menuPageIndex + 1 + "/" + ceil(LEVELS.length / 4), 300, 550);
  }

  // transition squares
  g = min(1, g + 0.012);
  for (let i = transitionSquares.length - 1; i >= 0; i--) {
    let ts = transitionSquares[i];
    if (ts.pos[1] > 720) {
      // despawn
      transitionSquares.splice(i, 1);
    }
    ts.r[0] += ts.r[1] * g;
    ts.pos[0] += ts.vel[0] * g;
    ts.pos[1] += ts.vel[1] * g;
    ts.vel[1] += 0.9; // GRAVITY
    push();
    translate(ts.pos[0], ts.pos[1]);
    rotate(ts.r[0]);
    image(ts.img, 0, 0, 150, 150);
    pop();
  }
}
let g = 0;
let offsetMouse = [0, 0];

function touchStarted() {
  if (touchCountdown > 0) {
    return;
  } else {
    touchCountdown = 5;
  }

  if (scene === "PLAY") {
    if (gameEnded) return; // already won

    // start shifting
    if (!shifting.active && shifting.display.row === null) {
      // assign again to fix mobile
      _mouseX = floor(mouseX / scaleFactor);
      _mouseY = floor(mouseY / scaleFactor);
      // find clicked cell
      for (let i = 0; i < cellKeys.length; i++) {
        if (mouseOnCell(cellsMap[cellKeys[i]].corners)) {
          shifting.cellKey = cellKeys[i];
          shifting.active = true;
          shifting.display.row = cellsMap[cellKeys[i]].rows[0];
          shifting.display.slideProgress = 0;
          shifting.display.step = 0;
          offsetMouse = [
            cellsMap[cellKeys[i]].center[0] - _mouseX,
            cellsMap[cellKeys[i]].center[1] - _mouseY,
          ];
          return;
        }
      }
    }
  }
}
function touchEnded() {
  if (scene === "TITLE") {
    if (titleButton.isHovered) titleButton.clicked();
    return;
  }
  if (scene === "MENU") {
    if (menuLeftBtn.isHovered) menuLeftBtn.clicked();
    else if (menuRightBtn.isHovered) menuRightBtn.clicked();

    for (let i = 0; i < levelButtons.length; i++) {
      const btn = levelButtons[i].btn;
      if (btn.isHovered) return btn.clicked();
    }

    return;
  }

  if (scene === "PLAY") {
    // stop shifting
    if (shifting.active) {
      shifting.active = false;
    }
    // exit button
    if (exitBtn.isHovered) {
      exitBtn.clicked();
      return;
    }
  }
}

let titleButton = new BTN(
  300,
  520,
  150,
  50,
  function () {
    noStroke();
    fill(COLORS.LIGHT);
    textSize(28);
    text("Play", this.x, this.y);
  },
  function () {
    scene = "MENU";
    refreshMenu(0);
    setupTransition();
  }
);

function mouseOnCell(corners) {
  let p1 = corners[0],
    p2 = corners[1],
    p3 = corners[2],
    p4 = corners[3];
  return (
    pointInTriangle([_mouseX, _mouseY], p1, p2, p3) ||
    pointInTriangle([_mouseX, _mouseY], p1, p3, p4)
  );
}
function sign(p1, p2, p3) {
  return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
}
function pointInTriangle(pt, v1, v2, v3) {
  let d1 = sign(pt, v1, v2);
  let d2 = sign(pt, v2, v3);
  let d3 = sign(pt, v3, v1);
  let has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  let has_pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(has_neg && has_pos);
}

function _(n) {
  return map(n, 0, 100, 0, width);
}
// nhi: normalize hex index (keep index within 0 to 5)
function nhi(n) {
  while (n < 0) {
    n += 6;
  }
  while (n > 5) {
    n -= 6;
  }
  return n;
}
// nhi: normalize square index (keep index within 0 to 3)
function nsi(n) {
  while (n < 0) {
    n += 4;
  }
  while (n > 3) {
    n -= 4;
  }
  return n;
}
function randomInt(start, end) {
  return Math.floor(Math.random() * end + start);
}
function getRandomItem(arr) {
  return arr[randomInt(0, arr.length)];
}

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
