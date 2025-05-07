// components/CodeBlock.tsx
import style from './CodeBlock.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style);

type Props = {
  code: string;
  filename?: string;
};

const CodeBlock = ({code, filename}: Props) => {
  return (
      <div className={cx('code-block-wrapper')}>
        {filename && <div className={cx('filename')}>{filename}</div>}
        <div className={cx('window-bar')}>
          <div className={cx('dot', 'red')}/>
          <div className={cx('dot', 'yellow')}/>
          <div className={cx('dot', 'green')}/>
        </div>
        <pre className={cx('code')}>
          <code className={"leading-relaxed"}>{code}</code>
        </pre>
      </div>
  );
};

export default CodeBlock;
