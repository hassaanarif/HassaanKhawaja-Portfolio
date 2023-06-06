import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
	src: string;
	alt: string;
}

function LazyImage({ src, alt }: LazyImageProps) {
	const [imageSrc, setImageSrc] = useState<string>();
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		let observer: IntersectionObserver | undefined;

		const handleObserver: IntersectionObserverCallback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setImageSrc(src);
					observer.unobserve(entry.target);
				}
			});
		};

		if (imageRef.current) {
			observer = new IntersectionObserver(handleObserver, {
				rootMargin: "500px", // To trigger the callback earlier meaning image will load before the image is visible on screen
				root: null,
				threshold: 0.1,
			});

			observer.observe(imageRef.current);
		}

		return () => {
			if (observer && imageRef.current) {
				observer.unobserve(imageRef.current);
			}
		};
	}, [src]);

	return <img ref={imageRef} src={imageSrc} alt={alt} className="rounded-md border-4 border-orange-600" />;
}

export default LazyImage;
