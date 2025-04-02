import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
