"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const myProfile = () => {

const {data: session} = useSession();
const [posts, setPosts] = useState([]);
const router = useRouter();

useEffect(() => {
    const fetchPosts = async (post) => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
  if (session?.user.id)  fetchPosts();
  }, [session?.user.id]);

    const handleEdit = (post) => {
        router.push(`/update-question?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Êtes-vous sûr de vouloir supprimer ?");

      if (hasConfirmed) {
        try {
          await fetch(`/api/question/${post._id.toString()}`,
        { method:"DELETE"});

          const filteredPosts = posts.filter((p) => p._id !== post._id );
          setPosts(filteredPosts);
        } catch (error) {
          console.log(error)
        }
      }
    }

  return (
    <Profile
    name={session?.user.name}
    desc="Bienvenue sur votre espace personnel"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default myProfile