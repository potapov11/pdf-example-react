// src/App.jsx

import GooglePdfViewer from './Pdf.jsx';

// Убедитесь, что файл resume.pdf находится в public/assets/
// const pdfUrl = '/assets/resume.pdf';
const pdfUrl = 'https://www.pdf995.com/samples/pdf.pdf';

function App() {
	return (
		<>
			<h1>Vite + React</h1>
			<GooglePdfViewer pdfUrl={pdfUrl} />
		</>
	);
}

export default App;
