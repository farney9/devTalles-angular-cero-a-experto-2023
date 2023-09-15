export interface AudioPlayer {
  audioVolume: number,
  songDuration: number,
  song: string,
  details: Details,
}

export interface Details {
  author: string,
  year:number
}

const AudioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

const {song:newSong, songDuration: duration, details} = AudioPlayer;
const {author} = details

/* console.log('Song:', newSong);
console.log('Duration:', duration);
console.log('Author:', author); */


/* Desestructuración de arreglos */

/* const dragonBallZList: string[] = ['Goku', 'Vegueta', 'Trunks'];
const trunks = dragonBallZList[3] || 'Personaje no encontrado';
 */
/* Desestructuramos el arrreglo antehrior */
const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegueta'];

console.error('Personaje 3:', trunks);


export{}