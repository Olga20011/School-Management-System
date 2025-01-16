import { useEffect } from 'react';

const useExternalScript = (src) => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    // Append the script to the body
        document.body.appendChild(script); 

    // Cleanup function to remove the script when component unmounts
    return () => {
     try {
        document.body.removeChild(script);
     } catch (error) {
        console.log('Error removing script')
     }
     
    };
  }, [src]); // The effect depends on the 'src' (script source)
};

export default useExternalScript;
