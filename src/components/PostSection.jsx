import React, { useState } from 'react';
import Avatar from "react-avatar";
import close from '../assets/close.png'; // Ensure this is the correct path
import share from '../assets/share.png';
import comment from '../assets/comment.png';

const PostSection = () => {
  const [posts, setPosts] = useState([
    //  posts data 
    {
      id: 1,
      name: 'Raj Sharma',
      profileImage: 'https://cdn.razorpay.com/logos/KCAttgJ1F1ThQ9_large.jpg', // You can provide profile image here
      title: 'Movie Night Review',
      content: 'Just watched the latest movie and it was amazing!',
      upvotes: 3100,
      downvotes: 31,
      comments: 30,
      shares: 14,
      Qualifications: 'Engineer,Movie Addict',
      timeAgo: '5d',
      image: "https://miro.medium.com/v2/resize:fit:1200/1*3PWG4m-Sh3wV4hTiWUJxgQ.jpeg" // Dynamic image URL for each post
    },
    
  {
    id: 2,
    name: 'Teemyco',
    profileImage: 'https://www.eu-startups.com/wp-content/uploads/2021/06/1611785470095.jpeg', // You can provide profile image here
    title: 'Effortless Interactions in Remote Work.',
    content: 'Bridge remote distances with quick, on-the-fly virtual team interactions.',
    upvotes: 1200,
    downvotes:52 ,
    comments: 451,
    shares: 897,
    Qualifications: 'Sponsored',
    timeAgo: '',
    image: 'https://th.bing.com/th/id/OIP.tl04bMkLVrRr6WRDJinftAHaEi?rs=1&pid=ImgDetMain' // Dynamic image URL for each post
  },
  {
    id: 3,
    name: 'TARUN SAI 2030',
    profileImage: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1673453535.jpg?resize=1200:*', // You can provide profile image here
    title: 'How can you imorove yourself reqularly?',
    content: `1. Fix your schedule and sleep at 9:00 PM to be awake at 4:00 AM.

2. Quit your excuses and work out for 30 minutes daily.

3. Include 2 eggs plus fresh fruits to optimize your health.

4. Prioritize 2 cold showers a day with no excuses. I promise your self-discipline will be boosted.

5. Listen more than you talk and be teachable.`,
    upvotes:4512 ,
    downvotes:21 ,
    comments: 4541,
    shares: 1213,
    Qualifications:   `BTech ( Mechanical ) from Vignan's Institute of Information Technology  `,
    timeAgo: 'Jan 30',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-9a48ca0f52257bca2226990ab883db47' // Dynamic image URL for each post
  },
  {
    id:4 ,
    name: 'Perdeep Kumar',
    profileImage: 'https://pbs.twimg.com/profile_images/470091447887077376/ZL5stHAG_400x400.jpeg', // You can provide profile image here
    title: "How is Chandigarh University's CSE better than other private universities in India?",
    content: "This is really an interesting question. I will tell you this after introducing myself first. Last year, I was searching for Computer Science Engineering. And my research came to an end at Chandigarh University. There are not one but numerous reasons for pursuing Computer Science Engineering at Chandigarh University. I have been studying in CU since last year and my experience has been going really well.",
    upvotes: 448,
    downvotes: 24,
    comments: 452,
    shares: 2433,
    Qualifications: 'Ph.D. in Management & Marketing',
    timeAgo: 'Feb 22',
    image: 'https://mma.prnewswire.com/media/1751390/Chandigarh_University.jpg?p=facebook' // Dynamic image URL for each post
  },
  ]);

  const handleUpvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already downvoted, reverse downvote and upvote it
        if (post.dvoted) {
          post.dvoted = false;
          post.downvotes -= 1;
        }
        // Toggle upvote
        post.upvotes = post.upvoted ? post.upvotes - 1 : post.upvotes + 1;
        post.upvoted = !post.upvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  
  const handleDownvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already upvoted, reverse upvote and downvote it
        if (post.upvoted) {
          post.upvoted = false;
          post.upvotes -= 1;
        }
        // Toggle downvote
        post.downvotes = post.dvoted ? post.downvotes - 1 : post.downvotes + 1;
        post.dvoted = !post.dvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  

  const toggleContent = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.expanded = !post.expanded;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-gray-100 m-3 h-fit border-spacing-1 rounded-lg relative text-gray-600 text-sm z-0">
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
            <span>{post.Qualifications}</span> · <span>{post.timeAgo}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold mt-3">{post.title}</h1>

          {/* Content */}
          <div className="mt-2">
  {post.content.length > 150 ? (
    <>
      {post.expanded ? post.content : `${post.content.slice(0, 150)}...`}
      <button
        onClick={() => toggleContent(post.id)}
        className="ml-2 text-blue-500 hover:underline"
      >
        {post.expanded ? "Show Less" : "Show More"}
      </button>
    </>
  ) : (
    post.content
  )}
</div>


          {/* Image */}
          <img src={post.image} alt={post.title} className="mt-3 w-full h-auto rounded-md" />

          {/* Interaction Section */}
          <div className="flex items-center text-gray-600 text-sm mt-2 relative">
            {/* Upvote Button */}
            <div className="flex items-center space-x-1 border rounded-full rounded-r-none px-3 py-1 mr-0 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => handleUpvote(post.id)} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-lg ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z" />
                </svg>
                <span className={`ml-1 font-semibold ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}>
                  Upvote·{post.upvotes.toLocaleString()}
                </span>
              </button>
            </div>

            {/* Downvote Button */}
            <div
              onClick={() => handleDownvote(post.id)}
              className="flex items-center border rounded-full rounded-l-none pr-1 py-1 ml-0 hover:bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 ${post.dvoted ? "text-red-500" : "text-gray-500"}`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z"
                  transform="rotate(180 8 8)"
                />
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
