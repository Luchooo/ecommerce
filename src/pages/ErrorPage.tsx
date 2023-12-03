import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col bg-white">
      <img
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        className="h-64 w-full object-cover"
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oops!
          </h1>

          <p className="mt-4 text-gray-500">
            Sorry, an unexpected error has occurred
          </p>
          <Link
            to="/"
            className="mt-8 bg-black/80 flex p-4 justify-center items-center text-white w-full font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
