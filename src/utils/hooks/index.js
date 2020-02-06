import { useState, useEffect } from 'react';

export const useBoolean = (options = {}) => {
	const { onTrue = () => {}, onFalse = () => {}, defaultBoolean = false } = options;

	const [boolean, setState] = useState(defaultBoolean);

	const toggle = () => {
		if (boolean) {
			onFalse();
		} else {
			onTrue();
		}
		setState(!boolean);
	};

	const setFalse = () => {
		setState(false);
		onFalse();
	};

	const setTrue = () => {
		setState(true);
		onTrue();
	};

	return [boolean, { toggle, setFalse, setTrue }];
};

export const useOnClickOutside = (ref, handler) => {
	useEffect(
		() => {
			const listener = event => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}

				handler(event);
			};

			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		// Add ref and handler to effect dependencies
		// It's worth noting that because passed in handler is a new ...
		// ... function on every render that will cause this effect ...
		// ... callback/cleanup to run every render. It's not a big deal ...
		// ... but to optimize you can wrap handler in useCallback before ...
		// ... passing it into this hook.
		[ref, handler],
	);
};
