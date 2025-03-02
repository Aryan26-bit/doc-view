import React from 'react';
import { useState, useCallback, useRef, useEffect } from "react";
import { renderAsync } from "docx-preview";

const documents = [
  { url: "/docs/doc_1.docx", name: "FIRST DOC" },
  { url: "/docs/doc_2.docx", name: "SECOND DOC" },
  { url: "/docs/doc_3.docx", name: "THIRD DOC" },
];

const DocViewer = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const docViewerRef = useRef(null);

  const handleSelectDoc = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      setSelectedDoc(arrayBuffer);
    } catch (error) {
      console.error("Error loading doc", error);
      alert("No preview available");
    }
  }, []);

  useEffect(() => {
    if (selectedDoc && docViewerRef.current) {
      renderAsync(selectedDoc, docViewerRef.current)
        .then(() => console.log("Document rendered."))
        .catch((error) => console.error("Error rendering in doc", error));
    }
  }, [selectedDoc]);

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

          <div
            ref={docViewerRef}
            style={{
              width: "100%",
              height: "600px",
              border: "1px solid #ccc",
              overflowY: "auto",
              padding: "10px",
              backgroundColor: "#fff",
            }}
          />
        </>
      )}
    </div>
  );
};

export default DocViewer;
