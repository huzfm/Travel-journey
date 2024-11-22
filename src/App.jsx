
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
const NavBar = lazy(() => import('./components/NavBar'));
const Places = lazy(() => import("./components/Places"));
const Pahalgam = lazy(() => import("./ui/Pahalgam"));
const Gulmarg = lazy(() => import("./ui/Gulmarg"));
const Sonamarg = lazy(() => import("./ui/Sonamarg"));
const Drung = lazy(() => import("./ui/Drung"));
const Naranag = lazy(() => import("./ui/Naranag"));
const Yusmarg = lazy(() => import("./ui/Yusmarg"));
const Ahrabal = lazy(() => import("./ui/Ahrabal"));
const Dhoodhpathri = lazy(() => import("./ui/Dhoodpathri"));

function App() {
  return (
    <>
      <SuspenseWithLoader>
        <NavBar />
      </SuspenseWithLoader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<SuspenseWithLoader><Places /></SuspenseWithLoader>} />
        <Route path="/places/pahalgam" element={<SuspenseWithLoader><Pahalgam /></SuspenseWithLoader>} />
        <Route path="/places/gulmarg" element={<SuspenseWithLoader><Gulmarg /></SuspenseWithLoader>} />
        <Route path="/places/sonamarg" element={<SuspenseWithLoader><Sonamarg /></SuspenseWithLoader>} />
        <Route path="/places/drung" element={<SuspenseWithLoader><Drung /></SuspenseWithLoader>} />
        <Route path="/places/dhoodhpathri" element={<SuspenseWithLoader><Dhoodhpathri /></SuspenseWithLoader>} />
        <Route path="/places/ahrabal" element={<SuspenseWithLoader><Ahrabal /></SuspenseWithLoader>} />
        <Route path="/places/yusmmarg" element={<SuspenseWithLoader><Yusmarg /></SuspenseWithLoader>} />
        <Route path="/places/naranag" element={<SuspenseWithLoader><Naranag /></SuspenseWithLoader>} />
      </Routes>
    </>
  );
}

const SuspenseWithLoader = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
};

export default App;
