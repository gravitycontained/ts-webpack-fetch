const current: {[key: string]: number} = {};

export function uniqueId(prefix: string = 'id-')
{
	return prefix + (current[prefix] = (current[prefix] ?? 0) + 1).toString(36);
}
