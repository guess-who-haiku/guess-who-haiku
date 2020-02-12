export const compareHaikuDateCreated = (haikuA, haikuB) => {
  const dateA = new Date(haikuA.dateCreated);
  const dateB = new Date(haikuB.dateCreated);
  return dateA > dateB ? -1 : 1;
}

export const compareShareTimeCompleted = (shareA, shareB) => {
  const dateA = new Date(shareA.completeTimestamp);
  const dateB = new Date(shareB.completeTimestamp);
  return dateA > dateB ? 1 : -1;
}