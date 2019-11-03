import Input from './Input';
// import Keys from './Keys';
import New from './New';

const app = () => {
    const input = new Input();
    // const createKeys = new Keys();
    const news = new New();
    news.render();
    input.render();
    // createKeys.render();
};
export default app;
