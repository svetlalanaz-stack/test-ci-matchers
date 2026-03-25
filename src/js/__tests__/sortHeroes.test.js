import sortHeroes from "../sortHeroes";

describe("Функция сортировки героев по здоровью", () => {
  test("сортировать героев по убыванию здоровья", () => {
    const input = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ];
    
    const expected = [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ];
    
    const result = sortHeroes(input);
    
    // Используем toEqual для сравнения содержимого объектов
    expect(result).toEqual(expected);
  });
  
  test("не должна мутировать исходный массив", () => {
    const input = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
    ];
    
    const original = [...input];
    sortHeroes(input);
    
    expect(input).toEqual(original);
  });
  
  test("должна корректно обрабатывать пустой массив", () => {
    const input = [];
    const result = sortHeroes(input);
    
    expect(result).toEqual([]);
  });
  
  test("должна корректно обрабатывать массив с одним элементом", () => {
    const input = [{ name: "мечник", health: 50 }];
    const result = sortHeroes(input);
    
    expect(result).toEqual([{ name: "мечник", health: 50 }]);
  });
  
  test("должна корректно обрабатывать героев с одинаковым здоровьем", () => {
    const input = [
      { name: "герой1", health: 50 },
      { name: "герой2", health: 50 },
      { name: "герой3", health: 50 },
    ];
    
    const result = sortHeroes(input);
    
    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining(input));
  });
});