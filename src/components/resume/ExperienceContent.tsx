import styles from './ExperienceContent.module.scss';
import classNames from 'classnames/bind';
import {Experience} from '@/payload/types';

const cx = classNames.bind(styles);

const ExperienceContent = ({experiences}: { experiences: Experience[] }) => {
  const experienceStartDate = "2022-12-19";
  const start = new Date(experienceStartDate);
  const now = new Date();

  let careerInMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());

// 일까지 비교해서 더 정확하게 하고 싶다면:
  if (now.getDate() < start.getDate()) {
    // 이번 달이 아직 덜 찼으면 -1
    careerInMonths--;
  }
  const years = Math.floor(careerInMonths / 12);
  const months = careerInMonths % 12;

  return (
      <div className={cx('experience-container')}>
        <div className={cx('main-item')}>
          <div className={cx('main-title')}>
            <p>Experience</p>
          </div>
          <span className={cx('tag')}>총 경력: {years}년 {months}개월</span>
        </div>
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
