import { makeAutoObservable } from "mobx";

class PlayListStore {
  playLists: { name: string; tracks: string[] }[] = JSON.parse(localStorage.getItem('playlists') || '[]');

  constructor() {
    makeAutoObservable(this);
  }

  private saveToLocalStorage() {
    localStorage.setItem('playlists', JSON.stringify(this.playLists));
  }

  createPlayList(name: string) {
    if (this.playLists.find(playlist => playlist.name === name)) {
      return;
    }

    this.playLists.push({ name, tracks: []});
    this.saveToLocalStorage();
  }

  toggleTrackInPlaylist(playListName: string, trackName: string) {
    const playlist = this.playLists.find(p => p.name === playListName);
    if (!playlist) return;

    if (playlist.tracks.includes(trackName)) {
      playlist.tracks = playlist.tracks.filter(name => name !== trackName);
    } else {
      playlist.tracks.push(trackName);
    }

    this.saveToLocalStorage();
  }

  isTrackInPlaylist(playListName: string, trackName: string) {
    const playlist = this.playLists.find(p => p.name === playListName);
    if (!playlist) {
      return;
    }

    return playlist.tracks.includes(trackName);
  }
}

export const playListStore = new PlayListStore();