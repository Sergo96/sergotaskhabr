import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Home } from "./pages/Home/Home";
import { loadPictures } from "./redux/actions/actions";

function App() {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(loadPictures());
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
