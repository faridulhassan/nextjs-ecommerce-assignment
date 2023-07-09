import React from "react";

export default function Footer() {
  return (
    <footer className="py-5 bg-sky-600 text-center text-white">
      &copy; {new Date().getFullYear()} - Your Best E-commerce Solution.
    </footer>
  );
}
