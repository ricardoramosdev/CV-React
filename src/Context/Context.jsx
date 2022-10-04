import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const Context = ({ children }) => {
  // const [portfolio, setPortfolio] = useState();
  // const [favorites, setFavorites] = useState();
  let works = [
    {
      id: "01",
      name: "OnTheRocks",
      description:
        "This page was made as a practice project to apply knowledge of HTML CSS and bootstrap. It is a static page that provides information on cocktails.",
      img: "/assets/img/works-preview/OnTheRocks.jpg",
      tech: ["HTML", "CSS", "BOOSTRAP"],
      URL: "https://ontherocks2.netlify.app/",
      favorite: false,
    },
    {
      id: "02",
      name: "Cinefilos",
      description:
        "Cinefilos is a CRUD made of pure javascript. It also have functions for users registration, login and admin-role verification",
      img: "/assets/img/works-preview/Cinefilos.jpg",
      tech: ["HTML", "CSS", "BOOSTRAP", "JS", "GITHUB"],
      URL: "https://cinefilos1.netlify.app/",
      favorite: true,
    },
    {
      id: "03",
      name: "BigBurger",
      description:
        "Big burger is the e-commerce app to make your burger order. You can add to cart, view your cart, remove items and much more. Big burger also have an Administration panel linked to a database to manage products, users and orders status.",
      img: "/assets/img/works-preview/BigBurger.jpg",
      tech: ["REACTJS", "HTML", "CSS", "ANTD", "MONGODB", "NODEJS", "JWT"],
      URL: "https://bigburger-front.herokuapp.com/",
      favorite: true,
    },
    {
      id: "04",
      name: "MoviePop",
      description:
        "Mini Project in ReactJS showing information from movies/series.Enter the main screen and when pressing the magnifying glass, it redirects to the list of movies, in which it shows the cover and the title of each of these.Search by title and gender.Selecting an image brings up aditional data.In order to get all the data from the movies, I consumed the data from the API:TV MAZE API",
      img: "/assets/img/works-preview/MoviePop.jpg",
      tech: ["REACTJS", "HTML", "CSS", "ANTD", "MONGODB", "NODEJS"],
      URL: "https://moviepop-front.herokuapp.com/",
      favorite: true,
    },
  ];
  const favorites = works.filter((el) => el.favorite);
  ;


  const contextData = {
    favorites,
    // portfolio,
    works,
  };
  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};
