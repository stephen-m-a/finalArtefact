// Nav bar toggle
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Sign out a user
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }