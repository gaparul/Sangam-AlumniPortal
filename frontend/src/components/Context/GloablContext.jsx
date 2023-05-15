import React, { useState, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const breakpoint = (device) => {
		if (device === "mobile") return window.innerWidth < 672;
		else if (device === "tab") return window.innerWidth <= 880;
		else return window.innerWidth > 880;
	};
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated)
	);
	const [isLoading, setIsLoading] = useState(false);
	const [openNav, setOpenNav] = useState(
		breakpoint("mobile") || breakpoint("tab") ? false : true
	);
	const [user, setUser] = useState({
		name: "Sakshi Soni",
		status: "Developing",
		email: "sakshisoni61000@gmail.com",
		phone: 9456849466,
		username: "sakshisoni",
		batch: "2020",
		bio: "MERN Stack developer",
		currentOrganization: "MERN",
		desgination: "MERN Stack Developer",
		dob: "2002-06-25",
		gender: "Female",
		avatar: "https://avatars.githubusercontent.com/u/81064287?v=4",
	});
	const axiosInstance = axios.create({
		baseURL: "http://localhost:8082/",
	});
	return (
		<GlobalContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				isLoading,
				setIsLoading,
				openNav,
				setOpenNav,
				axiosInstance,
				user,
				setUser,
				breakpoint,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
