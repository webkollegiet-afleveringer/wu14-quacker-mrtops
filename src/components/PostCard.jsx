import { formatDistanceToNow } from "date-fns";

export default function PostCard({ post }) {
  return (
    <div className="p-4 border-b border-primary-line hover:bg-bg-hover transition-colors">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold flex-shrink-0">
          {post.author.username.charAt(0).toUpperCase()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-text truncate">{post.author.username}</span>
            <span className="text-text-secondary text-sm">@{post.author.username}</span>
            <span className="text-text-secondary">·</span>
            <span className="text-text-secondary text-sm">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
          </div>
          
          <p className="text-text mt-1 whitespace-pre-wrap break-words">{post.content}</p>
        </div>
      </div>
    </div>
  );
}
