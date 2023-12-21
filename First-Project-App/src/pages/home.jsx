import "./home.css";

function Home() {
  return (
    <section class="homeSection">
      <div className="container">
        <div class="about">
          <div class="aboutText">
            <h2 class="abouth2">ELECTRICAL SERVICE PROVIDERS</h2>
            <br />
            <p class="aboutp">
              Lorem ipsum dolor sit amet, pri autem nemore <br />
              bonorum te. Autem fierent ullamcorper ius no. Te tibique <br />
              intellegam mediocritatem his, est quis.
            </p>
            <br />
            <button class="contactBtn">Contact Us</button>
          </div>
          <div class="aboutImg">
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
