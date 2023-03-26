import "../styles/style.css";

const Learn = () => {
    return (
      
        <body>
            <div className="container__learn">
                <div className="learn__card">
                    <div className="left">
                        <h1>Learn Before You Play</h1>
                        <h2>What Is A Credit Score?</h2>
                        <p>
                            → A credit score is a score that indicates how
                            likely you are to pay back loans, and it is based on
                            your credit report.{" "}
                        </p>
                        <h2>How Is The Credit Score Calculated?</h2>
                        <p>
                            → There are five pieces that affect your credit
                            score: your payment history, how much you owe,
                            length of your credit history, types of accounts you
                            have, and recent credit activity.{" "}
                        </p>
                        <h2>How Does Credit Score Get Affected?</h2>
                        <p>
                            → Credit score decreases with late or missed
                            payment, neary “maxing out” on your credit cards, or
                            having high outstanding balances. In order to
                            increase credit scores, you need to pay down your
                            balances from what's owed in your account. By
                            decreasing your credit utilization ratio, which
                            basically means decreasing the amount you are
                            putting on credit when making purchases, your credit
                            score will start to increase. The most intuitive way
                            to increase your credit score is the make sure that
                            you are paying off your credit account.{" "}
                        </p>
                    </div>
                    <div className="right">
                        <a className="play__btn" href="/sim">PLAY NOW!</a>
                    </div>
                </div>
            </div>
        </body>
        
    );
};

export default Learn;
