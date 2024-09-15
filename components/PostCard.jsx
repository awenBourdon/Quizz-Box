"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PostCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
const [copied, setCopied] = useState("");
const {data: session } = useSession();
const pathName = usePathname();
const router = useRouter();

if (!post || !post.creator) {
<<<<<<< HEAD
  return
=======
return
>>>>>>> 68d89d02d545506eec041d4f1bb4215bbcf99778
}

const handleCopy = () => {setCopied(post.question);
  navigator.clipboard.writeText(post.question);
  setTimeout(() => setCopied(""),3000);
}
  
  return (
    <div className="question_card" >
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt=""
            width={60}
            height={60}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-rubik text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>

        </div>
        
        <div 
        className="copy_btn"
        onClick={handleCopy}>
          <Image
          src={copied===post.question
            ?"assets/icons/tick.svg"
            :"assets/icons/copy.svg" 
          }
          width={20}
          height={20}           
          />
        </div>

      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        #{post.question}
      </p>
      <p 
      className="font-rubik text-sm blue_gradient cursor-pointer"
      onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}</p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
      <div className="mt-5 flex-center gap-4 border-t border-gray100 pt-3">
        <p className="font-rubik text-sm blue_gradient cursor-pointer"
           onClick={handleEdit}>
          Modifier
        </p>
        <p className="font-rubik text-sm  cursor-pointer"
           onClick={handleDelete}>
          Supprimer
        </p>
      </div>
      )}
        
    </div>
  )
}

export default PostCard
