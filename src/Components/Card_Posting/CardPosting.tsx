import React, { useState, useEffect } from "react";
import UserPhoto from "../User_Photo/UserPhoto";
import WomanProfile from "../../Assets/woman_photo.jpg";
import {
  FiArrowDown,
  FiLock,
  FiClock,
  FiThumbsUp,
  FiMessageCircle,
  FiShare,
} from "react-icons/fi";

import { Post } from "./StyCardPosting";
import QuantityLikes from "../Quantity Likes/QuantityLikes";

interface CreatePost {
  name: string;
  lastHourOnline: string;
  viewers: string;
  commentsQuantity: number;
  sharesQuantity: number;
  contentPost: string;
  quantityLikes?: number;
}

const CardPosting = ({
  name,
  lastHourOnline,
  viewers,
  commentsQuantity,
  sharesQuantity,
  quantityLikes,
  contentPost,
}: CreatePost) => {
  const [quantityLike, setQuantityLike] = useState(quantityLikes || 0);
  const [liked, setLiked] = useState(false);
  const [colorLike, setColorLike] = useState("#050607");

  useEffect(() => {
    if (liked) {
      setColorLike("#17c0c2");
    } else {
      setColorLike("#050607");
    }
  }, [liked]);

  function like() {
    setLiked(!liked);
    !liked && setQuantityLike(quantityLike + 1);
    liked && quantityLike > 0 && setQuantityLike(quantityLike - 1);
  }
  return (
    <Post>
      <header>
        <div className="content">
          <UserPhoto
            src={WomanProfile}
            sizeImage={40}
            alt="Posting on Feed page of a followed profile"
          />
          <div className="personData">
            <h3>{name}</h3>
            <section>
              <span>
                <FiClock color="#353839" size={15} />
                {lastHourOnline}
              </span>
              <span>
                <FiLock color="#353839" size={15} />
                {viewers}
              </span>
            </section>
          </div>
        </div>
        <FiArrowDown color="#050607" size={20} />
      </header>
      <article>
        <blockquote>{contentPost}</blockquote>
      </article>
      <aside>
        <QuantityLikes quantityLikes={quantityLike || 0} />
        <div>
          <span>{commentsQuantity} Comentários</span>
          <span>{sharesQuantity} Compartilhamentos</span>
        </div>
      </aside>
      <footer>
        <div onClick={() => like()}>
          <FiThumbsUp color={colorLike} size={20} /> Curtir
        </div>
        <div>
          <FiMessageCircle color="#363636" size={20} /> Comentários
        </div>
        <div>
          <FiShare color="#363636" size={20} /> Compartilhar
        </div>
      </footer>
    </Post>
  );
};

export default CardPosting;
