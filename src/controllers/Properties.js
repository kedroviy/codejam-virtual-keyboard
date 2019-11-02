export default class Properties {
    // eslint-disable-next-line class-methods-use-this
    render() {
        const prop = () => {
            document.getElementsByClassName('input').setAttribute('type', 'text');
        };
        prop();
    }
}
