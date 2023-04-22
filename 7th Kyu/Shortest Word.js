// Shortest Word



function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// FUNDAMENTALS
// Suggest kata description edits