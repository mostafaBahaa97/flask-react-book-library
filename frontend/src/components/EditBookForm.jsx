import { useState, useEffect } from "react";

const EditBookForm = ({ book, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ title: "", author: "" });

  useEffect(() => {
    if (book) {
      setFormData({ title: book.title, author: book.author });
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...book, ...formData });
  };

  return (

    <>
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto rounded-2xl shadow-2xl animate-fade-in"
      style={{ animation: "fadeIn 0.7s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px) scale(0.98);}
            to { opacity: 1; transform: translateY(0) scale(1);}
          }
          .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);}
          .input-anim:focus {
            box-shadow: 0 0 0 3px #4ade8044;
            transition: box-shadow 0.2s;
          }
          .btn-anim {
            transition: transform 0.15s, box-shadow 0.15s;
          }
          .btn-anim:hover {
            transform: translateY(-2px) scale(1.04);
            box-shadow: 0 4px 16px #22c55e33;
          }
          .cancel-anim:hover {
            background: #f3f4f6;
            color: #16a34a;
            border-color: #16a34a;
          }
        `}
      </style>
      <h2 className="text-3xl font-bold mb-8 text-green-700 flex items-center gap-3 animate-fade-in">
        <span role="img" aria-label="Edit" className="animate-pulse text-2xl">✏️</span> Edit Book
      </h2>
      <table className="w-full mb-10 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>
        <tbody>
          <tr>
            <td className="pr-6 py-4 align-middle w-1/4 min-w-[100px]">
              <label className="block text-gray-700 font-semibold mb-2 mx-2 text-lg" htmlFor="title">
                Title
              </label>
            </td>
            <td className="py-4 align-middle w-3/4">
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Book Title"
                className="input-anim w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition text-lg"
              />
            </td>
          </tr>
          <tr>
            <td className="pr-6 py-4 align-middle w-1/4 min-w-[100px]">
              <label className="block text-gray-700 font-semibold mb-2 mx-2 text-lg" htmlFor="author">
                Author
              </label>
            </td>
            <td className="py-4 align-middle w-3/4">
              <input
                id="author"
                name="author"
                type="text"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author Name"
                className="input-anim w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition text-lg"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="row w-full text-center animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
        <div className=" mb-4">

        <button
          type="button"
          onClick={onCancel}
          className=" cancel-anim btn-anim p-3 border border-gray-300 mx-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200 text-lg"
          >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-anim p-3 border border-gray-300 mx-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200 text-lg"
          >
          Save
        </button>
          </div>
      </div>
    </form>
    </>
    
  );
};

export default EditBookForm;
