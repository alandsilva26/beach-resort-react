import React from "react";
import Title from "../Title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
        },
      ],
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
