import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

interface PostProps {
  author: string;
  date: string;
  image_url: string;
  content: string;
  likes: number;
}

export default function PostItem({
  author,
  date,
  image_url,
  content,
  likes,
}: PostProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.postHeader}>
          <div className={styles.usernameGroup}>
            <ProfileIcon size={24} />
            <p className={styles.username}>{author}</p>
          </div>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <div className={styles.postContent}>
          <p>{content}</p>
        </div>

        <img
          src={image_url}
          alt={`Image posted by ${author}`}
          className={styles.postImage}
        />

        <div className={styles.postFooter}>
          <div className={styles.likesContainer}>
            <HeartIcon size={24} />
            <p>{likes}</p>
          </div>
          <ShareIcon size={24} />
        </div>
        <hr className={styles.separator} />
      </div>
    </main>
  );
}
