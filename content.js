// Redirect /shorts/VIDEO_ID to the normal /watch?v=VIDEO_ID player.
function redirectShorts() {
  const match = location.pathname.match(/^\/shorts\/([\w-]+)/);
  if (match) {
    location.replace(`/watch?v=${match[1]}`);
  }
}

redirectShorts();

// YouTube is a single-page app, so also check on in-app navigation.
document.addEventListener("yt-navigate-start", redirectShorts);
document.addEventListener("yt-navigate-finish", redirectShorts);
