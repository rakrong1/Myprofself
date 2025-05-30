import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);
library.add(far);

const PublicationCard = ({ publication, onDownload }) => {
  return (
    <motion.div
      className="glass-card pub-card"
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      data-category={publication.category}
    >
      <div className="pub-img">
        <img src={publication.image} alt={publication.title} />
      </div>
      <div className="pub-info">
        <span className="pub-category">{publication.type}</span>
        <h3 className="pub-title">{publication.title}</h3>
        <div className="pub-meta">
          <span>
            <FontAwesomeIcon icon={["far", "calendar"]} /> {publication.year}
          </span>
          <span>
            <FontAwesomeIcon icon={["fas", "book-open"]} /> {publication.source}
          </span>
        </div>
        <p className="pub-abstract">{publication.abstract}</p>
        <div className="pub-actions">
          <button
            className="download-btn"
            onClick={() => onDownload(publication.file)}
          >
            Download
          </button>
        </div>
      </div>
    </motion.div>
  );
};
<FontAwesomeIcon icon={["far", "calendar"]} />;
export default PublicationCard;
