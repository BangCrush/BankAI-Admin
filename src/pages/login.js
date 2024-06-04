const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
    >
      {value}
    </button>
  );
};

const Input = ({ type, id, name, label, placeholder, autofocus }) => {
  return (
    <label className="text-gray-500 block mt-3">
      {label}
      <input
        autoFocus={autofocus}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
      />
    </label>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form>
          <Input
            type="text"
            id="id"
            name="id"
            label="ID"
            placeholder="ID"
            autofocus={true}
          />
          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="••••••••••"
          />
          <Button value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Page;
