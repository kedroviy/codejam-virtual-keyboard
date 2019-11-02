import Input from './Input';
import Properties from './Properties';

const app = () => {
    const input = new Input();
    const prop = new Properties();
    input.render();
    prop.render();
};
export default app;
