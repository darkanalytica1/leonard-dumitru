"use client";

import { useState } from "react";

const sources = [
  "/profile.webp",
  "/profile.jpg",
  "/profile.png",
  "/avatar.webp",
  "/avatar.jpg",
  "/avatar.png",
  "/profile-placeholder.svg",
];

export default function ProfileImage() {
  const [index, setIndex] = useState(0);

  return (
    <img
      className="profile-img"
      src={sources[index]}
      alt="Leonard Dumitru profile"
      onError={() => setIndex((current) => Math.min(current + 1, sources.length - 1))}
    />
  );
}
