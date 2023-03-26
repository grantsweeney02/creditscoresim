import "../styles/style.css";

const Home = () => {
    return (
        <body>
            <div className="question__card">
                <h3 className="question__text">
                    What type of car would you buy
                </h3>
                {/* <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}> */}
                <div className="question__options">
                    <button className="question__options_option">NEW</button>
                    <button className="question__options_option">OLD</button>
                </div>
            </div>
        </body>
    );
};

export default Home;
