export const getShortenNumber = (num) => {
	const numStr = num.toString();
	let number = numStr;
	if (numStr.length > 3) {
		const slicedNum = numStr.slice(0, numStr.length - 3);
		number = slicedNum + '.' + numStr[numStr.length - 3] + 'k';
	}
	return number;
};

export const getTime = (prevSeconds) => {
	const now = new Date().getTime();
	const nowSeconds = Math.round(now / 1000);
	console.log(`prev seconds is ${prevSeconds}`);

	const secondsDiff = nowSeconds - prevSeconds;
	const minutes = Math.round(secondsDiff / 60);

	if (minutes <= 1) {
		return minutes + 'min ago';
	} else if (minutes < 60) {
		return minutes + 'mins ago';
	} else if (minutes >= 60 && minutes < 120) {
		return `${Math.floor(minutes / 60)} hour ago`;
	} else if (minutes >= 120 && minutes < 1440) {
		return `${Math.floor(minutes / 60)} hours ago`;
	} else if (minutes >= 1440 && minutes < 2880) {
		return `${Math.floor(minutes / 1440)} day ago`;
	} else if (minutes >= 2880 && minutes < 10080) {
		return `${Math.floor(minutes / 1440)} days ago`;
	} else if (minutes >= 10080 && minutes < 20160) {
		return `${Math.floor(minutes / 10080)} week ago`;
	} else if (minutes >= 20160 && minutes < 43344) {
		return `${Math.floor(minutes / 10080)} weeks ago`;
	} else if (minutes >= 43800 && minutes < 87600) {
		return `${Math.floor(minutes / 43800)} month ago`;
	} else if (minutes >= 87600 && minutes < 525600) {
		return `${Math.floor(minutes / 43800)} months ago`;
	} else if (minutes >= 525600 && minutes < 1051200) {
		return `${Math.floor(minutes / 525600)} year ago`;
	} else {
		return `${Math.floor(minutes / 525600)} years ago`;
	}
};

export const dataLimit = (data, limit) => {
	const slicedData = data.slice(0, limit);
	return slicedData;
};

export const hideElement = (className) => {
	document.querySelector(className).style.display = 'none';
};

export const showElement = (className) => {
	document.querySelector(className).style.display = 'block';
};
