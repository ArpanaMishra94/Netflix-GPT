
import { Puff } from "react-loader-spinner"

export const Shimmer = () => {
	return (
		<><div className="hidden md:block -mt-[40px] ml-[536px]">
			<Puff
				height="800"
				width="110"
				radius={1}
				color="#fcba28"
				ariaLabel="puff-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div></>
	)
}