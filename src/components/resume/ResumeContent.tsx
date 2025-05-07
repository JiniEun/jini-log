import style from './ResumeContent.module.scss';
import classNames from 'classnames/bind';
import profile from '@/payload/profile';
import ProfileContent from "@components/resume/ProfileContent";
import SkillContent from "@components/resume/SkillContent";
import { skills } from "@/payload/skills";
import IntroductionContent from "@components/resume/IntroductionContent";
import {introduction} from "@/payload/introduction";
import ExperienceContent from "@components/resume/ExperienceContent";
import {experiences} from "@/payload/experience";

const cx = classNames.bind(style);

const ResumeContent = () => {

  return (
      <div className={cx('container')}>
        <ProfileContent profile={profile}/>
        <IntroductionContent introduction={introduction}/>
        <SkillContent skills={skills}/>
        <ExperienceContent experiences={experiences}/>
      </div>
  );
};

export default ResumeContent;
