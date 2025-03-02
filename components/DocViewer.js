import { useState, useCallback } from "react";

const documents = [
  { url: "/docs/doc_1.pdf", name: "FIRST DOC" },
  { url: "/docs/doc_2.pdf", name: "SECOND DOC" },
  { url: "/docs/doc_3.pdf", name: "THIRD DOC" },
];

const DocViewer = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleSelectDoc = useCallback((url) => {
    setSelectedDoc(url);
  }, []);

  return (
    <div className="view-document">
      <h2>View Documents</h2>

      {documents.map((doc, index) => (
        <button
          key={index}
          onClick={() => handleSelectDoc(doc.url)}
          className="document-btn"
          aria-label={`View ${doc.name}`}
          title={`View ${doc.name}`}
        >
          {doc.name}{" "}
        </button>
      ))}

      {selectedDoc && (
        <>
          <button onClick={() => setSelectedDoc(null)} className="reset-btn">
            Reset Viewer
          </button>

          <iframe
            src={selectedDoc}
            width="100%"
            height="600px"
            className="selected-doc"
            title="Document Viewer"
            loading="lazy"
            onError={({ target }) => (target.style.display = "none")}
          />
        </>
      )}
    </div>
  );
};

export default DocViewer;
