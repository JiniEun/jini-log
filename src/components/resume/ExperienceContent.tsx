import styles from './ExperienceContent.module.scss';
import classNames from 'classnames/bind';
import {Experience} from '@/payload/types';

const cx = classNames.bind(styles);

const ExperienceContent = ({experiences}: { experiences: Experience[] }) => {
  return (
      <div className={cx('experience-container')}>
        <h2 className={cx('main-title')}>Experience</h2>
        {experiences.map((exp, idx) => (
            <div key={idx} className={cx('experience-item')}>
              <div className={cx('experience-header')}>
                <h3 className={cx('company')}>{exp.company}</h3>
                <p className={cx('company-summary')}>{exp.companySummary}</p>
                <p className={cx('position')}>{exp.position}</p>
                <p className={cx('company-duration')}>{exp.duration}</p>
                {/*{exp.location && <p className={cx('location')}>{exp.location}</p>}*/}
              </div>

              <div className={cx('experience-description')}>
                <ul className={cx('description-list')}>
                  {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className={cx('description')}>{desc}</li>
                  ))}
                </ul>
                <div className={cx('project-list')}>
                  <div>
                    <span className={cx('project-list-title')}>Projects</span>
                  </div>
                  {exp.projects.map((proj, pIdx) => (
                      <div key={pIdx} className={cx('project-item')}>
                        <h4 className={cx('project-title')}>{proj.title}</h4>
                        <p className={cx('project-date')}>
                          {proj.startDate} ~ {proj.endDate ?? '진행 중'}
                        </p>

                        {proj.techStack && proj.techStack.length > 0 && (
                            <div className={cx('tech-stack')}>
                              <span>기술 스택:</span> {proj.techStack.join(', ')}
                            </div>
                        )}

                        <ul className={cx('project-description')}>
                          {proj.description.map((desc, dIdx) => (
                              <li key={dIdx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                  ))}
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

export default ExperienceContent;
