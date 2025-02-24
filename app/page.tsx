import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.userDateHeader}>
          <ProfileIcon size={24} />
          <p className={styles.username}>rbeggs</p>
          <p className={styles.date}>September 19</p>
        </div>
        <div className={styles.postContent}>
          <p>
            In response to the growing homelessness crisis in San Francisco, a
            local nonprofit organization, Code Tenderloin, has launched a
            comprehensive initiative aimed at providing long-term solutions for
            individuals experiencing homelessness. The organization, founded in
            2015, is dedicated to addressing both immediate needs and underlying
            causes of homelessness through a combination of shelter services,
            job training programs, and mental health support. Read more online:
            https://www.codetenderloin.org/
          </p>
        </div>

        <img
          src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
          className={styles.postImage}
        />

        <div className={styles.likesShareFooter}>
          <HeartIcon size={24} />
          <p className={styles.likes}>256 Likes</p>
          <ShareIcon size={24} />
        </div>
        <hr className={styles.separator} />
        <div className={styles.commentContainer}>
          <div className={styles.commentBox}>
            <div className={styles.userDateHeader}>
              <ProfileIcon size={24} />
              <p className={styles.username}>daviddd</p>
              <p className={styles.date}>September 20</p>
            </div>

            <p className={styles.commentContent}>
              This organization is doing amazing work tackling the complex root
              causes of the issue.
            </p>
          </div>
        </div>

        <div className="comment-container">
          <div className="comment-box">
            <div className={styles.userDateHeader}>
              <ProfileIcon size={24} />
              <p className={styles.username}>vppraggie</p>
              <p className={styles.date}>September 21</p>
            </div>
            <p className={styles.commentContent}>Thanks for sharing!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
