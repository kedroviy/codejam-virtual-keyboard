import Input from './Input';
import Keys from './Keys';

const app = () => {
    const input = new Input();
    const createKeys = new Keys();
    input.render();
    createKeys.render();
};
export default app;
