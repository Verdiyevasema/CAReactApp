import "./home.css";

function Home() {
  return (
    <section className="homeSection">
      <div className="container">
        <div className="about">
          <div className="aboutText">
            <h2 className="abouth2">ELECTRICAL SERVICE PROVIDERS</h2>
            <br />
            <p className="aboutp">
              Lorem ipsum dolor sit amet, pri autem nemore <br />
              bonorum te. Autem fierent ullamcorper ius no. Te tibique <br />
              intellegam mediocritatem his, est quis.
            </p>
            <br />
            <button className="contactBtn">Contact Us</button>
          </div>
          <div className="aboutImg">
            <img
              src="https://media.monster.co.th/career-advice/wp-content/uploads/2021/11/web-developer-interview-questions-and-answers.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
