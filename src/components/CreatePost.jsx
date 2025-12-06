import { useContext, useRef, useState } from "react";
import { PostList } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    localStorage.setItem("userId", userId);
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    const newPost = {
      id: Date.now(),
      title: postTitle,
      body: postBody,
      userId: userId,
      tags: tags,
      image: imageBase64,
      likes: 0,
      views: 0,
      comments: [],
    };

    // Reset form fields
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
    setImageBase64(null);
    setImagePreview(null);

    // Add post locally and navigate to home
    addPost(newPost);
    navigate("/");
  };

  return (
    <form id="post-form" className="m-4 create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label fw-semibold">
          Enter your user Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control border border-secondary"
          id="userId"
          placeholder="Your user Id"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Enter the title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control border border-secondary"
          id="title"
          placeholder="How are you feeling today....."
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label fw-semibold">
          Enter the content
        </label>
        <textarea
          rows={4}
          ref={postBodyElement}
          className="form-control border border-secondary"
          id="body"
          placeholder="Tell us more about it"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label fw-semibold">
          Enter your hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control border border-secondary"
          id="tags"
          placeholder="Please enter tags using space"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label fw-semibold">
          Add photo (optional)
        </label>
        <input
          type="file"
          className="form-control border border-secondary"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-3"
            style={{ maxHeight: "200px", borderRadius: "8px" }}
          />
        )}
      </div>

      <div>
        <button type="submit" className="btn btn-primary border-dark">
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
