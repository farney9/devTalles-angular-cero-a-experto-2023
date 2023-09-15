const  skills: string[] = ['Bash', 'counter', 'Healing']

interface Character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}


const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter']
}

strider.homeTown = 'Rivendell';

console.log(strider);


export{}