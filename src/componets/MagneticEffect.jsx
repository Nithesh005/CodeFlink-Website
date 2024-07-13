// src/MagneticEffect.js
import { useRef, useEffect } from 'react';
// import './MagneticEffect.css';

const MagneticEffect = ({ src, alt, width }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const imgX = rect.left + rect.width / 2;
        const imgY = rect.top + rect.height / 2;
        const diffX = mouseX - imgX;
        const diffY = mouseY - imgY;
        const dist = Math.sqrt(diffX * diffX + diffY * diffY);
        const maxDist = 5; // Maximum distance for the effect
        const force = Math.min(maxDist / dist, 1);

        imgRef.current.style.transform = `translate(${diffX * force}px, ${diffY * force}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = 'translate(0, 0)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="magnetic-container">
      <img ref={imgRef} src={src} alt={alt} width={width} />
    </div>
  );
};

export default MagneticEffect;
