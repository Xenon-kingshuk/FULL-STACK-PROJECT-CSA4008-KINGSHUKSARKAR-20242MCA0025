// Post.jsx
import { useContext, useState } from "react";
import { MdDelete, MdFavorite } from "react-icons/md";
import { PostList } from "../store/Post-list-store";
import "../routes/App.css";

function Post({ post }) {
  const { deletePost, likePost, addComment } = useContext(PostList);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      addComment(post.id, newComment.trim());
      setNewComment("");
    }
  };

  return (
    <div className="card m-4 post-card">
      <div className="card-body">
        {/* User ID */}
        <h5 className="card-title d-flex justify-content-between align-items-center">
          <strong>User ID:</strong> {post.userId || "Unknown"}
        </h5>

        {/* Title */}
        <h5
          className="card-title d-flex justify-content-between align-items-center"
          style={{ color: "#39ff14" }} // neon green
        >
          <span>{post.title || "Untitled Post"}</span>
          <span
            className="badge p-2 bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>

        {/* Body */}
        <p className="card-text">{post.body}</p>

        {/* Image (optional) */}
        {post.image && (
          <img
            src={post.image}
            alt="post"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        )}

        {/* Tags */}
        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="mb-2">
            <strong className="text-secondary">Tags:</strong>{" "}
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="badge me-1 rounded-pill text-bg-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Views */}
        <div className="alert alert-success mt-2" role="alert">
          This post got {post.views || 0} views
        </div>

        {/* Like Button */}
        <button
          className="btn btn-outline-success me-2"
          onClick={() => likePost(post.id)}
        >
          <MdFavorite /> Like ({post.likes || 0})
        </button>

        {/* Comments */}
        <div className="mt-3">
          <h6 className="text-info">Comments:</h6>
          {(post.comments || []).map((comment, index) => (
            <div key={index} className="text-light mb-1">
              • {comment}
            </div>
          ))}

          <div className="d-flex mt-2">
            <input
              className="form-control me-2"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleCommentSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
