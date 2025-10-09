import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1>Skills</h1>
      <p>Check my resume for even more skills</p>
      {/* FRONTEND */}
      <div className={styles.skillSection}>
        <h2>Front End</h2>
        <div>
          {/* <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            <span>HTML</span>
          </div> */}
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <span>React, React Native</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <span>TypeScript</span>
          </div>
          {/* <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" />
            <span>React Native</span>
          </div> */}
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
            <span>Redux</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" />
            <span>jQuery</span>
          </div>
          {/* <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            <span>CSS3</span>
          </div> */}
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            <span>Bootstrap</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <span>Tailwind CSS</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" />
            <span>AngularJS</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
            <span>Vue.js</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            <span>Next.js</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />
            <span>Material UI</span>
          </div>
        </div>
      </div>
      {/* BACKEND */}
      <div className={styles.skillSection}>
        <h2>Back End</h2>
        <div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <span>Node.js</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"/>
            <span>Express.js</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            <span>Java</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <span>Python</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
            <span>Spring</span>
          </div>
          {/* <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <span>React, React Native</span>
          </div> */}
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
            <span>Go</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" />
            <span>GraphQL</span>
          </div>
        </div>
      </div>
      {/* DATABASE */}
      <div className={styles.skillSection}>
        <h2>Database</h2>
        <div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
            <span>MongoDB</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            <span>MySQL</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      {/* TOOLS */}
      <div className={styles.skillSection}>
        <h2>Tools</h2>
        <div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <span>Git</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
            <span>Azure</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <span>AWS</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
            <span>Jest</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
            <span>Jira</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" />
            <span>Confluence</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />
            <span>Supabase</span>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
