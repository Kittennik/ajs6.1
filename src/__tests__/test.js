import Character from '../js/app';

test('Успешно', () => {
  const recieved = new Character('Kate', 'Magician');
  const expected = {
    name: 'Kate',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(recieved).toEqual(expected);
});

test('Ошибка в имени', () => {
  const recieved = () => new Character(666, 'Magician');
  expect(recieved).toThrowError('Имя должно быть задано строкой от 2 до 10 символов');
});

test('Короткое имя', () => {
  const recieved = () => new Character('K', 'Magician');
  expect(recieved).toThrowError('Имя должно быть задано строкой от 2 до 10 символов');
});

test('Длинное имя', () => {
  const recieved = () => new Character('Vanessa von Layott', 'Magician');
  expect(recieved).toThrowError('Имя должно быть задано строкой от 2 до 10 символов');
});

test('Неверный тип персонажа', () => {
  const recieved = () => new Character('Kate', 'Mag');
  expect(recieved).toThrowError('Ошибка при выборе типа персонажа');
});
