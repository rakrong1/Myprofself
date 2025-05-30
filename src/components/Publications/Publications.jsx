import { useState } from "react";
import { motion } from "framer-motion";
import PublicationCard from "./PublicationCard";
import "./Publications.css";

const Publications = ({ activeFilter, setActiveFilter }) => {
  const publicationTypes = [
    { id: "all", label: "All" },
    { id: "React", label: "React" },
    { id: "JavaScript", label: "JavaScript" },
    { id: "TypeScript", label: "TypeScript" },
    { id: "Node.js", label: "Node.js" },
    { id: "HTML5&CSS3", label: "HTML5 & CSS3" },
    { id: "Express.js", label: "Express.js" },
    { id: "REST APIs", label: "REST APIs" },
    { id: "GraphQL", label: "GraphQL" },
    { id: "PostgreSQL", label: "PostgreSQL" },
    { id: "MongoDB", label: "MongoDB" },
  ];

  const publications = [
    {
      id: 1,
      //title: "[Title of Your Journal Publication]",
      type: "React",
      category: "React",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "My preferred frontend library. I’ve built dynamic interfaces using hooks, context, and component-based architecture, with attention to performance and maintainability.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 2,
      //title: "[Title of Your Journal Publication]",
      type: "JavaScript",
      category: "JavaScript",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "Strong command of JavaScript, both in the browser and on the server. Comfortable with ES6+ features and functional programming patterns.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 3,
      //title: "[Title of Your Journal Publication]",
      type: "TypeScript",
      category: "TypeScript",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "Regularly use TypeScript to bring type safety and better tooling to JavaScript projects, especially in large-scale React or Node codebases.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 4,
      // title: "[Title of Your Journal Publication]",
      type: "HTML5 & CSS3",
      category: "HTML5&CSS3",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "Solid foundation in creating responsive and accessible UIs. I use modern layout techniques (Flexbox, Grid) and semantic HTML for clean structure.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 5,
      // title: "[Title of Your Journal Publication]",
      type: "Node.js",
      category: "Node.js",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "My main runtime environment for backend development. I’ve used Node for building APIs, real-time features, and background jobs.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 6,
      //title: "[Title of Your Journal Publication]",
      type: "Express.js",
      category: "Express.js",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        " Core part of my backend stack. I use Express to build fast, modular, and secure APIs, often with middleware for authentication, logging, and error handling.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 7,
      //title: "[Title of Your Journal Publication]",
      type: "REST APIs",
      category: "REST APIs",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        " Built and consumed RESTful services across multiple projects. Skilled in structuring endpoints, handling authentication, and ensuring API security and performance.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 8,
      //title: "[Title of Your Journal Publication]",
      type: "GraphQL",
      category: "GraphQL",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "Experienced in designing and consuming GraphQL APIs for cleaner, more efficient data fetching, especially in React applications.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 9,
      //title: "[Title of Your Journal Publication]",
      type: "PostgreSQL",
      category: "PostgreSQL",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        "My go-to for relational data and complex queries. I’ve built normalized schemas, written efficient SQL, and handled migrations in production environments.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    {
      id: 10,
      //title: "[Title of Your Journal Publication]",
      type: "MongoDB",
      category: "MongoDB",
      //year: "2023",
      //source: "Journal of [Your Field]",
      abstract:
        " Used extensively for building flexible, document-based data models in modern applications. I’ve designed and optimized schemas to support performance and scalability.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      file: "/publications/sample1.pdf",
    },
    // Add other publications similarly
  ];

  const handleDownload = (filePath) => {
    try {
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download file.");
    }
  };

  const filteredPublications =
    activeFilter === "all"
      ? publications
      : publications.filter((pub) => pub.category === activeFilter);

  return (
    <section className="publications" id="publications">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>

        <div className="pub-filter">
          {publicationTypes.map((type) => (
            <motion.button
              key={type.id}
              className={`filter-btn ${
                activeFilter === type.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(type.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.label}
            </motion.button>
          ))}
        </div>

        <div className="pub-grid">
          {filteredPublications.map((publication) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              onDownload={handleDownload}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
