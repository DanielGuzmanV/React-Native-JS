import { gamesMock } from "./mockGames";


export async function getLatestGames() {

  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(gamesMock.map( ({review, ...game}) => game));
    }, 500);
  });

}

export async function getGameDetails(slug) {

  return new Promise( (resolve, reject) => {
    const game = gamesMock.find((games) => games.slug === slug);
    if(game) {
      resolve(game);
    } else {
      reject(new Error('Juego no encontrado.'))
    }
  })

}












