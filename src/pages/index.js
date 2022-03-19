import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: 'Actual',
    description: <>139 layer in the API scheme</>,
  },
  {
    title: 'Fast',
    description: (
      <>
        For the Node.js, it uses the TCP and crypto module. For the browser, it
        uses WebSocket and window.crypto.
      </>
    ),
  },
  {
    title: 'Easy',
    description: <>Cryptography is hidden. Work with the API at a high level</>,
  },
  {
    title: 'Smart',
    description: <>Automatically sync authorization on all DCs</>,
  },
  {
    title: '2FA support',
    description: (
      <>Use the library's built-in function to calculate 2FA parameters</>
    ),
  },
  {
    title: 'Secure',
    description: <>Complies with Telegram security guidelines</>,
  },
];

function Home() {
  const context = useDocusaurusContext();

  const { siteConfig = {} } = context;

  return (
    <Layout title="Telegram API JS" description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className={clsx('container', styles.hero__inner)}>
          <h1 className={styles.hero__title}>{siteConfig.title}</h1>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          <div className={styles.hero__actions}>
            <div className={styles.hero__action}>
              <Link className="button button--primary" to={useBaseUrl('docs/')}>
                Get Started
              </Link>
            </div>
            <div className={styles.hero__action}>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=alik0211&amp;repo=mtproto-core&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <div className={clsx('col col--4', styles.feature)} key={idx}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
