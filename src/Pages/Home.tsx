import React from "react";
import CardPosting from "../Components/Card_Posting/CardPosting";
import CardProfile from "../Components/Card_Profile/CardProfile";

import { StyHome } from "./Home_styles";

const Home = () => {
  return (
    <StyHome>
      <aside className="profile">
        <CardProfile />
      </aside>
      <article className="publication">
        <CardPosting
          lastHourOnline="há cerca de 8 horas"
          viewers="somente eu"
          commentsQuantity={0}
          sharesQuantity={0}
          contentPost='Essa publicação está configurada no modo privado "somente eu".'
        />
      </article>
      <aside className="scores"></aside>
    </StyHome>
  );
};

export default Home;
