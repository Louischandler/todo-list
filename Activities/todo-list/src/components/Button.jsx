const Button = () => {
  return (
      <div className="flex gap-4 ml-74">
          <button className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600">
              Add
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-red-600">
              Delete
          </button>
      </div>
  );
};

export default Button;