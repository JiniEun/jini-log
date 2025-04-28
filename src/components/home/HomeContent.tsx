import style from './HomeContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const HomeContent = () => {

  return (
      <div className={cx('container')}>
        <h1 className={cx('title')}>Hello World!</h1>
        <div className={cx('description')}>This is Jini-log</div>
      </div>
  );
};

export default HomeContent;
