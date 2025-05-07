import style from './ProfileContent.module.scss';
import classNames from 'classnames/bind';
import { Profile } from '@/payload/types';
import { FaGithub, FaEnvelope, FaBlog } from 'react-icons/fa';

const cx = classNames.bind(style);

const ProfileContent = ({ profile }: { profile: Profile }) => {
  return (
      <div className={cx('profile-container')}>
        <div className={cx('profile-image')}>
          <img src="/home/profile.png" alt="Profile" className={cx('profile-image')} />
        </div>
        <div className={cx('profile-description')}>
          <h1>{profile.name}</h1>
          <h4>{profile.job}</h4>
          <div className={cx('profile-links')}>
            <p>
              <FaGithub style={{ marginRight: '8px' }} />
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                {profile.contact.github}
              </a>
            </p>
            <p>
              <FaEnvelope style={{ marginRight: '8px' }} />
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            </p>
            <p>
              <FaBlog style={{ marginRight: '8px' }} />
              <a href={profile.contact.blog} target="_blank" rel="noopener noreferrer">
                {profile.contact.blog}
              </a>
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProfileContent;
