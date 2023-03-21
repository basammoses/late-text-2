function matchUsers(users, interests) {
  // Create an empty object to store matched users
  let matches = {};
  
  // Loop through each user
  users.forEach(user => {
    // Initialize the user's score to 0
    let score = 0;
    
    // Loop through each interest
    interests.forEach(interest => {
      // If the user has the same interest, increase their score by 1
      if (user.interests.includes(interest)) {
        score += 1;
      }
    });
    
    // If the user has a score greater than 0, add them to the matches object
    if (score > 0) {
      matches[user.name] = score;
    }
  });
  
  // Sort the matches object by score (descending) and return it
  return Object.entries(matches).sort((a, b) => b[1] - a[1]);
}



