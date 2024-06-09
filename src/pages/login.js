import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/modal.css';
import FailLoginModal from 'src/components/FailLoginModal';

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 transition block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
    >
      {value}
    </button>
  );
};

const Input = ({
  type,
  id,
  name,
  label,
  placeholder,
  autofocus,
  value,
  onChange,
}) => {
  return (
    <label className="text-gray-500 block mt-3">
      {label}
      <input
        autoFocus={autofocus}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
      />
    </label>
  );
};

const Page = () => {
  const navigate = useNavigate();

  const [FL_ModalIsOpen, setFL_ModalIsOpen] = useState(false);
  const openFL_Modal = () => setFL_ModalIsOpen(true);
  const closeFL_Modal = () => setFL_ModalIsOpen(false);

  const [loginData, setLoginData] = useState({
    userId: '',
    userPwd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://13.125.8.139:8080/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const res = await response.json();

      if (res.status !== 200) {
        openFL_Modal();
        return;
      }

      localStorage.setItem('token', res.data.accessToken);
      navigate('/pie-chart');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="userId"
            name="userId"
            label="ID"
            placeholder="ID"
            autofocus={true}
            value={loginData.userId}
            onChange={handleChange}
          />
          <Input
            type="password"
            id="userPwd"
            name="userPwd"
            label="Password"
            placeholder="••••••••••"
            value={loginData.userPwd}
            onChange={handleChange}
          />
          <Button value="Submit" />
        </form>
      </div>

      <FailLoginModal isOpen={FL_ModalIsOpen} closeModal={closeFL_Modal} />
    </div>
  );
};

export default Page;
