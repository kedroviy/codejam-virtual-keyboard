export default class Input {
    // eslint-disable-next-line class-methods-use-this
    render() {
        const input = () => {
            const wrapper = document.createElement('div');
            wrapper.className = 'wrapper';
            const inputWindow = document.createElement('textarea');
            inputWindow.className = 'input';
            const body = document.getElementsByTagName('body')[0];
            const keyboard = document.createElement('div');
            const keyboardFirstLine = document.createElement('div');
            keyboardFirstLine.className = 'keyboard__first-line';
            const keyboardSecondLine = document.createElement('div');
            keyboardSecondLine.className = 'keyboard__second-line';
            const keyboardThirtLine = document.createElement('div');
            keyboardThirtLine.className = 'keyboard__thirth-line';
            const keyboardFourLine = document.createElement('div');
            const keyboardFiveLine = document.createElement('div');
            keyboardFiveLine.className = 'keyboard__five-line';
            keyboardFourLine.className = 'keyboard__four-line';
            keyboard.className = 'keyboard';
            body.appendChild(wrapper);
            wrapper.appendChild(inputWindow);
            wrapper.appendChild(keyboard);
            keyboard.appendChild(keyboardFirstLine);
            keyboard.appendChild(keyboardSecondLine);
            keyboard.appendChild(keyboardThirtLine);
            keyboard.appendChild(keyboardFourLine);
            keyboard.appendChild(keyboardFiveLine);
        }
        input();
    }
}
