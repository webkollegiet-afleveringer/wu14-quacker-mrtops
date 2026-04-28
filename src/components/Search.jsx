import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchTool = ({ defaultOpen = false, inline = false, placeholder = "Search Quacker" }) => {
  if (inline) {
    return (
      <div className="flex items-center gap-2 bg-bg border border-primary-line rounded-full px-3 py-1.5 w-full">
        <FaMagnifyingGlass className="text-text-secondary size-4" />
        <input 
          type="text" 
          placeholder={placeholder}
          className="bg-transparent text-text placeholder:text-text-secondary outline-none w-full text-sm"
          autoFocus={defaultOpen}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-bg border border-primary-line rounded-2xl p-4 mx-4 mb-2">
      <FaMagnifyingGlass className="size-5 text-text-secondary" />
      <input 
        type="text" 
        placeholder={placeholder}
        className="bg-transparent text-text placeholder:text-text-secondary outline-none w-full"
        autoFocus={!defaultOpen}
      />
    </div>
  );
}

export default SearchTool;
