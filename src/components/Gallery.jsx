import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FilterGallery = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [activeButton, setActiveButton] = useState("all");

  // Define your gallery items and their respective tags or categories
  const galleryItems = [
    {
      src: "https://picsum.photos/200",
      tags: ["tag1", "tag2"],
    },
    {
      src: "https://picsum.photos/200",
      tags: ["tag2", "tag3"],
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
      <div className="gap-12 flex justify-center mb-10">
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
            <GalleryItem item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default FilterGallery;

const GalleryItem = ({ item }) => {
  return (
    <div className="basis-1/4 p-2 box-border">
      <img className="w-100 rounded w-full h-auto" src={item.src} alt="" />
    </div>
  );
};
