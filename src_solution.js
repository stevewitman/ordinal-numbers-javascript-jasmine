var ordinal = function(n) {
	if (n % 10 === 1 && n % 100 != 11) {
		return n + 'st';
	} else if (n % 10 === 2 && n % 100 != 12) {
		return n + 'nd';
	} else if (n % 10 === 3 && n % 100 != 13) {
		return n + 'rd';
	} else {
		return n + 'th';
	}
}

var ordinal_up_to = function(n) {
	var result = '';
	for(var i=1; i<=n; i++) {
		result += ordinal(i);
		if (i < n) {
			result += ', '
		}
	}
	return result;
}

var ordinal_between = function(n1, n2) {
	var result = [];
	for(var i=n1; i<=n2; i++) {
		result.push(ordinal(i));
	}
	return result.join(', ');
}

exports.ordinal = ordinal
exports.ordinal_up_to = ordinal_up_to
exports.ordinal_between = ordinal_between


After interviews, copy and paste this into an email to Amy Saylor and indicate scores by making the appropriate score bold.
Ability to Recognize Patterns/Comp Logic [1 2 3 4]
Able to Take Hints and Direction [1 2 3 4]
Able to Communicate Thought Process [1 2 3 4]
Able to Maintain Composure [1 2 3 4]
Joy of Learning/Interest in Solving Puzzle [1 2 3 4]
Move Forward??? [No Waitlist Yes StrongYes]
Estimated percentile [0-20 20-40 40-60 60-80 80-100]
Comments:



