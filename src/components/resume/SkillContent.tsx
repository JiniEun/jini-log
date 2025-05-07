'use client';

import style from './SkillContent.module.scss';
import classNames from 'classnames/bind';
import {Skills} from '@/payload/types';

const cx = classNames.bind(style);

const SkillSection = ({title, items}: { title: string; items: string[] }) => (
    <div className={cx('skill-section')}>
      <div className={cx('section-title')}>{title}</div>
      <ul className={cx('item-list')}>
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
);

const SkillContent = ({skills}: { skills: Skills }) => {
  return (
      <div className={cx('skill-container')}>
        <h2 className={cx('main-title')}>SKILL</h2>

        <div className={cx('section-summary')}>
          {skills.summary.map((item) => (
              <li key={item}>{item}</li>
          ))}
        </div>

        <SkillSection title="Languages" items={skills.production.languages}/>
        <SkillSection title="Frameworks & Libraries" items={skills.production.frameworks}/>
        <SkillSection title="Infrastructure & Databases" items={skills.production.infrastructure}/>
        <SkillSection title="Tools & IDEs" items={skills.production.tools}/>

      </div>
  );
};

export default SkillContent;
