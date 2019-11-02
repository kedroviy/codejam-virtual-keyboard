export default class Keys {
    // eslint-disable-next-line class-methods-use-this
    render() {
        const createKeys = () => {
            const keyboardFirstLine = document.querySelector('.keyboard__first-line');
            const keyboardSecondLine = document.querySelector('.keyboard__second-line');
            const keyboardTreeLine = document.querySelector('.keyboard__thirth-line');
            const keyboardFourLine = document.querySelector('.keyboard__four-line');
            const keyboardFiveLine = document.querySelector('.keyboard__five-line');
            // eslint-disable-next-line no-undef
            // eslint-disable-next-line vars-on-top
            const keyRow1 = [
                ['Backquote', 'ё', 'Ё', '`', '~'],
                ['Digit1', '1', '!', '1', '!'],
                ['Digit2', '2', '"', '2', '@'],
                ['Digit3', '3', '№', '3', '#'],
                ['Digit4', '4', ';', '4', '$'],
                ['Digit5', '5', '%', '5', '%'],
                ['Digit6', '6', ':', '6', '^'],
                ['Digit7', '7', '?', '7', '&'],
                ['Digit8', '8', '', '8', ''],
                ['Digit9', '9', '(', '9', '('],
                ['Digit0', '0', ')', '0', ')'],
                ['Digit-', '-', '', '-', ''],
                ['Equal=', '=', '+', '=', '+'],
                ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
            ];
            const keyRow2 = [
                ['Tab'],
                ['Q', 'q'],
                ['W', 'w'],
                ['E'],
                ['R'],
                ['T'],
                ['Y'],
                ['U'],
                ['I'],
                ['O'],
                ['P'],
                ['['],
                [']'],
                // eslint-disable-next-line no-useless-escape
                ['\/'],

            ];
            const keyRow3 = [
                ['Caps Lock'], ['A'], ['S'], ['D'], ['F'], ['G'], ['H'], ['J'], ['K'], ['L'], [':'], ['\''], ['Enter'],
            ];
            const keyRow4 = [
                ['Shift'], ['Z'], ['X'], ['C'], ['V'], ['B'], ['N'], ['M'], ['<'], ['>'], ['?'], ['Shift'], ['^'],
            ];
            const keyRow5 = [
                ['Ctrl'], ['Alt'], ['Space'], ['Alt'], ['Ctrl'], ['<'], ['-'], ['>'],
            ];
            keyboardFirstLine.innerHTML = keyRow1
                .map(item => `<div class="simple-key">${item}</div>`)
                .join('');
            keyboardSecondLine.innerHTML = keyRow2
                .map(item => `<div class="simple-key">${item}</div>`)
                .join('');
            keyboardTreeLine.innerHTML = keyRow3
                .map(item => `<div class="simple-key">${item}</div>`)
                .concat('')
                .join('');
            keyboardFourLine.innerHTML = keyRow4
                .map(item => `<div class="simple-key">${item}</div>`)
                .join('');
            keyboardFiveLine.innerHTML = keyRow5
                .map(item => `<div class="simple-key">${item}</div>`)
                .join('');
            // eslint-disable-next-line no-console
            console.log(keyRow1);
        };
        createKeys();
    }
}
