import React from 'react';
import clsx from 'clsx';
import style from "./style.module.css";

const ValueList = [
  {
    title: 'Efficient.',
    Svg: require('../../../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Effective.',
    Svg: require('../../../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Exemplary.',
    Svg: require('../../../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function HomeValue({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={style.img} alt={title} />
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
          {ValueList.map((props, i) => (
            <HomeValue key={i} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
