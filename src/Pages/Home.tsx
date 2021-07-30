import React from "react";
import CardPosting from "../Components/Card_Posting/CardPosting";
import CardProfile from "../Components/Card_Profile/CardProfile";

import {
  FiMessageSquare,
  FiImage,
  FiCamera,
  FiPieChart,
  FiClock,
} from "react-icons/fi";

import { MdCake } from "react-icons/md";

import { StyHome, Media } from "./Home_styles";

const Home = () => {
  return (
    <Media>
      <StyHome className="main">
        <aside className="profile">
          <CardProfile />
        </aside>
        <article className="publication">
          <section id="write-post">
            <form method="post">
              <FiMessageSquare color="#353839" size={25} />
              <input
                type="text"
                name="post"
                id="place-to-post"
                placeholder="Escreva uma publicação..."
              />
              <FiImage color="#353839" size={25} />
              <FiCamera color="#353839" size={25} />
            </form>
            <header>
              ou <a href="/">publique um artigo</a> na InCicle.
            </header>
          </section>

          <CardPosting
            name="Patrícia Santos"
            lastHourOnline="há cerca de 8 horas"
            viewers="somente eu"
            commentsQuantity={0}
            sharesQuantity={0}
            contentPost='Essa publicação está configurada no modo privado "somente eu".'
          />
          <CardPosting
            name="Patrícia Santos"
            lastHourOnline="há 8 dias"
            viewers="Público"
            commentsQuantity={0}
            sharesQuantity={0}
            contentPost="kkkikkik"
            quantityLikes={1}
          />
        </article>
        <aside className="scores">
          <section id="eficience">
            <header>
              <FiPieChart color="#17c0c2" size={20} />
              <h1>Eficiência</h1>
            </header>
            <article>
              <div>
                <section>
                  <h2>Atividades</h2>
                  <span>23/106</span>
                </section>
                <aside>50%</aside>
              </div>
              <div>
                <section>
                  <h2>Projetos</h2>
                  <span>23/106</span>
                </section>
                <aside>50%</aside>
              </div>
              <div>
                <section>
                  <h2>Total</h2>
                  <span>23/106</span>
                </section>
                <aside>50%</aside>
              </div>
            </article>
            <footer>
              <div>
                <h3>Atividades</h3>
                <ul>
                  <li>Pendentes 3</li>
                  <li>Pendentes 3</li>
                  <li>Pendentes 3</li>
                </ul>
              </div>
              <div>
                <h3>Projetos</h3>
                <ul>
                  <li>Pendentes 3</li>
                  <li>Pendentes 3</li>
                  <li>Pendentes 3</li>
                </ul>
              </div>
              <div>
                <h3>Total</h3>
                <ul>
                  <li>Pendentes 6</li>
                  <li>Pendentes 6</li>
                  <li>Pendentes 6</li>
                </ul>
              </div>
            </footer>
          </section>
          <section id="birthdays">
            <header>
              <MdCake color="#17c0c2" size={22} />
              <h1>Aniversariantes</h1>
            </header>
            <p>Nenhum dos seus amigos comemora aniversário hoje.</p>
          </section>
          <section id="pendencies">
            <header>
              <FiClock color="#17c0c2" size={22} />
              <h1>Pendências</h1>
            </header>
            <span>Seg, 21 de Jun</span>
            <p>Você não possui nunhum pendência para hoje.</p>
          </section>
        </aside>
      </StyHome>
    </Media>
  );
};

export default Home;
