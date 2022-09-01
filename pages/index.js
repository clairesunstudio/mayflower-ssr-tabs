import styles from "../styles/Home.module.css";
import Divider from "@massds/mayflower-react/dist/Divider";
import Tab from "@massds/mayflower-react/dist/TabContainer/tab.mjs";
import TabContainer from "@massds/mayflower-react/dist/TabContainer/index.mjs";

export default function Home() {
  return (
    <div className={styles.container}>

      <Divider />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Mayflower Tabs</a>
        </h1>

        <TabContainer
          defaultTab={0}
          nested={false}
          onTabChange={function noRefCheck() {}}
        >
          <Tab
            active={false}
            handleClick={function noRefCheck() {}}
            title="Tab 1"
          >
            <TabContainer
              defaultTab={0}
              nested
              onTabChange={function noRefCheck() {}}
            >
              <Tab
                active={false}
                handleClick={function noRefCheck() {}}
                title="Sub Tab 1"
              >
                This should support nesting like this.
              </Tab>
              <Tab
                active={false}
                handleClick={function noRefCheck() {}}
                title="Sub Tab 2"
              >
                This should support nesting like this.
              </Tab>
            </TabContainer>
          </Tab>
        </TabContainer>

        </main>
    </div>
  );
}
