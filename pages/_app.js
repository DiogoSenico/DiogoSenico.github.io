import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import '../styles/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        charSet="utf-8"
        meta={[
          {
            name: 'description',
            content: `
              I'm Diogo Sénico, a Software Engineering Student in the Polytechnic Institute of Setúbal. 
              Welcome to my personal website, where I'll try to show you a little bit about myself and the projects that I do.
            `,
          },
          {
            property: 'og:title',
            content: 'Diogo Sénico Personal Portfólio',
          },
          {
            property: 'og:description',
            content: `
              I'm Diogo Sénico, a Software Engineering Student in the Polytechnic Institute of Setúbal. 
              Welcome to my personal website, where I'll try to show you a little bit about myself and the projects that I do.
            `,
          },
          {
            property: 'og:image',
            content: 'https://via.placeholder.com/150',
          },
          {
            property: 'og:url',
            content: 'https://DiogoSenico.github.com/',
          },
          {
            property: 'og:site_name',
            content: 'Diogo Sénico Personal Portfólio',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
        title="Diogo Sénico Personal Portfólio"
        titleTemplate="Portfólio"
      >
        <link rel="canonical" href="https://DiogoSenico.github.com/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
