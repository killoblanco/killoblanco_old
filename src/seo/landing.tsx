import { useEffect } from 'react';
import { pageview as gaPageView } from 'react-ga';
import { Helmet } from 'react-helmet';

function LandingSEO() {
  useEffect(() => {
    gaPageView(window.location.pathname);
  }, []);

  return (
    <Helmet>
      <meta
        name="description"
        content="Hola, soy Kamilo Vasquez, desarrollador de software desde mediados de 2010. Apasionado por crear soluciones de software que tengan un impacto en la vida de las personas."
      />
    </Helmet>
  );
}

export default LandingSEO;
