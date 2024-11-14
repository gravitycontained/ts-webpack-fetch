export function round(value: number, precision = 3)
{
	const f = Math.pow(10, precision);
	return Math.round(value * f) / f;
}
