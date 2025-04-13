import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./homepage";
import DescriptionToggle from "./components/button/button";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
