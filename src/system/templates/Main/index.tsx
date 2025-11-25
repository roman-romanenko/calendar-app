import React, { useState } from "react";
import Menu from "../../../components/organisms/Menu";
import Header from "../../../components/organisms/Header";
import { styles } from "./styles";
import Calendar from "../../../components/organisms/MainCalendar";
import EventModal from "../../../components/organisms/Modal/EventModal";

const MainTemplate: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div css={styles.container}>
      <Header toggleMenu={() => setMenuOpen((prev) => !prev)} />
      <main css={styles.mainContent}>
        <Menu isOpen={menuOpen} />
        <Calendar isMenuOpen={menuOpen} />
        <EventModal />
      </main>
    </div>
  );
};

export default MainTemplate;
