import "../styles/style.css";

const Home = () => {
    const gotolearn = (e) => {
        if (e != null) {
            e.preventDefault();
        }
        const signText = document.querySelector(".sign__text");
        const octocat = document.querySelector(".octocat");
        setTimeout(() => {
            signText.classList.add("animate");
            octocat.classList.add("animate");
        });

        setTimeout(() => {
            window.location.href = "/sim";
        }, 4000);
    };
    return (
        <body>
            <div className="container__home">
                <div className="sign">
                    <a
                        className="sign__text"
                        href="/learn"
                        onClick={() => gotolearn()}
                    >
                        GET STARTED
                    </a>
                    <img
                        className="octocat"
                        src="/images/pointer_cat.png"
                        alt=""
                    />
                </div>
            </div>
        </body>
    );
};

export default Home;
