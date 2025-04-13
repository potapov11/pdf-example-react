import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';

export function PdfViewer({ pdfUrl }) {
	const handleError = (error) => {
		console.error('PDF error:', error);
		if (error.name === 'InvalidPDFException') {
			alert('Невозможно открыть PDF. Файл повреждён или имеет неправильный формат');
		}
	};

	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
			<div style={{ height: '100vh', position: 'relative' }}>{pdfUrl ? <Viewer fileUrl={pdfUrl} onError={handleError} defaultScale={SpecialZoomLevel.PageFit} /> : <div>PDF не загружен</div>}</div>
		</Worker>
	);
}
