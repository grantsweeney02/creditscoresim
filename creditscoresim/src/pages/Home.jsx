import "../styles/style.css";

const Home = () => {
    return (
        <body>
            {/* <div className="container">
                <div className="question__card">
                    <h3 className="question__text">You Finished!</h3>
                    <div class="line"></div>
                    <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}>
                    <div className="question__options">
                        <button className="question__options_option">
                            Play Again?
                        </button>
                    </div>
                </div>
                <div className="credit_score">
                    <h1 className="credit_score_text">Credit Score: </h1>
                </div>
            </div> */}
            <div className="container">
                <div className="question__card">
                    <h3 className="question__text">
                        What type of car would you buy?
                    </h3>
                    <div class="line"></div>
                    <div className="question__options">
                        <button className="question__options_option">
                            POTENTIAL OPTION 1
                        </button>
                        <button className="question__options_option">
                            POTENTIAL OPTION 2
                        </button>
                        <button className="question__options_option">
                            POTENTIAL OPTION 3
                        </button>
                        <button className="question__options_option">
                            POTENTIAL OPTION 4
                        </button>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Home;
