import React from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgeBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
