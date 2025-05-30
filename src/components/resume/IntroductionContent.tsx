import style from './IntroductionContent.module.scss';
import classNames from 'classnames/bind';
import {Introduction} from '@/payload/types';

const cx = classNames.bind(style);

const IntroductionContent = ({introduction}: { introduction: Introduction }) => {
  return (
      <div className={cx('introduction-container')}>
        <div className={cx('main-title')}>
          <p>Introduction</p>
        </div>
        <div className={cx('description')}>
          <div className={cx('summary')}>
            <p>{introduction.summary}</p>
          </div>
          {introduction.description.map((block, idx) => (
              <p key={idx}>
                {block.text}
                {block.highlight && <span className={cx('highlight')}>{block.highlight}</span>}
                {block.after}
                {block.highlight2 && <span className={cx('highlight')}>{block.highlight2}</span>}
                {block.after2}
              </p>
          ))}
        </div>
      </div>
  );
};

export default IntroductionContent;
