'use client';

import { useEffect, useState } from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuCircle as ProfileIcon } from 'react-icons/lu';
import { supabase } from '@/supabase/client';
import styles from './styles.module.css';
import '../assets/global.css';

interface Post {
  author: string;
  date: string;
  image_url: string;
  content: string;
  likes: number;
}

export default function PostComponent() {
  // Define a state variable to store the fetched data
  const [postData, setPostData] = useState<Post[]>([]);

  async function fetchPostData() {
    // TODO: Fetch data using the supabase client
    const response = await supabase.from('posts').select('*');
    const { data, error } = response;
    if (error) {
      throw error;
    }
    const formattedData: Post[] = data.map(post => ({
      author: post.author,
      date: post.date,
      image_url: post.image_url,
      content: post.content,
      likes: post.likes,
    }));

    setPostData(formattedData);
  }

  // useEffect with an empty dependency array runs only once after the component is first rendered
  useEffect(() => {
    // Inside useEffect, you can perform side effects, like fetching data
    // Here, we fetch some data from an API
    fetchPostData();
  }, []); // Empty dependency array means this effect runs only once

  // Render the fetched data
  return (
    <div>
      {postData == null ? (
        <p>Loading...</p>
      ) : (
        postData.map(post => (
          <main key={post.date} className={styles.main}>
            <div className={styles.content}>
              <div className={styles.userDateHeader}>
                <ProfileIcon size={24} />
                <p className={styles.username}>{post.author}</p>
                <p className={styles.date}>{post.date}</p>
              </div>
              <div className={styles.postContent}>
                <p>{post.content}</p>
              </div>

              <img src={post.image_url} className={styles.postImage} />

              <div className={styles.likesShareFooter}>
                <HeartIcon size={24} />
                {post.likes}
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
                    This organization is doing amazing work tackling the complex
                    root causes of the issue.
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
        ))
      )}
    </div>
  );
}
