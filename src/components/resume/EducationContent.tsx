import style from './EducationContent.module.scss';
import classNames from 'classnames/bind';
import {Education} from '@/payload/types';

const cx = classNames.bind(style);

const EducationContent = ({education}: { education: Education[] }) => {
  return (
      <div className={cx('education-container')}>
        <div className={cx('main-title')}>
          <p>Education</p>
        </div>
        <div className={cx('education-list')}>
          {education.map((edu, idx) => (
              <div key={idx} className={cx('education-item')}>
                <div className={cx('education-header')}>
                  <p className={cx('duration')}>{edu.duration}</p>
                </div>
                <div className={cx('education-description')}>
                  <h3 className={cx('title')}>{edu.edu}</h3>
                  {edu.summary && <p className={cx('summary')}>{edu.summary}</p>}
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default EducationContent;
