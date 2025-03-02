
Doc Viewer - Next.js App

This is a Next.js project that allows users to *view DOCX/PDF files* stored in the `public/docs/` directory. Users can select a document from a list, and it will be displayed in an embedded viewer.

Clone the Repository
using git clone link


cd docx-viewer

npm install


npm run dev

Now open http://localhost:3000 to see app.

Research & Development (R&D) on DOCX Viewing in Next.js

Not Use react-doc-viewer(dependancy) ?
react-doc-viewer does not support Next.js properly due to server-side rendering (SSR) conflicts.
It depends on browser-based Blob handling.


Not Use mammoth.js?
mammoth.js can convert .docx to HTML, but it only extracts plain text.
It does not support images, styles or complex formatting in .docx files.


Use <iframe> ?
The simplest and most compatible solution to display PDFs and DOCX files.
Works with Google Docs Viewer for better rendering.

UI app--

![image](https://github.com/user-attachments/assets/146ff8a8-6ac0-4349-978b-f9a506a175fa)
![image](https://github.com/user-attachments/assets/5014ee76-71f5-41ca-b09b-9f0608849a99)









