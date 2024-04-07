import Footer from "./components/Footer";
import Header from "./components/Header";
import CoursesProvider from "./components/CoursesProvider";
import Content from "./components/Content";
import RightBottom from "./components/RightBottom";
function App() {
  return (
    <main className="">
      <CoursesProvider>
        <Header />
        <RightBottom />
        <Content />
        <Footer />
      </CoursesProvider>
    </main>
  );
}

export default App;
