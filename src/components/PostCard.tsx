"use client";
import { getPosts } from "@/actions/post.action";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

function PostCard({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(post._count.likes);
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes);

  const handleLike = async () => {};
  const handleAddComment = async () => {};
  const handleDelete = async () => {};

  return <div>PostCard</div>;
}

export default PostCard;
