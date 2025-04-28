import style from './ResumeContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const ResumeContent = () => {

  return (
      <div className={cx('container')}>
        <h1 className={cx('title')}>Resume</h1>
      </div>
  );
};

export default ResumeContent;
