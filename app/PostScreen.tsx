'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/supabase/client';
import '../assets/global.css';
import PostItem from './PostItem';

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

    setPostData(data);
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
          <PostItem
            key={post.date}
            author={post.author}
            date={post.date}
            image_url={post.image_url}
            content={post.content}
            likes={post.likes}
          />
        ))
      )}
    </div>
  );
}
