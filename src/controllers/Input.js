export default class Input {
    // eslint-disable-next-line class-methods-use-this
    render() {
        const input = () =>{
            const wrapper = document.createElement('div');
            wrapper.className = 'wrapper';
            const inputWindow = document.createElement('input');
            inputWindow.className = 'input';
            const body = document.getElementsByTagName('body')[0];
            body.appendChild(wrapper);
            wrapper.appendChild(inputWindow);

        }
        input();
    }
}
