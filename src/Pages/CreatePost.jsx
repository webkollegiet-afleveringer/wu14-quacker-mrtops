import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/posts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, authorId: user?.id }),
      });

      if (!res.ok) throw new Error("Failed to create post");

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-text mb-6">Create Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          maxLength={280}
          className="w-full h-40 p-4 rounded-xl bg-bg border border-primary-line text-text placeholder:text-text-secondary outline-none focus:border-accent resize-none"
          required
        />
        
        <div className="flex justify-between items-center">
          <span className={`text-sm ${content.length >= 260 ? 'text-red-500' : 'text-text-secondary'}`}>
            {content.length}/280
          </span>
          
          <button
            type="submit"
            disabled={loading || !content.trim()}
            className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
