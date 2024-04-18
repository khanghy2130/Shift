const CELL_SCALE = 45;
const OUTLINE_THICKNESS = 0.7;
const BO = [348, 300]; // BOARD OFFSET
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

let levelsSolved = []; // bool[]
for (let i = 0; i < LEVELS.length; i++) {
  levelsSolved.push(false);
}

let goalImg;
let checkmarkSize = 0;
let transitionSquares = []; // {pos, vel, r, img}
let isAtTitle = true;
let titleImg;

let level = 0;
let goalImage = null;

let cellsMap = {}; // key: planeNum + "," + cellNum
let cellKeys = [];
let allRows = [];

var startTime = 0;
var timeElapsed = 0;
var gameEnded = false;

let shifting = {
  active: false,
  cellKey: null,
  display: {
    slideProgress: 0,
    step: 0,
    row: null,
  },
};

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

function loadLevel() {
  setupTransition();
  startTime = Date.now();
  timeElapsed = 0;
  gameEnded = false;

  // set slices data to all cells
  for (let i = 0; i < cellKeys.length; i++) {
    cellsMap[cellKeys[i]].slices = LEVELS[level][i].slice(0);
  }

  // get goal image
  background(COLORS.BG);
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
  goalImg = get(
    BO[0] - CELL_SCALE,
    BO[1] - CELL_SCALE,
    CELL_SCALE * 2,
    CELL_SCALE * 2
  );

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
  checkmarkSize = 0;
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
  transitionSquares = []; // reset
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      transitionSquares.push({
        img: get(x * 150, y * 150, 150, 150),
        pos: [x * 150 + 60, y * 150 + 60],
        vel: [random(-6, 6), random(-24, 0)],
        r: [0, random(-5, 5)],
      });
    }
  }
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  strokeJoin(ROUND);

  COLORS.BG = color(30);
  COLORS.LIGHT = color(220);
  COLORS.SLICES = [
    color(115, 170, 255), // blue
    color(115, 255, 75), // green
    color(245, 205, 85), // light orange
    color(245, 95, 135), // bright pink
    color(18, 227, 223), // teal
    color(210, 100, 255), // purple
  ];

  makeTitle();

  // set up points
  let boardCenter = [BO[0], BO[1]];
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
    innerMidPoints.push([
      (midPoint[0] + boardCenter[0]) / 2,
      (midPoint[1] + boardCenter[1]) / 2,
    ]);
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
            boardCenter,
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

function makeTitle() {
  background(COLORS.BG);
  noFill();
  stroke(COLORS.LIGHT);
  strokeWeight(6);

  // I
  quad(_(62), _(20), _(58), _(20), _(38), _(80), _(42), _(80));
  // H
  quad(_(54), _(20), _(50), _(20), _(40), _(50), _(44), _(50));
  quad(_(44), _(20), _(40), _(20), _(30), _(50), _(34), _(50));
  quad(
    // middle
    _(44.3),
    _(37),
    _(38.3),
    _(37),
    _(39.7),
    _(33),
    _(45.7),
    _(33)
  );
  // S
  quad(_(36), _(20), _(22), _(20), _(20.6), _(24), _(34.6), _(24));
  quad(_(26), _(50), _(12), _(50), _(13.3), _(46), _(27.3), _(46));
  quad(_(30.3), _(37), _(16.3), _(37), _(17.7), _(33), _(31.7), _(33));
  quad(_(30.3), _(37), _(27.3), _(46), _(23.3), _(46), _(26.3), _(37));
  quad(_(20.6), _(24), _(17.7), _(33), _(21.7), _(33), _(24.6), _(24));
  // F
  quad(_(56), _(50), _(60), _(50), _(50), _(80), _(46), _(80));
  quad(_(60), _(50), _(70), _(50), _(68.7), _(54), _(58.7), _(54));
  quad(_(55.7), _(63), _(64.4), _(63), _(63.1), _(67), _(54.4), _(67));
  // T
  quad(_(74), _(50), _(88), _(50), _(86.7), _(54), _(72.7), _(54));
  quad(_(81.7), _(54), _(77.7), _(54), _(69), _(80), _(73), _(80));

  titleImg = get();
  background(COLORS.BG);
}

let touchCountdown = 0;
function draw() {
  touchCountdown--;
  if (isAtTitle) {
    image(titleImg, 300, 300, 600);
    fill(255);
    textSize(24);
    noStroke();
    text("Click to continue", 300, 570);
    return;
  }

  background(COLORS.BG);
  // goal image
  image(goalImg, 84, 90, 156, 156);

  // checkmark  /////// will be removed
  if (levelsSolved[level]) {
    if (checkmarkSize < 48) {
      checkmarkSize += (48 - checkmarkSize) * 0.05 + 0.02;
    }
    noStroke();
    fill(COLORS.LIGHT);
    ellipse(_(32), _(8), checkmarkSize, checkmarkSize);
    stroke(COLORS.BG);
    strokeWeight(_(1.2));
    line(_(30.3), _(8), _(31.5), _(10));
    line(_(33.5), _(6), _(31.5), _(10));
  }

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
  strokeWeight(_(OUTLINE_THICKNESS));
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
      strokeWeight(_(OUTLINE_THICKNESS));
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
    const mx = mouseX + offsetMouse[0];
    const my = mouseY + offsetMouse[1];
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
      -CELL_SCALE * 2,
      CELL_SCALE * 2,
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
      if (checkWin()) {
        levelsSolved[level] = true;
        gameEnded = true;
      }
    }
  }

  // timer
  if (!gameEnded) {
    timeElapsed = Date.now() - startTime;
  }
  textSize(_(6));
  var minute = floor(timeElapsed / 60000);
  var sec = floor((timeElapsed % 60000) / 1000) + "";
  if (sec.length === 1) {
    sec = "0" + sec;
  }
  fill(250);
  text("".concat(minute, ":").concat(sec), _(90), _(10));

  // change level buttons
  strokeWeight(_(1.2));
  if (level > 0) {
    noStroke();
    fill(COLORS.LIGHT);
    rect(_(10), _(90), _(10), _(10), _(2));
    stroke(COLORS.BG);
    line(_(12), _(88), _(8), _(90));
    line(_(12), _(92), _(8), _(90));
  }

  if (level < LEVELS.length - 1) {
    noStroke();
    fill(COLORS.LIGHT);
    rect(_(22), _(90), _(10), _(10), _(2));
    stroke(COLORS.BG);
    line(_(20), _(88), _(24), _(90));
    line(_(20), _(92), _(24), _(90));
  }

  // level dots
  for (let i = 0; i < ceil(LEVELS.length / 2); i++) {
    fill(levelsSolved[i * 2] ? COLORS.SLICES[1] : COLORS.LIGHT);
    if (level === i * 2) {
      fill(COLORS.SLICES[2]);
    }
    circle(_(5), _(35 + i * 4), _(3.5));
    if (i * 2 + 1 >= LEVELS.length) {
      break;
    }
    fill(levelsSolved[i * 2 + 1] ? COLORS.SLICES[1] : COLORS.LIGHT);
    if (level === i * 2 + 1) {
      fill(COLORS.SLICES[2]);
    }
    circle(_(10), _(35 + i * 4), _(3.5));
  }

  // transition squares
  for (let i = transitionSquares.length - 1; i >= 0; i--) {
    let ts = transitionSquares[i];
    if (ts.pos[1] > _(120)) {
      // despawn
      transitionSquares.splice(i, 1);
    }
    ts.r[0] += ts.r[1];
    ts.pos[0] += ts.vel[0];
    ts.pos[1] += ts.vel[1];
    ts.vel[1] += 0.9; // GRAVITY
    push();
    translate(ts.pos[0], ts.pos[1]);
    rotate(ts.r[0]);
    image(ts.img, 0, 0, _(20));
    pop();
  }
}

let offsetMouse = [0, 0];

function touchStarted() {
  if (touchCountdown > 0) {
    return;
  } else {
    touchCountdown = 5;
  }

  if (isAtTitle) {
    isAtTitle = false;
    loadLevel();
    return;
  }

  // start shifting
  if (!shifting.active && shifting.display.row === null) {
    // find clicked cell
    for (let i = 0; i < cellKeys.length; i++) {
      if (mouseOnCell(cellsMap[cellKeys[i]].corners)) {
        shifting.cellKey = cellKeys[i];
        shifting.active = true;
        shifting.display.row = cellsMap[cellKeys[i]].rows[0];
        shifting.display.slideProgress = 0;
        shifting.display.step = 0;
        offsetMouse = [
          cellsMap[cellKeys[i]].center[0] - mouseX,
          cellsMap[cellKeys[i]].center[1] - mouseY,
        ];
        return;
      }
    }
  }

  // button clicked
  if (mouseY > _(90 - 5) && mouseY < _(90 + 5)) {
    if (mouseX > _(10 - 5) && mouseX < _(10 + 5)) {
      if (level > 0) {
        level--;
        loadLevel();
      }
    } else if (mouseX > _(22 - 5) && mouseX < _(22 + 5)) {
      if (level < LEVELS.length - 1) {
        level++;
        loadLevel();
      }
    }
  }
}
function touchEnded() {
  // stop shifting
  if (shifting.active) {
    shifting.active = false;
  }
}

function mouseOnCell(corners) {
  var p1 = corners[0],
    p2 = corners[1],
    p3 = corners[2],
    p4 = corners[3];
  return (
    pointInTriangle([mouseX, mouseY], p1, p2, p3) ||
    pointInTriangle([mouseX, mouseY], p1, p3, p4)
  );
}
function sign(p1, p2, p3) {
  return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
}
function pointInTriangle(pt, v1, v2, v3) {
  var d1 = sign(pt, v1, v2);
  var d2 = sign(pt, v2, v3);
  var d3 = sign(pt, v3, v1);
  var has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  var has_pos = d1 > 0 || d2 > 0 || d3 > 0;
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
