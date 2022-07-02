import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Employees,
  Stacked,
  Customers,
  Area,
  Pie,
  Financial,
  Bar,
  Pyramid,
  ColorMapping,
  ColorPicker,
  Editor,
  Line,
  Kanban,
  Calendar,
} from "./pages";

import "./App.css";

// this is where state context are maintained. so we import it
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
              <TooltipComponent contents="settings" position="top">
                <button
                  type="button"
                  className="3-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: "blue", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              // dark : means on dark mode
              <div
                className="w-72 fixed sidebar 
            dark:bg-secondary-dark-bg
            bg-white"
              >
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}

            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>

              <div>
                <Routes>
                  {/* dashboard routes */}
                  <Route path="/ecommerce" element={<Ecommerce />} />
                  <Route path="/" element={<Ecommerce />} />

                  {/* pages routes */}
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* Apps */}
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/kaban" element={<Kanban />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* Charts */}
                  <Route path="/area" element={<Area />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
