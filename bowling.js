const maxFrameScore = 10;
const lastframe = 10;

// Verify beginning and end
function verifyBothEnds(allThrows) {
  const cond1 = allThrows[0] < maxFrameScore && allThrows[0] + allThrows[1] > maxFrameScore;
  const cond2 = allThrows[allThrows.length - 3] === maxFrameScore &&
  allThrows[allThrows.length - 2] < maxFrameScore &&
  allThrows[allThrows.length - 2] + allThrows[allThrows.length - 1] > maxFrameScore;
  if (!cond1 && !cond2) { return true; }
  return false;
}
// Verify frame
function verifyFrame(firstThrow, secondThrow) {
  if (firstThrow >= 0 && secondThrow >= 0 && firstThrow + secondThrow <= maxFrameScore) {
    return true;
  }
  return false;
}
// Checks if the two throws are spare
function isSpare(firstThrow, secondThrow) {
  return firstThrow + secondThrow === maxFrameScore;
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
  } else if (verifyFrame(throws[index], throws[index + 1])) { // verifying frame
    if (isSpare(throws[index], throws[index + 1])) {
      totalscore += maxFrameScore + throws[index + 2];
      index += 2;
    } else {
      totalscore += throws[index] + throws[index + 1];
      index += 2;
    }
  } else return null; // for invalid frame returning null;
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
  if (!verifyBothEnds(throws)) {
    console.log('Invalid Input');
    return null;
  }
  let frameno = 1;
  let totalscore = 0;
  for (let index = 0; index < throws.length;) { // Iterating over all throws
    if (frameno < lastframe) {
      // calculating for all the frames except last one
      const resultObject = calculateFramesScore(throws, totalscore, index);
      if (resultObject === null) { break; }
      ({ totalscore, index } = resultObject);
    } else { // Calculating for last frame
      ({ totalscore, index } = calculateLastFrameScore(throws, totalscore, index));
    }
    frameno += 1;
  }
  if (frameno === lastframe + 1) {
    return totalscore;
  }
  console.log('Invalid Inputs');
  return null;
}

module.exports.score = score;
