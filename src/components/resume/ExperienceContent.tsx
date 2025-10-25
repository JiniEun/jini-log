'use client';

import {useEffect, useState} from 'react';
import styles from './ExperienceContent.module.scss';
import classNames from 'classnames/bind';
import {Experience} from '@/payload/types';

const cx = classNames.bind(styles);

// --- 날짜 유틸: KST(UTC+9) 기준으로 날짜 비교되게 정규화 ---
function toKSTDateOnly(d: Date) {
  // KST는 서머타임 없음 +9h 고정
  const t = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  // 연/월/일만 유지한 로컬 Date 객체로 변환
  return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
}

function calcCareerKST(startISO: string, now: Date = new Date()) {
  const start = toKSTDateOnly(new Date(startISO));
  const cur = toKSTDateOnly(now);

  let months =
      (cur.getFullYear() - start.getFullYear()) * 12 +
      (cur.getMonth() - start.getMonth());

  if (cur.getDate() < start.getDate()) months--;

  // 음수 방지 (미래 시작일 등 엣지케이스)
  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const restMonths = months % 12;

  return { years, months: restMonths, totalMonths: months };
}

const EXPERIENCE_START_ISO = '2022-12-19';

const ExperienceContent = ({experiences}: { experiences: Experience[] }) => {
  // 총 경력은 SSR 시점이 아니라, 클라이언트 마운트 후 계산해서 hydration mismatch 방지
  const [career, setCareer] = useState<{years: number; months: number} | null>(null);

  useEffect(() => {
    setCareer(calcCareerKST(EXPERIENCE_START_ISO));
  }, []);

  // (권장) key를 index 대신 조합키로
  const keyOf = (exp: Experience, idx: number) =>
      `${exp.company ?? 'unknown'}-${exp.position ?? 'na'}-${idx}`;

  return (
      <div className={cx('experience-container')}>
        <div className={cx('main-item')}>
          <div className={cx('main-title')}>
            <p>Experience</p>
          </div>
          {/* 마운트 전에는 표시 지연(깜빡임/불일치 방지) */}
          <div className={cx('sub-title')}>
            {career ? (
                <span className={cx('tag')}>총 경력: {career.years}년 {career.months}개월</span>
            ) : (
                <span className={cx('tag')} aria-hidden>총 경력 계산중...</span>
            )}
          </div>
        </div>
        <p className={cx('star-hint')}>
          <small>
            <span className={cx('s')}>S</span>(문제),
            <span className={cx('t')}> T</span>(과제),
            <span className={cx('a')}> A</span>(행동),
            <span className={cx('r')}> R</span>(결과)
          </small>
        </p>
        {experiences.map((exp, idx) => (
            <div key={keyOf(exp, idx)} className={cx('experience-item')}>
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
                  {exp.projects?.map((proj, pIdx) => {

                    return (
                        <div key={`${proj.title}-${pIdx}`} className={cx('project-item')}>
                          <h4 className={cx('project-title')}>{proj.title}</h4>
                          <p className={cx('project-date')}>
                            {`${proj.startDate ?? ''} ~ ${proj.endDate ?? '진행 중'}`}
                          </p>

                          {!!proj.techStack?.length && (
                              <div className={cx('tech-stack')}>
                                <span>기술 스택:</span> {proj.techStack.join(', ')}
                              </div>
                          )}

                          <ul className={cx('project-description')}>
                            {proj.description?.map((desc, dIdx) => (
                                <li key={dIdx}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

export default ExperienceContent;
