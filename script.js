function playSong(src, title, cover) {
  const player = document.getElementById('audio-player');
  const songTitle = document.getElementById('song-title');
  const songCover = document.getElementById('cover');

  player.src = src;
  songTitle.textContent = title;
  songCover.src = cover;
  player.play();
}
