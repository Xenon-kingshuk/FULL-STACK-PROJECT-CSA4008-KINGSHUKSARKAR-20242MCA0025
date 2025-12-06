import { useContext } from "react";
import { PostList } from "../store/Post-list-store";

function Account() {
  const { postList } = useContext(PostList);
  const currentUserId = localStorage.getItem("userId");

  const userPosts = postList.filter((post) => post.userId === currentUserId);

  return (
    <div className="container mt-4 text-white">
      <h2 className="mb-4 text-warning">My Account</h2>
      <p className="mb-4">User ID: <strong>{currentUserId || "Guest"}</strong></p>

      <h4 className="mb-3">My Posts</h4>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div key={post.id} className="card mb-3 bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">{post.title || "Untitled"}</h5>
              <p className="card-text">{post.body}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="img-fluid rounded"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}
              <div className="mt-2">
                {post.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="badge me-1 rounded-pill text-bg-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts created yet.</p>
      )}
    </div>
  );
}

export default Account;
