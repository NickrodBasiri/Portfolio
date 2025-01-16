import "../styles/project.css";
import { useEffect, useRef } from "react";

export default function Project({
  title,
  image,
  description,
  tech,
  github,
  winner,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (cards) => {
        cards.forEach((card) => {
          if (card.isIntersecting) {
            card.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <>
      <div
        id="project-card"
        ref={cardRef}
        className="gap-4 grid lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] opacity-0 pb-8 transform transition-opacity translate-y-5 duration-700"
      >
        <div
          id="project-title"
          className="flex justify-between lg:col-start-1 lg:row-start-1 p-3 text-3xl project-box"
        >
          <h1 className="pl-4 font-bold">{title}</h1>
          <div className="flex">
            {winner && (
              <div
                className="flex justify-center items-center bg-yellow-500 mr-4 px-3 rounded-lg"
                style={{ whiteSpace: "nowrap" }}
              >
                <h1 className="m-0 text-2xl text-center">Winner</h1>
              </div>
            )}
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fa-arrow-up-right-from-square pr-2 text-2xl fa-solid" />
            </a>
          </div>
        </div>
        <img
          id="project-image"
          src={image}
          alt={`${title} screenshot`}
          className="lg:col-start-1 lg:row-span-2 lg:row-start-2 rounded-lg"
        />
        <div
          id="project-description"
          className="flex justify-center items-center lg:col-start-2 lg:row-span-2 lg:row-start-1 p-4 project-box"
        >
          <h1 className="pr-4 pl-4">{description}</h1>
        </div>
        <div
          id="project-tech"
          className="flex flex-row flex-wrap justify-evenly gap-4 lg:col-start-2 lg:row-start-3 p-3 project-box"
        >
          {tech.map((item, index) => (
            <div
              key={index}
              id="tech-name"
              className="border-2 border-gray-300 rounded-lg text-white"
            >
              <p className="p-1 text-[0.9rem]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
