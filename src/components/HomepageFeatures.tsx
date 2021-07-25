import React from 'react';
import clsx from 'clsx';

const FeatureList = [
  {
    title: 'Efficient.',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        zer jynn we need content :D
      </>
    ),
  },
  {
    title: 'Effective.',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        zer jynn we need content :D
      </>
    ),
  },
  {
    title: 'Exemplary.',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        zer jynn we need content :D
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg style={{ height: 200, width: 200 }} alt={title} />
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
    <section style={{ display: "flex", alignItems: "center", padding: "2rem 0", width: "100%" }}>
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
