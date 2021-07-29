import React from 'react'
import { string, number } from 'prop-types'

const Computer = ({ fill, height, width }) => (
	<div style={{ position: 'relative', marginRight: 20 }}>
		<svg
			width={height}
			height={width}
			viewBox="0 0 40 40"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z"
				fill={fill}
			/>
			<path
				d="M14.8506 17C16.1789 17 17.2569 17.9135 17.2569 19.0416V30.125C17.2569 30.6665 17.0034 31.1858 16.5521 31.5687C16.1008 31.9515 15.4888 32.1666 14.8506 32.1666H8.65625C8.01807 32.1666 7.40603 31.9515 6.95477 31.5687C6.50352 31.1858 6.25 30.6665 6.25 30.125V19.0416C6.25 17.9135 7.328 17 8.65625 17H14.8506ZM14.8506 18.75H8.65625C8.56508 18.75 8.47765 18.7807 8.41318 18.8354C8.34872 18.8901 8.3125 18.9643 8.3125 19.0416V30.125C8.3125 30.286 8.4665 30.4166 8.65625 30.4166H14.8506C14.9418 30.4166 15.0292 30.3859 15.0937 30.3312C15.1582 30.2765 15.1944 30.2023 15.1944 30.125V19.0416C15.1944 18.9643 15.1582 18.8901 15.0937 18.8354C15.0292 18.7807 14.9418 18.75 14.8506 18.75ZM12.0938 27.5C12.355 27.5 12.6065 27.5843 12.7975 27.7356C12.9884 27.887 13.1045 28.0942 13.1223 28.3153C13.1401 28.5365 13.0583 28.7552 12.8934 28.9272C12.7285 29.0991 12.4928 29.2116 12.234 29.2418L12.0938 29.25H11.4062C11.145 29.2499 10.8935 29.1657 10.7025 29.0143C10.5116 28.863 10.3955 28.6558 10.3777 28.4346C10.3599 28.2134 10.4417 27.9948 10.6066 27.8228C10.7715 27.6508 11.0072 27.5384 11.266 27.5081L11.4062 27.5H12.0938ZM30.6562 8.83331C31.4402 8.83323 32.1949 9.08566 32.7679 9.53958C33.3409 9.9935 33.6895 10.6151 33.7431 11.2786L33.75 11.4583V21.9583C33.7501 22.6235 33.4526 23.2638 32.9176 23.75C32.3826 24.2362 31.6501 24.532 30.868 24.5775L30.6562 24.5833H25.5055V26.9166H27.2188C27.48 26.9167 27.7315 27.0009 27.9225 27.1523C28.1134 27.3036 28.2295 27.5108 28.2473 27.732C28.2651 27.9532 28.1833 28.1719 28.0184 28.3438C27.8535 28.5158 27.6178 28.6283 27.359 28.6585L27.2188 28.6666H18.625V26.9166H23.443V24.5833H18.625V22.8333H30.6562C30.9055 22.8333 31.1462 22.7567 31.334 22.6178C31.5218 22.4788 31.644 22.2868 31.6779 22.0773L31.6875 21.9583V11.4583C31.6875 11.2262 31.5789 11.0037 31.3855 10.8396C31.1921 10.6755 30.9298 10.5833 30.6562 10.5833H12.0938C11.8445 10.5833 11.6038 10.6599 11.416 10.7989C11.2282 10.9379 11.106 11.1298 11.0721 11.3393L11.0625 11.4583V15.8333H9V11.4583C8.9999 10.7932 9.29741 10.1528 9.83238 9.6666C10.3674 9.18041 11.0999 8.88467 11.882 8.83915L12.0938 8.83331H30.6562Z"
				fill="white"
			/>
		</svg>
	</div>
)

Computer.propTypes = {
	fill: string,
	height: number,
	width: number
}

Computer.defaultProps = {
	fill: 'black',
	height: 40,
	width: 40
}

export default Computer
