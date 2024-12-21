import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "react-avatar";

const Notification = () => {
  // Notifications data
  const notifications = [
    {
      id: 1,
      title: "Human Psychology Facts",
      type: "Space",
      timestamp: "Wed",
      message: "What surprised you today?",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYhWaZy4YufY4wfkP6dl5Juszw6HS_8t3whRzUHCYBJIXJiRX0wOBdYNLXlYjfiye1mM&usqp=CAU", // Placeholder for avatar image
    },
    {
      id: 2,
      title: "Technology Updates",
      type: "Group",
      timestamp: "Tue",
      message:
        "A detailed discussion about the future of artificial intelligence, the possibilities it brings, and the ethical considerations surrounding its implementation in various sectors.",
      avatar: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-65126,resizemode-75,msid-88634316/tech/technology/tracking-the-buzz-in-tech.jpg",
    },
    {
      id: 3,
      title: "Answered Questions",
      type: "Question",
      timestamp: "Mon",
      message: "Your question 'How do I stay motivated in tough times?' was answered by John Doe.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYSi6OELi0D6ZpKtqRZJ4RVYSm4ZMs6WFrw&s",
    },
    {
      id: 4,
      title: "Quora Spaces",
      type: "Space",
      timestamp: "Sun",
      message: "Join the 'Health and Wellness' space to explore articles, tips, and more.",
      avatar: "https://www.ytviews.in/wp-content/uploads/2020/12/quora.svg",
    },
    {
      id: 5,
      title: "New Reads",
      type: "Group",
      timestamp: "Yesterday",
      message:
        "Check out the latest articles on human behavior and decision-making processes shared in the 'Psychology Insights' group.",
      avatar: "https://www.ytviews.in/wp-content/uploads/2020/12/quora.svg",
    },
  ];

  // Helper function to truncate long messages
  const truncateMessage = (message, maxLength = 120) =>
    message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full min-h-screen">
        {/* Main Container */}
        <div className="flex w-full max-w-screen-xl px-7 overflow-hidden">
          {/* Sidebar */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters</h2>
            </div>
            <div className="w-44 mt-6 border-t pt-4">
              <ul className="space-y-4">
                <li className="font-semibold rounded-sm text-red-700 bg-red-100 hover:bg-red-200 pl-4">
                  All Notifications
                </li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Stories</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Questions</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Spaces</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">People updates</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Comments and mentions</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Upvotes</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Your content</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Your profile</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Announcements</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Earnings</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Subscriptions</li>
              </ul>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Notifications</h2>
              <button className="text-sm text-gray-500">Settings</button>
            </div>

            <div className="mt-6 border-t pt-4 space-y-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-center space-x-4">
                  <Avatar
                    src={notification.avatar}
                    size="40"
                    round
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      <span className="text-gray-700">{notification.title}</span> · Posted in{" "}
                      {notification.type} · <span className="text-gray-400">{notification.timestamp}</span>
                    </p>
                    <p className="text-base font-semibold mt-1">
                      {truncateMessage(notification.message)}
                    </p>
                  </div>
                  <button className="text-gray-500">
                    <span className="text-xl">•••</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
