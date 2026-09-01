const friends = require("../models/friends");

// gets all friends
const getFriends = (req, res) => {
  res.json(friends);
};

// gets friends matching the gender and/or starting letter
const filterFriends = (req, res) => {
  console.log(req.query);

  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toLowerCase().startsWith(filterLetter.toLowerCase())
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the filters match
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res.status(404).json({
      error: "No friends matching the supplied filters",
    });
  }
};

// gets information about this request from the headers
const getInfo = (req, res) => {
  console.log(req.headers);

  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers["accept"],
  });
};

// gets the friend matching the specific ID
const getFriendById = (req, res) => {
  console.log(req.params);

  let friendId = req.params.id;

  let matchingFriend = friends.find((friend) => friend.id == friendId);

  if (matchingFriend) {
    res.status(200).json(matchingFriend);
  } else {
    res.status(404).json({
      error: "Friend with ID " + friendId + " not found",
    });
  }
};

// adds a new friend
const addFriend = (req, res) => {
  let newFriend = req.body;

  console.log(newFriend);

  if (!newFriend.name || !newFriend.gender) {
    res.status(500).json({
      error: "Friend object must contain a name and gender",
    });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);

  res.status(200).json(newFriend);
};

// updates an existing friend
const updateFriend = (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  let friendIndex = friends.findIndex((friend) => friend.id == friendId);

  if (friendIndex === -1) {
    res.status(404).json({
      error: "Friend with ID " + friendId + " not found",
    });
    return;
  }

  if (!updatedFriend.name || !updatedFriend.gender) {
    res.status(500).json({
      error: "Friend object must contain a name and gender",
    });
    return;
  }

  updatedFriend.id = parseInt(friendId);
  friends[friendIndex] = updatedFriend;

  res.status(200).json(updatedFriend);
};

module.exports = {
  getFriends,
  filterFriends,
  getInfo,
  getFriendById,
  addFriend,
  updateFriend,
};
