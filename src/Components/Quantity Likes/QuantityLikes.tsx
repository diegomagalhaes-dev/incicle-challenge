import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { Like } from "./StyQuantityLikes";

interface QtdLikes {
  quantityLikes: number;
}

const QuantityLikes = ({ quantityLikes }: QtdLikes) => {
  if (quantityLikes === 0) {
    return (
      <Like>
        <div>
          <FiThumbsUp style={{ marginRight: "5px" }} color="#000" size={20} />
          <p>Seja primeiro a curtir</p>
        </div>
      </Like>
    );
  } else if (quantityLikes > 1) {
    return (
      <Like>
        <div>
          <FiThumbsUp style={{ marginRight: "5px" }} color="#000" size={20} />
          <p>{quantityLikes} Pessoas curtiram isso</p>;
        </div>
      </Like>
    );
  }
  return (
    <Like>
      <div>
        <FiThumbsUp style={{ marginRight: "5px" }} color="#000" size={20} />
        <p>{quantityLikes} Pessoa curtiu isso</p>;
      </div>
    </Like>
  );
};

export default QuantityLikes;
