import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { pageView } from '../core/firebase';


function LandingSEO() {
  useEffect(() => {
    pageView(
      window.location.pathname,
      'P_Landing',
    );
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
