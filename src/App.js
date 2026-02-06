<<<<<<< HEAD
import CheckboxContainer from "./map/expert/CheckboxContainer";
=======
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { RouteProvider } from "./context/expert/RouteContext";
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17

function App() {
  return (
    <> 
<<<<<<< HEAD
      <CheckboxContainer />
=======
      <RouteProvider>
        <RouterProvider router={router} />
      </RouteProvider>
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
