import React from "react";
import Gallery from "./components/Gallery/Gallery";
import ApprovedImagesList from "./components/ApprovedImagesList/ApprovedImagesList";
import GlobalStyles, { Main, AppContainer } from "./App.styles";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <AppContainer>
        <p>IMAGE APPROVAL APPLICATION</p>
        <div>
          <ApprovedImagesList />
          <Gallery />
        </div>
      </AppContainer>
    </Main>
  );
}

export default App;
