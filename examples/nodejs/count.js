(function(){
	let counter = 0;
	const echo = function(){
		if (counter === 10){
			return;
		}

		setTimeout(function(){
			counter++;
			echo();
			process.stdout.write(counter.toString() + "\n");
		}, 500);
	}

	echo();
})();
