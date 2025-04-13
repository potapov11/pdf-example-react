// import React, { useState, useRef, useEffect } from 'react';

// const GooglePdfViewer = ({
// 	pdfUrl,
// 	width = '100%',
// 	height = '100%',
// 	style = {},
// 	className = '',
// 	fallbackMessage = 'Не удалось загрузить PDF. Скачайте файл по ссылке:',
// 	loadingMessage = 'Загрузка PDF...',
// }) => {
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [hasError, setHasError] = useState(false);
// 	const iframeRef = useRef(null);

// 	useEffect(() => {
// 		const iframe = iframeRef.current;
// 		const loadHandler = () => setIsLoading(false);
// 		const errorHandler = () => setHasError(true);

// 		iframe.addEventListener('load', loadHandler);
// 		iframe.addEventListener('error', errorHandler);

// 		return () => {
// 			iframe.removeEventListener('load', loadHandler);
// 			iframe.removeEventListener('error', errorHandler);
// 		};
// 	}, []);

// 	const encodedUrl = encodeURIComponent(pdfUrl);
// 	const viewerUrl = `https://docs.google.com/viewer?url=${encodedUrl}&embedded=true`;

// 	return (
// 		<div
// 			style={{
// 				position: 'relative',
// 				width,
// 				height,
// 				...style,
// 			}}
// 			className={className}>
// 			{isLoading && !hasError && (
// 				<div
// 					style={{
// 						position: 'absolute',
// 						top: 0,
// 						left: 0,
// 						right: 0,
// 						bottom: 0,
// 						display: 'flex',
// 						alignItems: 'center',
// 						justifyContent: 'center',
// 						backgroundColor: '#f5f5f5',
// 					}}>
// 					{loadingMessage}
// 				</div>
// 			)}

// 			{hasError ? (
// 				<div
// 					style={{
// 						padding: '20px',
// 						textAlign: 'center',
// 					}}>
// 					<p>{fallbackMessage}</p>
// 					<a
// 						href={pdfUrl}
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						style={{
// 							color: '#1976d2',
// 							textDecoration: 'underline',
// 						}}>
// 						Скачать PDF
// 					</a>
// 				</div>
// 			) : (
// 				<iframe
// 					ref={iframeRef}
// 					src={viewerUrl}
// 					width="100%"
// 					height="100%"
// 					frameBorder="0"
// 					style={{
// 						border: 'none',
// 						visibility: isLoading ? 'hidden' : 'visible',
// 					}}
// 					title="PDF Viewer"
// 					allow="autoplay"
// 					loading="lazy"
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default GooglePdfViewer;

import React from 'react';

const GooglePdfViewer = ({ pdfUrl, width = '100%', height = '100%', style = {}, className = '' }) => {
	const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

	return (
		<div style={{ width, height, ...style }} className={className}>
			<iframe src={viewerUrl} width="100%" height="100%" frameBorder="0" style={{ border: 'none' }} title="PDF Viewer" allow="autoplay" loading="lazy" />
		</div>
	);
};

export default GooglePdfViewer;
