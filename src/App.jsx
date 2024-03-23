import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Shade from "./components/Shade";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Shade></Shade>
      <Faq></Faq>

      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
