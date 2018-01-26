const maxFrameScore = 10;
const lastframe = 10;

function isSpare(firstthrow, secondthrow) {
  return firstthrow + secondthrow === maxFrameScore;
}

function isStrike(thro) {
  return thro === maxFrameScore;
}

function score(throws) {
  let frameno = 1;
  let totalscore = 0;
  for (let index = 0; index < throws.length;) {
    if (frameno !== lastframe) {
      if (isStrike(throws[index])) {
        totalscore += maxFrameScore + throws[index + 1] + throws[index + 2];
        index += 1;
      } else if (throws[index] < maxFrameScore) {
        if (isSpare(throws[index], throws[index + 1])) {
          totalscore += maxFrameScore + throws[index + 2];
          index += 2;
        } else {
          totalscore += throws[index] + throws[index + 1];
          index += 2;
        }
      }
    } else {
      if (isStrike(throws[index]) || isSpare(throws[index], throws[index + 1])) {
        totalscore += throws[index] + throws[index + 1] + throws[index + 2];
      } else {
        totalscore += throws[index] + throws[index + 1];
      }
      index = throws.length;
    }
    frameno += 1;
  }
  return totalscore;
}

module.exports.score = score;

