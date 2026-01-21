/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const myPlaylist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
  // changeName: function () {}, // старий варіант запису методу обʼєта
  changeName(newName) {
    // this
    // newName = "Workout playlist"
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return this.tracks.length;
  },

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
  },
};

const mySecondPlaylist = {
  name: "Relax playlist music",
  rating: 4,
  tracks: ["track-111", "track-222", "track-333"],
};

function changeName(newPlaylistName) {
  // this = undefined
  // arguments
  // newPlaylistName = undefined

  this.name = newPlaylistName;

  // return undefined
}

function addTrack(trackName) {
  this.tracks.push(trackName);
}

// changeName("Some playlist");

// console.log(playlist.getTrackCount());

// myPlaylist.changeName("Workout playlist");
// console.log(myPlaylist);

// mySecondPlaylist.updateName = changeName;
// console.log("🚀 ~ mySecondPlaylist:", mySecondPlaylist);

// mySecondPlaylist.updateName("New Year music 2026");

// mySecondPlaylist.addTrack = addTrack;
// console.log("🚀 ~ mySecondPlaylist:", mySecondPlaylist);
// mySecondPlaylist.addTrack("Thunder");

// myPlaylist.addTrack = addTrack;
// myPlaylist.addTrack("Зірочка палай");
// console.log("🚀 ~ myPlaylist:", myPlaylist);

myPlaylist.addTrack("new track 1");
// console.log(myPlaylist.getTrackCount());

myPlaylist.addTrack("new track 2");
// console.log(myPlaylist.getTrackCount());

myPlaylist.updateRating(4);
// console.log(myPlaylist);
