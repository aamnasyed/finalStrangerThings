import { useState, useEffect } from 'react';

const COHORT_NAME = '2301-FTB-MT-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Profile = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [myId, setMyId] = useState('');
  const [myUsername, setMyUsername] = useState('');

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
  });
      const result = await response.json();
      console.log(result);

      setMyId(result.data._id);
      setMyUsername(result.data.username);
      setMyPosts(result.data.posts);
      setMyMessages(result.data.messages);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);

  return (
    <div className="profileInfo">
      <h1>Profile </h1>
      <p>Username: {myUsername}</p>
      {myPosts.map(post => (
        <div key={post._id}>
          <p>Title: {post.title}</p>
          <p>Description: {post.description}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>
        </div>
      ))}
    </div>
  );
};



