import React from 'react';
import clsx from 'clsx';

const ValueList = [
  {
    title: 'Efficient.',
    Svg: require('../../../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        zer jynn we need content :D
      </>
    ),
  },
  {
    title: 'Effective.',
    Svg: require('../../../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        zer jynn we need content :D
      </>
    ),
  },
  {
    title: 'Exemplary.',
    Svg: require('../../../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        zer jynn we need content :D
      </>
    ),
  },
];

function HomeValue({Svg, title, description}) {
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

export default function HomeValues() {
  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <div className="row">
          {ValueList.map((props, idx) => (
            <HomeValue key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
