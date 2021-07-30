import React from "react";
import UserPhoto from "../User_Photo/UserPhoto";
import { StyCardProfile, SecondCard, Info } from "./styCardProfile";
import { IoLocationOutline, IoSchool, IoCodeWorking } from "react-icons/io5";

import Profile from "../../Assets/card-profile.jpg";

const CardProfile = () => {
  return (
    <StyCardProfile>
      <SecondCard>
        <UserPhoto
          className="photo"
          sizeImage={110}
          alt="Profile photo"
          src={Profile}
        />
        <h2>Kenedy Morais</h2>
        <h3>@kenedymorais</h3>
        <span>Front-end Developer</span>
        <footer>
          <Info>
            <IoLocationOutline color="#17c0c2" size={20} />
            <p>Rio Branco/Acre - Brasil</p>
          </Info>
          <Info>
            <IoCodeWorking color="#17c0c2" size={20} />
            <p>InCicle</p>
          </Info>
          <Info>
            <IoSchool color="#17c0c2" size={20} />
            <p>Uninorte</p>
          </Info>
        </footer>
      </SecondCard>
    </StyCardProfile>
  );
};

export default CardProfile;
