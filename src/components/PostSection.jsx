import Avatar from "react-avatar";
import arrow from '../assets/arrow.png';
import React, { useState } from 'react';
import close from '../assets/close.png'; // Ensure this is the correct path
import share from '../assets/share.png';
import comment from '../assets/comment.png';
import paper from '../assets/paper.jpg';

const PostSection = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'John Doe',
      profileImage: '', // You can provide profile image here
      title: 'Movie Night Review',
      content: 'Just watched the latest movie and it was amazing!',
      upvotes: 3100,
      downvotes: 31,
      comments: 30,
      shares: 14,
      category: 'Movie Addict',
      timeAgo: '5d',
      image: paper // Dynamic image URL for each post
    },
    {
      id: 2,
      name: 'Jane Smith',
      profileImage: '', // You can provide profile image here
      title: 'Tech Trends of 2024',
      content: 'The future of technology is looking very bright, here’s why...',
      upvotes: 500,
      downvotes: 15,
      comments: 25,
      shares: 8,
      category: 'Tech Enthusiast',
      timeAgo: '2d',
      image: paper // Dynamic image URL for each post
    }
  ]);

  const handleUpvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.upvotes = post.upvotes + (post.upvoted ? -1 : 1);
        post.upvoted = !post.upvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDownvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.downvotes = post.downvotes + (post.dvoted ? -1 : 1);
        post.dvoted = !post.dvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  

  return (
    <div className="bg-gray-100  m-3 h-fit  border-spacing-1 rounded-lg relative text-gray-600 text-sm z-0">
      {posts.map(post => (
        <div key={post.id} className="card bg-white p-4 mb-3 border rounded-lg shadow-lg relative">
          {/* Header */}
          <div className="flex w-fit">
            <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={post.profileImage} name={post.name} />
            <h1 className="ml-3 mt-0.5 font-semibold">{post.name}</h1>
            <button className="font-semibold ml-2 cursor-pointer relative left-2 text-blue-500 h-6 w-6 hover:underline rounded-full flex items-center justify-center">·Follow</button>

            {/* Close Button */}
            <button className="absolute top-2 right-2 h-6 w-6 hover:bg-gray-200 rounded-full flex items-center justify-center">
              <img src={close} alt="Close" className="h-5 w-5" />
            </button>
          </div>
          <div className="relative -top-2 left-11 text-xs font-semibold text-gray-500">
            <span>{post.category}</span> · <span>{post.timeAgo}</span>
          </div>

          {/* Title and Content */}
          <h1 className="text-xl font-semibold mt-3">{post.title}</h1>
          <h1 className="mt-2">{post.content}</h1>

          {/* Image loaded dynamically from post object */}
          <img src={post.image} alt={post.title} className="mt-3 w-full h-auto rounded-md" />

          {/* Interaction Section */}
          <div className="flex items-center text-gray-600 text-sm mt-2 relative">
            {/* Upvote Button */}
            <div className="flex items-center space-x-1 border rounded-full rounded-r-none px-3 py-1 mr-0 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => handleUpvote(post.id)} className="flex items-center">
                
                <svg xmlns="http://www.w3.org/2000/svg"  className={` text-lg ${post.upvoted ? "text-blue-500" : "text-gray-500"}`} width="16" height="16" fill="currentColor" class="bi bi-shift" viewBox="0 0 16 16">
  <path  d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z"/>
</svg>
                <span className={`ml-1 font-semibold ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}>
                  Upvote·{post.upvotes.toLocaleString()}
                </span>
              </button>
            </div>

            {/* Downvote Button */}
            <div onClick={() => handleDownvote(post.id)} className="flex items-center border rounded-full rounded-l-none pr-1 py-1 ml-0 hover:bg-gray-100 cursor-pointer">
              
            <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 ${post.dvoted ? "text-red-500" : "text-gray-500"}`} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z" transform="rotate(180 8 8)" />
</svg>

<span className={`ml-1 font-semibold ${post.dvoted ? "text-red-500" : "text-gray-500"}`}>
·{post.downvotes.toLocaleString()}
                </span>
              
            </div>

            {/* Comment Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={comment} className="h-5 w-5 ml-1 text-gray-600" />
              <span className="font-semibold">{post.comments}</span>
            </div>

            {/* Share Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={share} className="h-5 w-7 text-lg" />
              <span className="font-semibold">{post.shares}</span>
            </div>

            {/* More Options */}
            <div className="flex absolute right-0 items-center hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <span className="text-2xl text-gray-600">⋯</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
