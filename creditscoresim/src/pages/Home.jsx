import "../styles/style.css";

const Home = () => {
    return (
        <body>
            <div className="container">
                <div className="question__card">
                    <h3 className="question__text">You Finished!</h3>
                    <div class="line"></div>
                    {/* <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}> */}
                    <div className="question__options">
                        <button className="question__options_option">
                            Play Again?
                        </button>
                    </div>
                </div>
                <div className="credit_score">
                    <h1 className="credit_score_text">Credit Score: </h1>
                </div>
            </div>
        </body>
    );
};

export default Home;
