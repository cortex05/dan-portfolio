import styles from "./Landing.module.css";
import headshotImg from "../../assets/images/danielcortesheadshot.jpg";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <h1>Daniel Cortes - Software Engineer</h1>
      {/* Intro section */}
      <div className={styles.intro}>
        <div>
          <p>
            Daniel Cortes is a Full Stack Software Engineer who specializes in
            Web Based Applications. He is passionate about creating solutions to
            real-world problems with technology.
          </p>
        </div>
        <div>
          <img src={headshotImg} alt="Daniel Cortes image" />
        </div>
      </div>
      {/* Employment history */}
      <div className={styles.employmentHistory}>
        <h2>Employment History</h2>
        <div>
          <div>
            <h3>Hoyack LLC</h3>
            <span>July 2025 - September 2025</span>
          </div>
          <p>
            <span>Software Engineer: </span> Built ReactFlow editor for
            prospective clients to design flow for receptionist application.
            Client would then be able to export the designed flow as JSON to be
            used in the application. Additionally involved in development of
            MERN stack application for financial purposes.
          </p>
          <ul>
            <li>- ReactFlow</li>
            <li>- Supabase</li>
            <li>- PostgreSQL</li>
            <li>- MongoDB</li>
            <li>- Express.js</li>
            <li>- React</li>
            <li>- Node.js</li>
            <li>- Javascript</li>
            <li>- TypeScript</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Kroger</h3>
            <span>December 2021 - March 2025</span>
          </div>
          <p>
            <span>Software Engineer: </span>Worked on grocery picking and order
            fulfillment application used by store employees. Took user feedback
            to refine and improve application to help workers achieve higher
            performance and efficiency.
          </p>
          <p>
            Developed similar functionality in a Progressive Web App (PWA) to
            allow gig economy workers the ability to assist in company team
            members workload and ensure continued customer fulfillment during
            staffing shortages.
          </p>
          <p>
            Involved in building an associate-facing fulfillment hub web
            application. This tool is to allow quality assurance testing,
            troubleshoot production issues, and facilitate store associate
            training among others. Features I have lead the implementation of an
            analytics system that enabled tracking of application usage. This
            gave understanding of how the app is being used and insight into
            where our development focus should be. Additionally, I added
            End-to-End testing to the User Interface flows of the application
            which facilitates the regression testing of the application. I
            handled the implementation of Azure cloud based company features via
            the use of a Managed Identity and Azure Key Vault.
          </p>
          <ul>
            <li>- TypeScript</li>
            <li>- React</li>
            <li>- Tailwind CSS</li>
            <li>- Playwright</li>
            <li>- Microsoft PowerBI</li>
            <li>- Redux</li>
            <li>- Tanstack</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Ceballos Technologies</h3>
            <span>September 2021 - December 2021</span>
          </div>
          <p>
            <span>Integration Engineer: </span>Designed, Developed, Documented
            and Supported integrating remote patient monitoring into client
            medical electronic health records. Test workflow and functionality
            of integrating software systems and identified issues. Coordinated
            with offshore team with changes and updates to integrations.
          </p>
          <ul>
            <li>- Java</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Nucamp</h3>
            <span>March 2020 - September 2022</span>
          </div>
          <p>
            <span>Coding Instructor: </span>Taught students courses on fullstack
            web development. Gave daily one on one time and group lectures once
            a week.
          </p>
          <ul>
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- Javascript</li>
            <li>- Bootstrap</li>
            <li>- React</li>
            <li>- Redux</li>
            <li>- React Native</li>
          </ul>
        </div>
      </div>
      <div className={styles.education}>
        <h2>Education</h2>
        <div>
          <div>
            <h3>CodeUp</h3>
            <p>December 2020 - May 2021</p>
          </div>
          <p>
            CodeUp was a intensive coding bootcamp focused on full-stack web
            development. Topics covered included standard frontend knowledge
            along with Bootstrap and JQuery and A backend that was Java based
            with MySQL for a database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
