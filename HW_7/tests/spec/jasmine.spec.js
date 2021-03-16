describe('Соответствие значений', function () {
    it('Проверка значения переменной a на равенство 10', function () {
        let a = 10;

        expect(a).toBe(10);
        // expect(a).not.toBe(10);
    });
});

describe('Дополнительные функции', function () {
    it('Сравнение объектов', function () {
        const myGo = () => {};

        const user1 = {
            name: 'Ann',
            age: 20,
            go: myGo,
        };
        const user2 = {
            name: 'Ann',
            age: 20,
            go: myGo,
        };

        expect(user1).toEqual(user2);
    });

    it('Arrays', function () {
        const arr1 = ['black', 'white'];
        const arr2 = ['white', 'black'];

        // expect(arr1).toEqual(arr2);
        expect(arr1).toContain('black');
    });

    it('RegExp', function () {
        let str = 'Test AbcD Jasmine';

        expect(str).toMatch(/abcd/i);
    });
});

// expect().toBeNull();
// expect().toBeUndefined();
// expect().toBeTrusty();
// expect().toBeFalsy();
// expect().toBeNaN();
// expect().toBeGreaterThan();
// expect().toBeGreaterThanOrEqual();
// expect().toBeLessThan();
// expect().toBeLessThanOrEqual();
// expect().toBeCloseTo();
