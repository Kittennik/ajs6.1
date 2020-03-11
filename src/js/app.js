export default function Character(name, type) {
  const types = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Daemon: { attack: 25, defence: 25 },
    Undead: { attack: 40, defence: 10 },
    Zombie: { attack: 10, defence: 40 },
  };

  if (!(type in types)) {
    throw new Error('Ошибка при выборе типа персонажа');
  }
  if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
    throw new Error('Имя должно быть задано строкой от 2 до 10 символов');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = types[type].attack;
  this.defence = types[type].defence;
}
