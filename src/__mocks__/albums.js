import request from './request';

export async function getAlbumTitle(albumID) {
  return request('/albums/' + albumID).then(album => album.title);
}