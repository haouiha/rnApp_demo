const createTypes = (action, resource) =>
	['REQUEST', 'SUCCESS', 'FAILURE'].reduce(
		(result, type) => ({
			...result,
			[type]: `${action.toUpperCase()}_${resource.toUpperCase()}_${type}`,
		}),
		{}
	);

const createAction = (type, payload = {}) => ({
	type,
	payload,
});

export { createTypes, createAction };
