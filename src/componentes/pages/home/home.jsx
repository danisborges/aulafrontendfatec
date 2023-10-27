import Header from "../../header/header";
import Footer from "../../footer/footer";

import './home.css';

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <div>
                    <h3>Texto esquerda</h3>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non, debitis nobis quia ducimus minima recusandae reiciendis adipisci harum iure laudantium quis voluptatem ex architecto molestias illo earum cupiditate delectus?</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;