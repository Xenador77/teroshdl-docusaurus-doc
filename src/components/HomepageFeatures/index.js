import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open-source.svg').default,
    description: (
      <>
       The TerosHDL IDE, and all source code is available on GitHub, licensed under the GPLv3
      </>
    ),
  },
  {
    title: 'Supports multiple vendors, frameworks, and toolchains',
    Svg: require('@site/static/img/banner.svg').default,
    description: (
      <>
        Integrations can be accessed via GUI after a brief initial setup/configuration 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
