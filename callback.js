const userLeft = false;
const userOnAnotherSite = false;

function stillWatchingCallback(callback, errorcallback) {
  if (userLeft) {
    errorcallback({
      name: 'User left',
      message: ':<'
    })
  }

  else if(userOnAnotherSite) {
    errorcallback({
      name: 'User on another site',
      message: 'Want to continue watching?'
    })
  }

  else {
    console.log("User still watching")
  }
}

stillWatchingCallback((message) => {
  console.log('Success ' + message )
}, (error) => {
  console.log(error.name + ' ' + error.message)
})