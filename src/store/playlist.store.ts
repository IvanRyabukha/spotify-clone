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

  addPlayList(playListName: string, trackName: string) {
    const playlist = this.playLists.find(p => p.name === playListName);

    if (!playlist || playlist.tracks.includes(trackName)) {
      return;
    }

    playlist.tracks.push(trackName);
    this.saveToLocalStorage();
  }

  removeFromPlaylist(playListName: string, trackName: string) {
    const playlist = this.playLists.find(p => p.name === playListName);
    if (!playlist) {
      return;
    }

    playlist.tracks = playlist.tracks.filter(name => name !== trackName);

    this.saveToLocalStorage();
  }
}

export const playListStore = new PlayListStore();