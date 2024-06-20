import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";

import s from "./Home.module.scss"

const Home = () => {
    return (
        <div className={s.root}>
            <Header />
            <Content />
        </div>
    );
};

export default Home;
