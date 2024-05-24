'use client';

import { useEffect, useState, } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

const UpdateQuestion = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const questionId = searchParams.get('id');
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
    question : '',
    tag: '',
  });

  useEffect(() => {
    const getQuestionDetails = async () => {
        const response = await fetch(`/api/question/${questionId}`)
        const data = await response.json();

        setPost({
            question: data.question,
            tag: data.tag,
        })
    }
    if(questionId) getQuestionDetails()
  }, [questionId])
  
  const updateQuestion = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!questionId) return ("Id non trouvé")
  
    try {
      const response = await fetch(`api/question/${questionId}`,
      {
        method : 'PATCH',
        body: JSON.stringify({
          question: post.question,
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
}

  export default UpdateQuestion
