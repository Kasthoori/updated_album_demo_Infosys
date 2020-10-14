const albums = {

    4: {title: 'Album One'},
    5: {tilte: 'Album Two'},
  };
  
  export default function request(url) {
    return new Promise((resolve, reject) => {
      const albumID = parseInt(url.substr('/albums/'.length), 10);
      process.nextTick(() =>
        albums[albumID]
          ? resolve(albums[albumID])
          : reject({
              error: 'User with ' + albumID + ' not found.',
            }),
      );
    });
  }