import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
 
export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
    <MagicMotion 
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    >
      <div
        style={{
          backgroundColor: "rgb(6, 6, 111)",
          padding: "1rem",
          borderRadius: 12,
          margin: "1rem 0",
          overflow: "hidden",
        }}
      >
        <button
          style={{
            fontSize: "1.8em",
            fontWeight: 600,
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Who We Are
            <svg
              key="exclude"
              style={{
                transform: `rotate(${isOpen ? 180 : 0}deg)`,
                transition: "320ms ease-in-out",
              }}
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10L15.6714 21L27.5 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </button>
        {isOpen && (
          <div
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
            <div className="text">
            Welcome to GameAddict, your one-stop destination for the latest 
            and greatest in video games! Whether you're a seasoned gamer or 
            just getting started, we’re here to fuel your passion for gaming 
            with an extensive selection of titles across all major platforms.
            </div>
            <div className="text">
            Founded in [Year], our mission is simple: to offer gamers the best 
            experience by providing a wide range of video games, accessories, 
            and consoles at unbeatable prices. From AAA blockbusters to indie 
            gems, we bring you the games that spark joy, excitement, and adventure.
            </div>
            <div className="text">
            At GameAddict, we’re not just about selling games; we’re passionate 
            gamers ourselves. We understand what it means to get lost in the worlds we explore, 
            to chase that next level, and to experience unforgettable moments in gaming. That’s 
            why we pride ourselves on delivering excellent customer service and ensuring you have 
            everything you need to level up your gaming experience.
            </div>
          </div>
        )}
      </div>
    </MagicMotion>
    </div>
  );
}

