'use client';

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateQuestion = () => {
  const router = useRouter();
  const {data: session } =useSession();
const [submitting, setSubmitting] = useState(false);
const [post, setPost] = useState({
  question : '',
  tag: '',
});

const createQuestion = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    const response = await fetch('api/question/new',
    {
      method : 'POST',
      body: JSON.stringify({
        question: post.question,
        userId: session?.user.id,
        tag: post.tag
      })
    })
    if(response.ok) {
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
} 

  return (
    <Form 
    type="Poster"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createQuestion}
    />
  )
}

export default CreateQuestion