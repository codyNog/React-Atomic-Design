import React from "react";
import HomeTemplate from "../../templates/home/HomeTemplate";
import PostsData from "../../../store/postsContainer";

const HomePage: React.FC = () => {
  return (
    <PostsData.Provider>
      <HomeTemplate />
    </PostsData.Provider>
  );
};

export default HomePage;
