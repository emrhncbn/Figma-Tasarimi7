const App = () => {
    return (
      <div className="bg-custom-background bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-[#000000] absolute left-[15%] top-[0%] rounded-full w-[450px] h-[450px] border-opacity-50 border-black border-solid border-[50px] bg-opacity-10"></div>
        <div className="flex items-center bg-white bg-opacity-30 rounded-[60px] shadow-xl relative">
          <div className="flex flex-col justify-center items-center w-[650px] h-[550px]">
            <h1 className="text-white font-bold text-5xl mb-4">LOGIN</h1>
            <input
              className="bg-white opacity-40 text-white mb-5 px-4 py-2 rounded w-[400px] h-[50px]"
              type="text"
              placeholder="Username"
            />
            <input
              className="bg-white opacity-40 text-white mb-5 px-4 py-2 rounded w-[400px] h-[50px]"
              type="password"
              placeholder="Password"
            />
            <div className="flex items-center mb-4 w-[400px]">
              <button className="bg-[#000000] text-white opacity-50 px-6 py-2 rounded w-[200px] h-[50px] font-bold">
                LOGIN
              </button>
              <div className="flex flex-col ml-4">
                <a href="#" className="text-white mb-2 font-bold opacity-90 ml-9">Forgot password</a>
                <a href="#" className="text-white font-bold opacity-90 ml-9">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  