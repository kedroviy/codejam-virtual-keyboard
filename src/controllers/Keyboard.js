/* eslint-disable no-undef */
export default class Keyboard {
    // eslint-disable-next-line class-methods-use-this
    render() {
        // eslint-disable-next-line no-unused-vars
        /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

        const SPECIALS = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'Delete'];

        const ROWS = [];

        ROWS[0] = [
            {
                className: 'Backquote',
                eng:
        {
            caseDown: '`',
            caseUp: '~',
        },
                rus:
        {
            caseDown: 'ё',
            caseUp: 'Ё',
        },
            },
            {
                className: 'Digit1',
                eng:
        {
            caseDown: '1',
            caseUp: '!',
        },
                rus:
        {
            caseDown: '1',
            caseUp: '!',
        },
            },
            {
                className: 'Digit2',
                eng:
        {
            caseDown: '2',
            caseUp: '@',
        },
                rus:
        {
            caseDown: '2',
            caseUp: '"',
        },
            },
            {
                className: 'Digit3',
                eng:
        {
            caseDown: '3',
            caseUp: '#',
        },
                rus:
        {
            caseDown: '3',
            caseUp: '№',
        },
            },
            {
                className: 'Digit4',
                eng:
        {
            caseDown: '4',
            caseUp: '$',
        },
                rus:
        {
            caseDown: '4',
            caseUp: ';',
        },
            },
            {
                className: 'Digit5',
                eng:
        {
            caseDown: '5',
            caseUp: '%',
        },
                rus:
        {
            caseDown: '5',
            caseUp: '%',
        },
            },
            {
                className: 'Digit6',
                eng:
        {
            caseDown: '6',
            caseUp: '^',
        },
                rus:
        {
            caseDown: '6',
            caseUp: ':',
        },
            },
            {
                className: 'Digit7',
                eng:
        {
            caseDown: '7',
            caseUp: '&',
        },
                rus:
        {
            caseDown: '7',
            caseUp: '?',
        },
            },
            {
                className: 'Digit8',
                eng:
        {
            caseDown: '8',
            caseUp: '*',
        },
                rus:
        {
            caseDown: '8',
            caseUp: '*',
        },
            },
            {
                className: 'Digit9',
                eng:
        {
            caseDown: '9',
            caseUp: '(',
        },
                rus:
        {
            caseDown: '9',
            caseUp: '(',
        },
            },
            {
                className: 'Digit0',
                eng:
        {
            caseDown: '0',
            caseUp: ')',
        },
                rus:
        {
            caseDown: '0',
            caseUp: ')',
        },
            },
            {
                className: 'Minus',
                eng:
        {
            caseDown: '-',
            caseUp: '_',
        },
                rus:
        {
            caseDown: '-',
            caseUp: '_',
        },
            },
            {
                className: 'Equal',
                eng:
        {
            caseDown: '=',
            caseUp: '+',
        },
                rus:
        {
            caseDown: '=',
            caseUp: '+',
        },
            },
            {
                className: 'Backspace',
                eng:
        {
            caseDown: 'Backspace',
            caseUp: 'Backspace',
        },
                rus:
        {
            caseDown: 'Backspace',
            caseUp: 'Backspace',
        },
            },
        ];

        ROWS[1] = [
            {
                className: 'Tab',
                eng:
        {
            caseDown: 'Tab',
            caseUp: 'Tab',
        },
                rus:
        {
            caseDown: 'Tab',
            caseUp: 'Tab',
        },
            },
            {
                className: 'KeyQ',
                eng:
        {
            caseDown: 'q',
            caseUp: 'Q',
        },
                rus:
        {
            caseDown: 'й',
            caseUp: 'Й',
        },
            },
            {
                className: 'KeyW',
                eng:
        {
            caseDown: 'w',
            caseUp: 'W',
        },
                rus:
        {
            caseDown: 'ц',
            caseUp: 'Ц',
        },
            },
            {
                className: 'KeyE',
                eng:
        {
            caseDown: 'e',
            caseUp: 'E',
        },
                rus:
        {
            caseDown: 'у',
            caseUp: 'У',
        },
            },
            {
                className: 'KeyR',
                eng:
        {
            caseDown: 'r',
            caseUp: 'R',
        },
                rus:
        {
            caseDown: 'к',
            caseUp: 'К',
        },
            },
            {
                className: 'KeyT',
                eng:
        {
            caseDown: 't',
            caseUp: 'T',
        },
                rus:
        {
            caseDown: 'е',
            caseUp: 'Е',
        },
            },
            {
                className: 'KeyY',
                eng:
        {
            caseDown: 'y',
            caseUp: 'Y',
        },
                rus:
        {
            caseDown: 'н',
            caseUp: 'Н',
        },
            },
            {
                className: 'KeyU',
                eng:
        {
            caseDown: 'u',
            caseUp: 'U',
        },
                rus:
        {
            caseDown: 'г',
            caseUp: 'Г',
        },
            },
            {
                className: 'KeyI',
                eng:
        {
            caseDown: 'i',
            caseUp: 'I',
        },
                rus:
        {
            caseDown: 'ш',
            caseUp: 'Ш',
        },
            },
            {
                className: 'KeyO',
                eng:
        {
            caseDown: 'o',
            caseUp: 'O',
        },
                rus:
        {
            caseDown: 'щ',
            caseUp: 'Щ',
        },
            },
            {
                className: 'KeyP',
                eng:
        {
            caseDown: 'p',
            caseUp: 'P',
        },
                rus:
        {
            caseDown: 'з',
            caseUp: 'З',
        },
            },
            {
                className: 'BracketLeft',
                eng:
        {
            caseDown: '[',
            caseUp: '{',
        },
                rus:
        {
            caseDown: 'х',
            caseUp: 'Х',
        },
            },
            {
                className: 'BracketRight',
                eng:
        {
            caseDown: ']',
            caseUp: '}',
        },
                rus:
        {
            caseDown: 'ъ',
            caseUp: 'Ъ',
        },
            },
            {
                className: 'Backslash',
                eng:
        {
            caseDown: '\\',
            caseUp: '|',
        },
                rus:
        {
            caseDown: '\\',
            caseUp: '/',
        },
            },
        ];

        ROWS[2] = [
            {
                className: 'CapsLock',
                eng:
        {
            caseDown: 'CapsLock',
            caseUp: 'CapsLock',
        },
                rus:
        {
            caseDown: 'CapsLock',
            caseUp: 'CapsLock',
        },
            },
            {
                className: 'KeyA',
                eng:
        {
            caseDown: 'a',
            caseUp: 'A',
        },
                rus:
        {
            caseDown: 'ф',
            caseUp: 'Ф',
        },
            },
            {
                className: 'KeyS',
                eng:
        {
            caseDown: 's',
            caseUp: 'S',
        },
                rus:
        {
            caseDown: 'ы',
            caseUp: 'Ы',
        },
            },
            {
                className: 'KeyD',
                eng:
        {
            caseDown: 'd',
            caseUp: 'D',
        },
                rus:
        {
            caseDown: 'в',
            caseUp: 'В',
        },
            },
            {
                className: 'KeyF',
                eng:
        {
            caseDown: 'f',
            caseUp: 'F',
        },
                rus:
        {
            caseDown: 'а',
            caseUp: 'А',
        },
            },
            {
                className: 'KeyG',
                eng:
        {
            caseDown: 'g',
            caseUp: 'G',
        },
                rus:
        {
            caseDown: 'п',
            caseUp: 'П',
        },
            },
            {
                className: 'KeyH',
                eng:
        {
            caseDown: 'h',
            caseUp: 'H',
        },
                rus:
        {
            caseDown: 'р',
            caseUp: 'Р',
        },
            },
            {
                className: 'KeyJ',
                eng:
        {
            caseDown: 'j',
            caseUp: 'J',
        },
                rus:
        {
            caseDown: 'о',
            caseUp: 'О',
        },
            },
            {
                className: 'KeyK',
                eng:
        {
            caseDown: 'k',
            caseUp: 'K',
        },
                rus:
        {
            caseDown: 'л',
            caseUp: 'Л',
        },
            },
            {
                className: 'KeyL',
                eng:
        {
            caseDown: 'l',
            caseUp: 'L',
        },
                rus:
        {
            caseDown: 'д',
            caseUp: 'Д',
        },
            },
            {
                className: 'Semicolon',
                eng:
        {
            caseDown: ';',
            caseUp: ':',
        },
                rus:
        {
            caseDown: 'ж',
            caseUp: 'Ж',
        },
            },
            {
                className: 'Quote',
                eng:
        {
            caseDown: '\'',
            caseUp: '"',
        },
                rus:
        {
            caseDown: 'э',
            caseUp: 'Э',
        },
            },
            {
                className: 'Enter',
                eng:
        {
            caseDown: 'Enter',
            caseUp: 'Enter',
        },
                rus:
        {
            caseDown: 'Enter',
            caseUp: 'Enter',
        },
            },
        ];

        ROWS[3] = [
            {
                className: 'ShiftLeft',
                eng:
        {
            caseDown: 'Shift',
            caseUp: 'Shift',
        },
                rus:
        {
            caseDown: 'Shift',
            caseUp: 'Shift',
        },
            },
            {
                className: 'KeyZ',
                eng:
        {
            caseDown: 'z',
            caseUp: 'Z',
        },
                rus:
        {
            caseDown: 'я',
            caseUp: 'Я',
        },
            },
            {
                className: 'KeyX',
                eng:
        {
            caseDown: 'x',
            caseUp: 'X',
        },
                rus:
        {
            caseDown: 'ч',
            caseUp: 'Ч',
        },
            },
            {
                className: 'KeyC',
                eng:
        {
            caseDown: 'c',
            caseUp: 'C',
        },
                rus:
        {
            caseDown: 'с',
            caseUp: 'С',
        },
            },
            {
                className: 'KeyV',
                eng:
        {
            caseDown: 'v',
            caseUp: 'V',
        },
                rus:
        {
            caseDown: 'м',
            caseUp: 'М',
        },
            },
            {
                className: 'KeyB',
                eng:
        {
            caseDown: 'b',
            caseUp: 'B',
        },
                rus:
        {
            caseDown: 'и',
            caseUp: 'И',
        },
            },
            {
                className: 'KeyN',
                eng:
        {
            caseDown: 'n',
            caseUp: 'N',
        },
                rus:
        {
            caseDown: 'т',
            caseUp: 'Т',
        },
            },
            {
                className: 'KeyM',
                eng:
        {
            caseDown: 'm',
            caseUp: 'M',
        },
                rus:
        {
            caseDown: 'ь',
            caseUp: 'Ь',
        },
            },
            {
                className: 'Comma',
                eng:
        {
            caseDown: ',',
            caseUp: '<',
        },
                rus:
        {
            caseDown: 'б',
            caseUp: 'Б',
        },
            },
            {
                className: 'Period',
                eng:
        {
            caseDown: '.',
            caseUp: '>',
        },
                rus:
        {
            caseDown: 'ю',
            caseUp: 'Ю',
        },
            },
            {
                className: 'Slash',
                eng:
        {
            caseDown: '/',
            caseUp: '?',
        },
                rus:
        {
            caseDown: '.',
            caseUp: ',',
        },
            },
            {
                className: 'ArrowUp',
                eng:
        {
            caseDown: '▲',
            caseUp: '▲',
        },
                rus:
        {
            caseDown: '▲',
            caseUp: '▲',
        },
            },
            {
                className: 'ShiftRight',
                eng:
        {
            caseDown: 'Shift',
            caseUp: 'Shift',
        },
                rus:
        {
            caseDown: 'Shift',
            caseUp: 'Shift',
        },
            },
        ];

        ROWS[4] = [
            {
                className: 'ControlLeft',
                eng:
        {
            caseDown: 'Ctrl',
            caseUp: 'Ctrl',
        },
                rus:
        {
            caseDown: 'Ctrl',
            caseUp: 'Ctrl',
        },
            },
            {
                className: 'AltLeft',
                eng:
        {
            caseDown: 'Alt',
            caseUp: 'Alt',
        },
                rus:
        {
            caseDown: 'Alt',
            caseUp: 'Alt',
        },
            },
            {
                className: 'Space',
                eng:
        {
            caseDown: ' ',
            caseUp: ' ',
        },
                rus:
        {
            caseDown: ' ',
            caseUp: ' ',
        },
            },
            {
                className: 'AltRight',
                eng:
        {
            caseDown: 'Alt',
            caseUp: 'Alt',
        },
                rus:
        {
            caseDown: 'Alt',
            caseUp: 'Alt',
        },
            },
            {
                className: 'ArrowLeft',
                eng:
        {
            caseDown: '◄',
            caseUp: '◄',
        },
                rus:
        {
            caseDown: '◄',
            caseUp: '◄',
        },
            },
            {
                className: 'ArrowDown',
                eng:
        {
            caseDown: '▼',
            caseUp: '▼',
        },
                rus:
        {
            caseDown: '▼',
            caseUp: '▼',
        },
            },
            {
                className: 'ArrowRight',
                eng:
        {
            caseDown: '►',
            caseUp: '►',
        },
                rus:
        {
            caseDown: '►',
            caseUp: '►',
        },
            },
            {
                className: 'ControlRight',
                eng:
        {
            caseDown: 'Ctrl',
            caseUp: 'Ctrl',
        },
                rus:
        {
            caseDown: 'Ctrl',
            caseUp: 'Ctrl',
        },
            },
        ];

        let isShiftLeftPressed = false;
        let isShiftRightPressed = false;
        let isCapsLockPressed = false;
        let caseState = 'caseDown';
        let lang = 'eng';

        document.body.insertAdjacentHTML('afterBegin',

            '<div class="wrapper"><textarea id="textarea" class="input" rows="5" cols="50"></textarea><div id="keyboard" class="keyboard"></div></div>');

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < ROWS.length; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            if (ROWS[i] === [4]) {
                row.className = 'row';
            }
            for (let j = 0; j < ROWS[i].length; j++) {
                const div = document.createElement('div');
                div.classList.add('simple-key');
                div.classList.add(ROWS[i][j].className);
                div.insertAdjacentHTML('afterBegin',
                    `<span class="rus hidden"><span class="caseDown hidden">${ROWS[i][j].rus.caseDown}</span><span class="caseUp hidden">${ROWS[i][j].rus.caseUp}</span></span><span class="eng"><span class="caseDown">${ROWS[i][j].eng.caseDown}</span><span class="caseUp hidden">${ROWS[i][j].eng.caseUp}</span></span>`);
                row.appendChild(div);
            }
            fragment.appendChild(row);
        }

        // eslint-disable-next-line no-undef
        keyboard.appendChild(fragment);

        const addActiveState = (element) => {
            element.classList.add('press');
        };

        const removeActiveState = (element) => {
            element.classList.remove('press');
        };

        const toggleCase = () => {
            // eslint-disable-next-line no-undef
            const langSpans = keyboard.querySelectorAll(`div > .${lang}`);
            for (let i = 0; i < langSpans.length; i++) {
                langSpans[i].querySelectorAll('span')[0].classList.toggle('hidden');
                langSpans[i].querySelectorAll('span')[1].classList.toggle('hidden');
            }
            if (caseState === 'caseUp') {
                caseState = 'caseDown';
            } else {
                caseState = 'caseUp';
            }
        };

        let i = 0;
        function toggleLang() {
            // eslint-disable-next-line no-undef
            const langSpans = keyboard.querySelectorAll(`div > .${lang}`);
            for (i = 0; i < langSpans.length; i++) {
                langSpans[i].classList.toggle('hidden');
                langSpans[i].querySelectorAll(`span.${caseState}`)[0].classList.toggle('hidden');
            }
            if (lang === 'eng') {
                lang = 'rus';
                localStorage.setItem('lang', 'rus');
            } else {
                lang = 'eng';
                localStorage.setItem('lang', 'eng');
            }

            // eslint-disable-next-line no-undef
            const langSpanses = keyboard.querySelectorAll(`div > .${lang}`);
            for (i = 0; i < langSpanses.length; i++) {
                langSpanses[i].classList.toggle('hidden');
                langSpanses[i].querySelectorAll(`span.${caseState}`)[0].classList.toggle('hidden');
            }
        }

        const keyUpHandler = (evt) => {
            // eslint-disable-next-line no-undef
            const elem = keyboard.getElementsByClassName(evt.code)[0];
            if (!elem) return;
            if (evt.code !== 'CapsLock') removeActiveState(elem.closest('div'));
            if (evt.code === 'ShiftLeft' || evt.code === 'ShiftRight') {
                toggleCase();
                if (evt.code === 'ShiftLeft') {
                    isShiftLeftPressed = false;
                    removeActiveState(elem.closest('div'));
                } else if (evt.code === 'ShiftRight') {
                    isShiftRightPressed = false;
                    removeActiveState(elem.closest('div'));
                }
            }
        };

        if (localStorage.lang === 'rus') {
            toggleLang();
        }

        document.addEventListener('keyup', keyUpHandler);

        document.addEventListener('keydown',
            (evt) => {
                let elem = null;
                // eslint-disable-next-line prefer-destructuring
                // eslint-disable-next-line no-undef
                // eslint-disable-next-line prefer-destructuring
                elem = keyboard.getElementsByClassName(evt.code)[0];
                if (!elem) {
                    evt.preventDefault();
                    return;
                }

                if (!SPECIALS.includes(evt.code)) {
                    textarea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
                } else {
                    // eslint-disable-next-line default-case
                    switch (evt.code) {
                    case 'Backspace':
                        textarea.value = textarea.value.substr(0, textarea.value.length - 1);
                        break;
                    case 'Tab':
                        textarea.value += '    ';
                        break;
                    case 'Enter':
                        textarea.value += '\n';
                        break;
                    case 'CapsLock':
                        if (isCapsLockPressed && !evt.repeat) {
                            removeActiveState(elem);
                            isCapsLockPressed = false;
                        } else {
                            addActiveState(elem);
                            isCapsLockPressed = true;
                        }
                        toggleCase();
                        break;
                    case 'ShiftLeft':
                        if (!isShiftLeftPressed && !isShiftRightPressed) {
                            addActiveState(elem);
                            toggleCase();
                            isShiftLeftPressed = true;
                        }
                        break;
                    case 'ShiftRight':
                        if (!isShiftRightPressed && !isShiftLeftPressed) {
                            addActiveState(elem);
                            toggleCase();
                            isShiftRightPressed = true;
                        }
                        break;
                    }
                }
                // eslint-disable-next-line no-restricted-globals
                if (evt.ctrlKey && event.altKey) toggleLang();


                if (evt.code !== 'CapsLock' && evt.code !== 'ShiftLeft' && evt.code !== 'ShiftRight') {
                    addActiveState(elem);
                // eslint-disable-next-line no-empty
                } else {
                }

                evt.preventDefault();
            });

        keyboard.addEventListener('mousedown',
            (evt) => {
                if (evt.target.tagName !== 'SPAN') return;

                const elem = evt.target.closest('div');

                if (!SPECIALS.includes(elem.classList[1])) {
                    textarea.value += evt.target.textContent;
                } else {
                    // eslint-disable-next-line default-case
                    switch (elem.classList[1]) {
                    case 'Backspace':
                        textarea.value = textarea.value.substr(0, textarea.value.length - 1);
                        break;
                    case 'Tab':
                        textarea.value += '    ';
                        break;
                    case 'Enter':
                        textarea.value += '\n';
                        break;
                    case 'CapsLock':
                        if (isCapsLockPressed) {
                            removeActiveState(evt.target.closest('div'));
                            isCapsLockPressed = false;
                        } else {
                            addActiveState(evt.target.closest('div'));
                            isCapsLockPressed = true;
                        }
                        toggleCase();
                        break;
                    case 'ShiftLeft':
                        if (!isShiftLeftPressed) {
                            toggleCase();
                            isShiftLeftPressed = true;
                        }
                        break;
                    case 'ShiftRight':
                        if (!isShiftRightPressed) {
                            toggleCase();
                            isShiftRightPressed = true;
                        }
                        break;
                    }
                }


                if (elem.classList[1] !== 'CapsLock') {
                    addActiveState(evt.target.closest('div'));
                    setTimeout(
                        () => {
                            removeActiveState(evt.target.closest('div'));
                            if (isShiftLeftPressed) {
                                toggleCase();
                                isShiftLeftPressed = false;
                            }
                            if (isShiftRightPressed) {
                                toggleCase();
                                isShiftRightPressed = false;
                            }
                        },
                        300,
                    );
                // eslint-disable-next-line no-empty
                } else {
                }
                if (elem.classList[1] !== 'MetaKey') evt.preventDefault();
            });
    }
}
