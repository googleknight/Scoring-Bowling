const maxFrameScore = 10;
const lastframe = 10;


// Checks if the two throws are spare
function isSpare(firstthrow, secondthrow) {
  return firstthrow + secondthrow === maxFrameScore;
}
// Checks if that throw is strike
function isStrike(thro) {
  return thro === maxFrameScore;
}
// Calculates single frame score
function calculateFramesScore(throws, currentScore, currentIndex) {
  let totalscore = currentScore;
  let index = currentIndex;
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
  return { totalscore, index };
}
// Calculates last frame score
function calculateLastFrameScore(throws, currentScore, currentIndex) {
  let totalscore = currentScore;
  let index = currentIndex;
  if (isStrike(throws[index]) || isSpare(throws[index], throws[index + 1])) {
    totalscore += throws[index] + throws[index + 1] + throws[index + 2];
    index += 3;
  } else {
    totalscore += throws[index] + throws[index + 1];
    index += 2;
  }

  return { totalscore, index };
}
// Calculates total score
function score(throws) {
  let frameno = 1;
  let totalscore = 0;
  for (let index = 0; index < throws.length;) { // Iterating over all throws
    if (frameno < lastframe) { // calculating for all the frames except last one
      ({ totalscore, index } = calculateFramesScore(throws, totalscore, index));
    } else { // Calculating for last frame
      ({ totalscore, index } = calculateLastFrameScore(throws, totalscore, index));
    }
    frameno += 1;
  }
  console.log(frameno);
  if (frameno === lastframe + 1) {
    return totalscore;
  }
  console.log('Invalid Inputs');
  return null;
}

module.exports.score = score;
