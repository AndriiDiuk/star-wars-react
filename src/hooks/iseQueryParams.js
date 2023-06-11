import { useLocation } from "react-router-dom"

export const iseQueryParams = () => {
	return new URLSearchParams(useLocation().search)
}