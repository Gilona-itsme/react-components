import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.scss';

const randomColor = function randomColor() {
  return `#${((Math.random() * 0x1000000) | 0x1000000).toString(16).substr(1)}`;
};

const StatsItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <ul className={s.statlist}>
      {items.map(item => (
        <StatsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
};

const Statistics = ({ title = 'upload stats', items }) => {
  return (
    <section className={s.statistics}>
      {title.length > 0 && <h2 className={s.title}>{title}</h2>}
      <StatsList items={items} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};
// Statistics.defaultProps = {
//   title: '',
// };

export default Statistics;
