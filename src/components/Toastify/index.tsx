"use client";

import { useTheme } from "next-themes";
import { Bounce, ToastContainer } from "react-toastify";

export default function Toastify() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      pauseOnHover
      theme={currentTheme === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  );
}
