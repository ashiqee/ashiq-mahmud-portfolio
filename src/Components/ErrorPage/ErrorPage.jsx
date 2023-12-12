import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen text-center items-center">

            <h2 className="text-white text-9xl py-52 text-center">404 <br />PAGE NOT FOUND</h2>
            <Link to='/'>

                <button className="btn btn-outline text-[#00FFFF]">Back Home</button>
            </Link>

        </div>
    );
};

export default ErrorPage;