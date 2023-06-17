import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AiOutlineExpand } from "react-icons/ai";

const FilterGallery = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [activeButton, setActiveButton] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Define your gallery items and their respective tags or categories
  const galleryItems = [
    {
      src: "https://picsum.photos/200",
      tags: ["tag1", "tag2"],
      popup_title: "sd",
      popup_description: "",
      hover_titile: "Rosen Banas",
      hover_description:
        "Promote your blog posts, case udie, and thehe branded videa",
    },
    {
      src: "https://picsum.photos/200",
      tags: ["tag2", "tag3"],
      hovertitile: "seddd",
    },
    {
      src: "https://picsum.photos/200",
      tags: ["tag1"],
    },
    {
      src: "https://picsum.photos/200",
      tags: ["tag2"],
    },
    {
      src: "https://picsum.photos/200",
      tags: ["tag3"],
    },
    {
      src: "https://picsum.photos/200",
      tags: ["tag2", "tag3"],
    },
    // Add more gallery items here
  ];

  // Filter the gallery items based on the current filter
  const filteredItems =
    currentFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.tags.includes(currentFilter));

  // Handle filter change
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setActiveButton(filter);
  };

  return (
    <div>
      {/* Render your filter buttons */}
      <div className="gap-12 flex justify-center text-sm mb-10">
        <button
          className={activeButton === "all" ? "text-primary" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={activeButton === "tag1" ? "text-primary" : ""}
          onClick={() => handleFilterChange("tag1")}
        >
          Tag 1
        </button>
        <button
          className={activeButton === "tag2" ? "text-primary" : ""}
          onClick={() => handleFilterChange("tag2")}
        >
          Tag 2
        </button>
        <button
          className={activeButton === "tag3" ? "text-primary" : ""}
          onClick={() => handleFilterChange("tag3")}
        >
          Tag 3
        </button>
      </div>

      {/* Render the gallery */}
      <TransitionGroup className="grid grid-cols-3 flex-wrap">
        {filteredItems.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <GalleryItem
              item={item}
              onReadMore={(selectedItem) => setSelectedItem(selectedItem)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {selectedItem && (
        <Popup item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default FilterGallery;

const GalleryItem = ({ item, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="basis-1/4 p-2 box-border">
      <a className="cursor-pointer" onClick={() => onReadMore(item)}>
        <div
          className="gallery-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className="w-100 rounded w-full h-auto" src={item.src} alt="" />
          <div className="hovered-content items-center content-center relative">
            <AiOutlineExpand className="text-3xl mb-5" />
            <div className=" absolute bottom-10">
              <p className="text-center text-2xl font-semibold">
                {item.hover_titile}
              </p>
              <p className="text-center text-sm max-w-[16rem]">
                {item.hover_description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Popup = ({ item, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content text-primary aspect-square">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{item.popup_title}</h2>
        <p>{item.popup_description}</p>
      </div>
    </div>
  );
};
