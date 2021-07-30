import React, { ImgHTMLAttributes } from "react";

import { PhotoUser } from "./styUserPhoto";

interface UserImg extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  sizeImage: number;
}

const UserPhoto = ({ sizeImage, alt, ...props }: UserImg) => {
  return (
    <PhotoUser sizeImage={sizeImage}>
      <img {...props} alt={alt} />
    </PhotoUser>
  );
};
export default UserPhoto;
