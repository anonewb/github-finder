// register github oauth to get unique key-google it 

// Init Github
const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search user event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
    // console.log(userText);
    github.getUser(userText) //getUser() returns a promise as 'async' is used
      .then(data => {
        // console.log(data);
        if (data.profile.message === 'Not Found') {
          // Show alert
        } else {
          // Show profile
        }
      });
  } else {
    // Clear the profile
  }
});