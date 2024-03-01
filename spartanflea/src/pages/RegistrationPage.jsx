import {Link, Navigate} from "react-router-dom"; 

export default function RegistrationPage(){

    return(
       
<body class="bg-gray-100">
    <div class="min-h-screen flex justify-center items-center">
        <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 class="text-2xl mb-4 text-center font-bold">Register</h2>
            <form action="#" method="POST">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 font-bold mb-2">Username</label>
                    <input type="text" id="username" name="username" class="border border-gray-300 rounded-md px-3 py-2 w-full" required></input>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" class="border border-gray-300 rounded-md px-3 py-2 w-full" required></input>
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" class="border border-gray-300 rounded-md px-3 py-2 w-full" required></input>
                </div>
                <div class="mb-6">
                    <label for="password_confirmation" class="block text-gray-700 font-bold mb-2">Confirm Password</label>
                    <input type="password" id="password_confirmation" name="password_confirmation" class="border border-gray-300 rounded-md px-3 py-2 w-full" required></input>
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
                    <Link to={'/login'}>
                        <p>Already have an account?</p>
                    </Link>
                </div>
            </form>
        </div>
    </div>
</body>


    ); 
}