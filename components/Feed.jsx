"use client";
import { useState, useEffect } from 'react';
import PostCard from './PostCard';

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 question_layout">
      {data.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/question');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Rechercher"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {isLoading ? (
        <div className="flex justify-center items-center mt-16">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white-900"></div>
        </div>
      ) : (
        <PostCardList
          data={posts}
          handleTagClick={() => {}}
        />
      )}
    </section>
  );
};

export default Feed;
